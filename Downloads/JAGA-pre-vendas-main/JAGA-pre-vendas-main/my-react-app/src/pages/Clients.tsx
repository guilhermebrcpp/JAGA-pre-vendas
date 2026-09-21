import DashBoard from "../components/DashBoard";


function Clients(){
    return(
        <div>
            <DashBoard></DashBoard>
            <div style={{overflow:"auto", height:"100vh"}}>
                <h1>eu sou um cliente</h1>
            </div>
        </div>
    );
}

export default Clients;