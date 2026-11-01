import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import Icon from "../components/Icon";
import { useContacts } from "../context/ContactsContext";

function Clients() {
    const { contacts } = useContacts();

    return (
        <Layout title="Clientes">
            <div className="page-actions">
                <p className="page-subtitle">Clientes cadastrados</p>
                <Link to="/clientes/novo" className="btn btn-primary">
                    <Icon name="personAdd" size={18} />
                    Novo cliente
                </Link>
            </div>

            <div className="card list-card">
                {contacts.length === 0 && (
                    <p className="empty">Nenhum cliente cadastrado ainda. Use “Novo cliente” para começar.</p>
                )}

                {contacts.map(c => (
                    <div className="list-row" key={c.id}>
                        <div className="avatar">{c.name.charAt(0).toUpperCase()}</div>
                        <div className="list-main">
                            <div className="list-title">{c.name}</div>
                            <div className="list-sub">{[c.company, c.email].filter(Boolean).join(" • ")}</div>
                        </div>
                        {c.phone && <span className="list-trailing">{c.phone}</span>}
                        <Link to={`/clientes/${c.id}/editar`} className="icon-btn" aria-label={`Editar ${c.name}`} title="Editar">
                            <Icon name="edit" size={18} />
                        </Link>
                    </div>
                ))}
            </div>
        </Layout>
    );
}

export default Clients;
