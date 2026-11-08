import DashBoardButton from "./DashBoardButton";
import ReiAyanami from "../assets/rei_ayanami_headphone.jpg";
import pfp from "../assets/pfp.png";
import logo from "../assets/margatroid icon.png"
import { AppsListRegular, BoardRegular, DashboardRegular, PeopleTeamRegular, SettingsCogMultipleFilled, SettingsRegular } from "@fluentui/react-icons";
function DashBoard(){
    return(
        <div className="container" style={{float:"left", minWidth:"15rem", maxWidth:"15rem", height:"100vh", backgroundColor:"rgb(52, 80, 107)", padding:"0rem"}}>
            {/* Lgo */}
            <div style={{paddingLeft:"1rem", paddingBottom:"1rem", paddingTop:"1rem", width:"100%", display:"flex", alignContent:"center", alignItems:"center", backgroundColor:"rgb(64, 77, 176)"}}>
                <img src={logo} style={{width:"3rem", display:"inline-block"}}></img>
                <p style={{display:"inline", fontWeight: 500, marginLeft:"0.75rem", fontSize:"1.75rem", marginBottom:"0rem", color:"white", fontFamily:"bebas neueu"}}>Margatroid</p>
            </div>
            <div style={{paddingLeft:"0rem"}}>
                <DashBoardButton title="DashBoard" link="/" children={<DashboardRegular className="DashBoardIcon"/>}></DashBoardButton>
                <DashBoardButton title="Clientes" link="/clientes" children={<PeopleTeamRegular className="DashBoardIcon"/>}></DashBoardButton>
                <DashBoardButton title="Projetos" link="/projetos" children={<SettingsCogMultipleFilled className="DashBoardIcon"/>}></DashBoardButton>
                <DashBoardButton title="Chamados" link="/chamados" children={<AppsListRegular className="DashBoardIcon"/>}></DashBoardButton>
                <DashBoardButton title="Configurações" link="/" children={<SettingsRegular className="DashBoardIcon"/>}></DashBoardButton>
            </div>
        </div>
    );
}

export default DashBoard;