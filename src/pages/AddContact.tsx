import { useNavigate } from "react-router-dom";
import DashBoard from "../components/DashBoard";
import ContactForm from "../components/ContactForm";
import { useContacts } from "../context/ContactsContext";

function AddContact() {
    const { addContact } = useContacts();
    const navigate = useNavigate();

    return (
        <div>
            <DashBoard></DashBoard>
            <div style={{ overflow: "auto", height: "100vh", border: "3px solid black", padding: "2rem" }}>
                <h1 style={{ marginBottom: "1.5rem" }}>Adicionar cliente</h1>
                <ContactForm
                    submitLabel="Salvar contato"
                    onSubmit={data => {
                        addContact(data);
                        navigate("/clientes");
                    }}
                />
            </div>
        </div>
    );
}

export default AddContact;
