import { Link, useNavigate, useParams } from "react-router-dom";
import DashBoard from "../components/DashBoard";
import ContactForm from "../components/ContactForm";
import { useContacts } from "../context/ContactsContext";
import "../css/Contacts.css";

function EditContact() {
    const { id } = useParams();
    const { getContact, updateContact } = useContacts();
    const navigate = useNavigate();
    const contact = id ? getContact(id) : undefined;

    return (
        <div>
            <DashBoard></DashBoard>
            <div style={{ overflow: "auto", height: "100vh", border: "3px solid black", padding: "2rem" }}>
                <h1 style={{ marginBottom: "1.5rem" }}>Editar cliente</h1>
                {contact ? (
                    <ContactForm
                        initialValues={{ name: contact.name, email: contact.email, phone: contact.phone, company: contact.company, notes: contact.notes }}
                        submitLabel="Salvar alterações"
                        onSubmit={data => {
                            updateContact(contact.id, data);
                            navigate("/clientes");
                        }}
                    />
                ) : (
                    <div>
                        <p>Contato não encontrado.</p>
                        <Link to="/clientes" className="jaga-btn">Voltar</Link>
                    </div>
                )}
            </div>
        </div>
    );
}

export default EditContact;
