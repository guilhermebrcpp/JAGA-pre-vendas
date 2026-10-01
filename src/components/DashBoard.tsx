import DashBoardButton from "./DashBoardButton";
import ReiAyanami from "../assets/rei_ayanami_headphone.jpg";
import pfp from "../assets/pfp.png";
function DashBoard(){
    return(
        <div className="container" style={{float:"left", minWidth:"17rem", maxWidth:"17rem", height:"100vh", border:"3px solid black"}}>
            {/* Perfil */}
            <div style={{marginBottom:"1rem", marginTop:"1rem", width:"100%"}}>
                <img src={pfp} style={{width:"5rem", borderRadius:"10rem 10rem 10rem 10rem", display:"inline-block"}}></img>
                <p style={{display:"inline", fontWeight: 700, marginLeft:"0.25rem"}}>Usuário</p>
            </div>
            <hr></hr>
            <DashBoardButton title="HomePage" link="/"></DashBoardButton>
            <DashBoardButton title="Clientes" link="/clientes"></DashBoardButton>
            <DashBoardButton title="Projetos" link="/"></DashBoardButton>
            <DashBoardButton title="Chamados" link="/"></DashBoardButton>
            <hr></hr>
            <DashBoardButton title="Configurações" link="/"></DashBoardButton>

        </div>
    );
}

export default DashBoard;