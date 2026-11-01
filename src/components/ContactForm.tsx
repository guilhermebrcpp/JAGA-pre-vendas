import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import type { ContactInput } from "../context/ContactsContext";

type ContactFormProps = {
    title: string;
    subtitle?: string;
    initialValues?: ContactInput;
    submitLabel: string;
    onSubmit: (data: ContactInput) => void;
};

const empty: ContactInput = { name: "", email: "", phone: "", company: "", notes: "" };

function ContactForm({ title, subtitle, initialValues = empty, submitLabel, onSubmit }: ContactFormProps) {
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
        <form onSubmit={handleSubmit} className="card form-card" noValidate>
            <h2 className="card-heading">{title}</h2>
            {subtitle && <p className="card-description">{subtitle}</p>}

            <div style={{ height: 20 }} />

            <div className="field">
                <label className="field-label" htmlFor="contact-name">Nome *</label>
                <input
                    id="contact-name"
                    className={`input${errors.name ? " invalid" : ""}`}
                    value={values.name}
                    onChange={e => set("name", e.target.value)}
                />
                {errors.name && <div className="field-error">{errors.name}</div>}
            </div>

            <div className="field">
                <label className="field-label" htmlFor="contact-email">E-mail</label>
                <input
                    id="contact-email"
                    className={`input${errors.email ? " invalid" : ""}`}
                    type="email"
                    value={values.email}
                    onChange={e => set("email", e.target.value)}
                />
                {errors.email && <div className="field-error">{errors.email}</div>}
            </div>

            <div className="field-row">
                <div className="field">
                    <label className="field-label" htmlFor="contact-phone">Telefone</label>
                    <input id="contact-phone" className="input" value={values.phone} onChange={e => set("phone", e.target.value)} />
                </div>
                <div className="field">
                    <label className="field-label" htmlFor="contact-cnpj">CNPJ</label>
                    <input id="contact-cnpj" className="input" value={values.company} onChange={e => set("company", e.target.value)} />
                </div>
            </div>

            <div className="field">
                <label className="field-label" htmlFor="contact-notes">Observações</label>
                <textarea id="contact-notes" className="input" rows={3} value={values.notes} onChange={e => set("notes", e.target.value)} />
            </div>

            <div className="form-actions">
                <Link to="/clientes" className="btn btn-outline">Cancelar</Link>
                <button type="submit" className="btn btn-primary">{submitLabel}</button>
            </div>
        </form>
    );
}

export default ContactForm;
