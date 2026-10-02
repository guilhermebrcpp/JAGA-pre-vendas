import { Link, useNavigate, useParams } from "react-router-dom";
import DashBoard from "../components/DashBoard";
import ContactForm from "../components/ContactForm";
import { useContacts } from "../context/ContactsContext";

function Projects() {
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
                    <div style={{border:"3px solid rgb(215, 215, 215)", borderRadius:"1rem", padding:"1rem", display:"flex", marginBottom:"1.5rem"}}>
                        <div style={{paddingRight:"auto"}}>
                            <h1>CKMT Security Website</h1>
                            <hr></hr>
                            <h5 style={{display:"inline"}}>Descrição: </h5>
                            <p style={{display:"inline"}}>Um fórum para empresas pequenas e médias sobre segurança</p>
                            <div style={{display:"inline", marginLeft:"1rem"}}>
                                <h5 style={{display:"inline"}}>Status: </h5>
                                <p style={{display:"inline", color:"GoldenRod", fontWeight:"700"}}>Pausado</p>
                            </div>
                        </div>
                        {/* Nome da empresa e tag */}
                        <div style={{display:"flex", marginLeft:"auto"}}>
                            <div style={{borderLeft:"1px solid LightGray", marginLeft:"2rem", marginRight:"2rem"}}></div>
                            <div style={{}}>
                                <h1 style={{display:"block"}}>CKMT™</h1>
                                <h5 style={{display:"block", backgroundColor:"#66FF99", textAlign:"center", marginTop:"2.5rem"}}>Website</h5>
                            </div>
                        </div>
                    </div>

                    {/* TODO: CRIAR COMPONENTE PROJETO*/}
                    <div style={{border:"3px solid rgb(215, 215, 215)", borderRadius:"1rem", padding:"1rem", display:"flex", marginBottom:"1.5rem"}}>
                        <div style={{paddingRight:"auto", marginRight:"auto"}}>
                            <h1>Gestão Alpha Solutions</h1>
                            <hr></hr>
                            <h5 style={{display:"inline"}}>Descrição: </h5>
                            <p style={{display:"inline"}}>Sistema de gerenciamento de estoque</p>
                            <div style={{display:"inline", marginLeft:"1rem"}}>
                                <h5 style={{display:"inline"}}>Status: </h5>
                                <p style={{display:"inline", color:"green", fontWeight:"700"}}>Em andamento</p>
                            </div>
                        </div>
                        {/* Nome da empresa e tag */}
                        <div style={{display:"flex", marginLeft:"auto"}}>
                            <div style={{borderLeft:"1px solid LightGray", marginLeft:"2rem", marginRight:"2rem"}}></div>
                            <div>
                                <h1 style={{display:"block"}}>Alpha Solutions</h1>
                                <h5 style={{display:"block", backgroundColor:"orange", textAlign:"center", marginTop:"2.5rem"}}>Sistema Gestão</h5>
                            </div>
                        </div>
                    </div>

                    

                </div>
            </div>
        </div>
    )
}

export default Projects;
