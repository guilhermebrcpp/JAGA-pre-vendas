import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import type { ContactInput } from "../context/ContactsContext";
import "../css/Contacts.css";

type ContactFormProps = {
    initialValues?: ContactInput;
    submitLabel: string;
    onSubmit: (data: ContactInput) => void;
};

const empty: ContactInput = { name: "", email: "", phone: "", company: "", notes: "" };

function ContactForm({ initialValues = empty, submitLabel, onSubmit }: ContactFormProps) {
    const [values, setValues] = useState<ContactInput>(initialValues);
    const [errors, setErrors] = useState<{ name?: string; email?: string }>({});

    const set = (field: keyof ContactInput, value: string) =>
        setValues(prev => ({ ...prev, [field]: value }));

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        const newErrors: { name?: string; email?: string } = {};
        if (!values.name.trim()) newErrors.name = "O nome é obrigatório.";
        if (values.email && !/^\S+@\S+\.\S+$/.test(values.email)) newErrors.email = "E-mail inválido.";
        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) {
            onSubmit({ ...values, name: values.name.trim() });
        }
    }

    return (
        <form onSubmit={handleSubmit} className="jaga-card" style={{ maxWidth: "40rem" }} noValidate>
            <div className="mb-3">
                <label className="form-label fw-bold">Nome *</label>
                <input className="form-control jaga-input" value={values.name} onChange={e => set("name", e.target.value)} />
                {errors.name && <div className="text-danger mt-1">{errors.name}</div>}
            </div>
            <div className="mb-3">
                <label className="form-label fw-bold">E-mail</label>
                <input className="form-control jaga-input" type="email" value={values.email} onChange={e => set("email", e.target.value)} />
                {errors.email && <div className="text-danger mt-1">{errors.email}</div>}
            </div>
            <div className="row">
                <div className="col mb-3">
                    <label className="form-label fw-bold">Telefone</label>
                    <input className="form-control jaga-input" value={values.phone} onChange={e => set("phone", e.target.value)} />
                </div>
                <div className="col mb-3">
                    <label className="form-label fw-bold">CNPJ</label>
                    <input className="form-control jaga-input" value={values.company} onChange={e => set("company", e.target.value)} />
                </div>
            </div>
            <div className="mb-3">
                <label className="form-label fw-bold">Observações</label>
                <textarea className="form-control jaga-input" rows={3} value={values.notes} onChange={e => set("notes", e.target.value)} />
            </div>
            <div style={{ display: "flex", gap: "0.5rem" }}>
                <button type="submit" className="jaga-btn">{submitLabel}</button>
                <Link to="/clientes" className="jaga-btn">Cancelar</Link>
            </div>
        </form>
    );
}

export default ContactForm;
