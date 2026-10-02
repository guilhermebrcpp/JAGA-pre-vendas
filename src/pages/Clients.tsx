import { Link } from "react-router-dom";
import DashBoard from "../components/DashBoard";
import { useContacts } from "../context/ContactsContext";
import "../css/Contacts.css";

function Clients(){
    const { contacts } = useContacts();

    return(
        <div>
            <DashBoard></DashBoard>
            <div style={{overflow:"auto", height:"100vh", border:"3px solid black", padding:"2rem"}}>
                <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:"1.5rem"}}>
                    <h1 style={{margin:0}}>Clientes</h1>
                    <Link to="/clientes/novo" className="jaga-btn">+ Adicionar cliente</Link>
                </div>

                {contacts.length === 0 && <p>Nenhum contato cadastrado ainda.</p>}

                <div className="row g-3">
                    {contacts.map(c => (
                        <div className="col-12 col-lg-6 col-xl-4" key={c.id}>
                            <div className="jaga-card" style={{height:"100%", display:"flex", flexDirection:"column", justifyContent:"space-between"}}>
                                <div style={{marginBottom:"1rem"}}>
                                    <h2 style={{fontSize:"1.4rem"}}>{c.name}</h2>
                                    {c.company && <p style={{fontWeight:500, marginBottom:"0.25rem"}}>{c.company}</p>}
                                    {c.email && <p style={{marginBottom:"0.25rem"}}>{c.email}</p>}
                                    {c.phone && <p style={{marginBottom:0}}>{c.phone}</p>}
                                </div>
                                <div>
                                    <Link to={`/clientes/${c.id}/editar`} className="jaga-btn">Editar</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Clients;
