import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import ContactForm from "../components/ContactForm";
import { useContacts } from "../context/ContactsContext";

function AddContact() {
    const { addContact } = useContacts();
    const navigate = useNavigate();

    return (
        <Layout title="Clientes">
            <ContactForm
                title="Adicionar cliente"
                subtitle="Preencha os dados para cadastrar um novo cliente"
                submitLabel="Salvar contato"
                onSubmit={data => {
                    addContact(data);
                    navigate("/clientes");
                }}
            />
        </Layout>
    );
}

export default AddContact;
