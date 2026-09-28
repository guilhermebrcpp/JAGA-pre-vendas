import DashBoardButton from "./DashBoardButton";
import ReiAyanami from "../assets/rei_ayanami_headphone.jpg";

function DashBoard(){
    return(
        <div className="container" style={{float:"left", minWidth:"20rem", maxWidth:"20rem", height:"100vh", border:"3px solid black"}}>
            {/* Perfil */}
            <div style={{marginBottom:"1rem", marginTop:"1rem", width:"100%"}}>
                <img src={ReiAyanami} style={{width:"5rem", borderRadius:"10rem 10rem 10rem 10rem", display:"inline-block"}}></img>
                <p style={{display:"inline", fontWeight: 500, marginLeft:"1rem"}}>Rei Ayanami</p>
            </div>
            <hr></hr>
            <DashBoardButton title="HomePage" link="/"></DashBoardButton>
            <DashBoardButton title="Clientes" link="/clientes"></DashBoardButton>
            <DashBoardButton title="Dar o cu" link="/"></DashBoardButton>
            <DashBoardButton title="Fuder de ladinho" link="/"></DashBoardButton>
            <DashBoardButton title="oiiiiiiiiiii" link="/"></DashBoardButton>
        </div>
    );
}

export default DashBoard;