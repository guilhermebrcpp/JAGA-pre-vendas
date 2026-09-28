import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Contact = {
    id: string;
    name: string;
    email: string;
    phone: string;
    company: string;
    notes: string;
};

export type ContactInput = Omit<Contact, "id">;

type ContactsContextType = {
    contacts: Contact[];
    addContact: (data: ContactInput) => void;
    updateContact: (id: string, data: ContactInput) => void;
    getContact: (id: string) => Contact | undefined;
};

const STORAGE_KEY = "jaga-contacts";

const seed: Contact[] = [
    { id: "1", name: "Rei Ayanami", email: "rei@nerv.jp", phone: "(11) 91234-5678", company: "NERV", notes: "" },
    { id: "2", name: "Alice Margatroid", email: "alice@gensokyo.jp", phone: "(11) 98765-4321", company: "Forest of Magic", notes: "" },
    { id: "3", name: "Asuka Langley", email: "asuka@nerv.jp", phone: "(11) 95555-0000", company: "NERV", notes: "" },
];

function load(): Contact[] {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) return JSON.parse(raw);
    } catch {
        // localStorage indisponível ou JSON inválido: usa os dados iniciais
    }
    return seed;
}

const ContactsContext = createContext<ContactsContextType | null>(null);

export function ContactsProvider({ children }: { children: ReactNode }) {
    const [contacts, setContacts] = useState<Contact[]>(load);

    useEffect(() => {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
        } catch {
            // ignora erro de armazenamento
        }
    }, [contacts]);

    const addContact = (data: ContactInput) =>
        setContacts(prev => [...prev, { ...data, id: crypto.randomUUID() }]);

    const updateContact = (id: string, data: ContactInput) =>
        setContacts(prev => prev.map(c => (c.id === id ? { ...data, id } : c)));

    const getContact = (id: string) => contacts.find(c => c.id === id);

    return (
        <ContactsContext.Provider value={{ contacts, addContact, updateContact, getContact }}>
            {children}
        </ContactsContext.Provider>
    );
}

export function useContacts() {
    const ctx = useContext(ContactsContext);
    if (!ctx) throw new Error("useContacts deve ser usado dentro de ContactsProvider");
    return ctx;
}
