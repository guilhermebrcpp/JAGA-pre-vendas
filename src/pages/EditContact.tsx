import { Link, useNavigate, useParams } from "react-router-dom";
import Layout from "../components/Layout";
import ContactForm from "../components/ContactForm";
import { useContacts } from "../context/ContactsContext";

function EditContact() {
    const { id } = useParams();
    const { getContact, updateContact } = useContacts();
    const navigate = useNavigate();
    const contact = id ? getContact(id) : undefined;

    return (
        <Layout title="Clientes">
            {contact ? (
                <ContactForm
                    title="Editar cliente"
                    subtitle="Atualize os dados do cliente"
                    initialValues={{ name: contact.name, email: contact.email, phone: contact.phone, company: contact.company, notes: contact.notes }}
                    submitLabel="Salvar alterações"
                    onSubmit={data => {
                        updateContact(contact.id, data);
                        navigate("/clientes");
                    }}
                />
            ) : (
                <div className="card form-card">
                    <h2 className="card-heading">Cliente não encontrado</h2>
                    <p className="card-description">Esse cadastro não existe mais. Volte para a lista e escolha outro cliente.</p>
                    <div className="form-actions" style={{ justifyContent: "flex-start" }}>
                        <Link to="/clientes" className="btn btn-primary">Voltar para clientes</Link>
                    </div>
                </div>
            )}
        </Layout>
    );
}

export default EditContact;
