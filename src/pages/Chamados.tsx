import { Link, useNavigate, useParams } from "react-router-dom";
import DashBoard from "../components/DashBoard";
import ContactForm from "../components/ContactForm";
import { useContacts } from "../context/ContactsContext";

function Chamados() {
    /*
    border: 3px solid rgb(215, 215, 215);
    border-radius: 1rem;
    padding: 1rem;
    */
    return(
        <div>
            <DashBoard></DashBoard>
            <div style={{overflow:"auto", height:"100vh", border:"3px solid black", padding:"2rem", paddingTop:"1rem"}}>
                <div>
                    {/* TODO: CRIAR COMPONENTE PROJETO*/}
                    <div className="chamado_button" style={{border:"3px solid rgb(215, 215, 215)", borderRadius:"1rem", padding:"1rem", display:"flex", marginBottom:"1.5rem"}}>
                        Análise de projeto para ONG que resgata animais
                        <div style={{marginLeft:"auto"}}>
                            25/01/2027
                        </div>
                    </div>

                    <div className="chamado_button" style={{border:"3px solid rgb(215, 215, 215)", borderRadius:"1rem", padding:"1rem", display:"flex", marginBottom:"1.5rem"}}>
                        Desenvolvimento de plataforma para gestão de clínicas veterinárias
                        <div style={{marginLeft:"auto"}}>
                            03/02/2027
                        </div>
                    </div>

                    <div className="chamado_button" style={{border:"3px solid rgb(215, 215, 215)", borderRadius:"1rem", padding:"1rem", display:"flex", marginBottom:"1.5rem"}}>
                        Modernização do sistema interno de empresa de logística
                        <div style={{marginLeft:"auto"}}>
                            17/02/2027
                        </div>
                    </div>

                    <div className="chamado_button" style={{border:"3px solid rgb(215, 215, 215)", borderRadius:"1rem", padding:"1rem", display:"flex", marginBottom:"1.5rem"}}>
                        Criação de aplicativo para rede de restaurantes
                        <div style={{marginLeft:"auto"}}>
                            28/02/2027
                        </div>
                    </div>

                    <div className="chamado_button" style={{border:"3px solid rgb(215, 215, 215)", borderRadius:"1rem", padding:"1rem", display:"flex", marginBottom:"1.5rem"}}>
                        Planejamento de sistema de atendimento para instituição de ensino
                        <div style={{marginLeft:"auto"}}>
                            12/03/2027
                        </div>
                    </div>

                    <div className="chamado_button" style={{border:"3px solid rgb(215, 215, 215)", borderRadius:"1rem", padding:"1rem", display:"flex", marginBottom:"1.5rem"}}>
                        Levantamento de requisitos para plataforma de gestão financeira
                        <div style={{marginLeft:"auto"}}>
                            26/03/2027
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chamados;
