import DashBoard from "../components/DashBoard";
import {Line, Bar, Pie} from "react-chartjs-2";
import "../context/ContactsContext.tsx";
import {
    Chart as ChartJS, 
    CategoryScale, 
    LinearScale, 
    PointElement, 
    LineElement,
    BarElement,
    Title, 
    Tooltip, 
    Legend,
    ArcElement
} from "chart.js"
import { ContactsProvider, useContacts } from "../context/ContactsContext.tsx";

ChartJS.register(
    CategoryScale, 
    LinearScale, 
    PointElement, 
    LineElement, 
    ArcElement,
    BarElement,
    Title, 
    Tooltip, 
    Legend
);

const data = {
  labels: ['Website', 'Sistema de Gestão', 'Segurança'],
  datasets: [
    {
      label: '# de votos',
      data: [19, 12, 3],
      backgroundColor: [
        'rgb(43, 145, 213)',
        'rgb(255, 207, 86)',
        'rgb(255, 99, 133)',
      ]
    },
  ],
};

const dataLine = {
  labels: ['Julho', "Agosto", "Setembro", "Outubro"],
  datasets: [
    {
      label: 'Clientes Novos',
      data: [5, 12, 8, 6],
      backgroundColor: [
        'rgb(43, 145, 213)'
      ]
    },
  ],
};


function Destroy(){
    alert("Destrui um cliente")
}

function Restart(){
    alert("Reiniciei a DB")
}

function HomePage(){
    const {contacts} = useContacts();
    const frase = contacts[0].name;
    const clients_total_count = contacts.length;
    function Create(){
        alert(contacts[0].name);
    }

    return(
        <div>
            <ContactsProvider>
                <DashBoard></DashBoard>
                <div style={{overflow:"auto", height:"100vh", border:"3px solid black", padding:"2rem"}}>
                    <div className="row">
                        <div className="col">
                            <div style={{border:"3px solid rgb(215, 215, 215)", borderRadius:"1rem 1rem 1rem 1rem", padding:"1rem"}}>
                                <h1 style={{textAlign:"center"}}>Clientes Ativos: {clients_total_count}</h1>
                                <hr></hr>
                                <div style={{width:"20rem", margin:"0 auto", aspectRatio: 1}}>
                                    <Pie data={data} options={{maintainAspectRatio: false}}></Pie>
                                </div>
                                <p style={{textAlign:"center", fontWeight:"500"}}>Tipos de projeto</p>
                            </div>
                        </div>
                        <div className="col">
                            <div style={{border:"3px solid rgb(215, 215, 215)", borderRadius:"1rem 1rem 1rem 1rem", padding:"1rem"}}>
                                <div style={{width:"30rem", height:"15rem", margin:"0 auto", aspectRatio: 1}}>
                                    <Bar data={dataLine}></Bar>
                                </div>
                                <p style={{textAlign:"center", fontWeight:"500"}}>Clientes novos por mês</p>
                            </div>
                        </div>
                        <div className="col">
                            <div style={{border:"3px solid rgb(215, 215, 215)", borderRadius:"1rem 1rem 1rem 1rem", padding:"1rem"}}>
                                <h2 style={{textAlign:"center", marginBottom:"2rem"}}>What do you want to do?</h2>
                                <div style={{display:"flex", justifyContent:"center"}}>
                                    <button onClick={Create}>Create</button>
                                    <button onClick={Destroy}>Destroy</button>
                                    <button onClick={Restart}>Restart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <p style={{fontSize:"1.5rem"}}>{frase}</p>
                        </div>
                        <div className="col">
                            <div>
                                <img src="https://media1.tenor.com/m/m0U-5iWPXuEAAAAd/rei-ayanami-rei.gif" alt="Rei Ayanami morrendo para um míssel" style={{display:"block", justifySelf:"center"}}></img>
                                <div style={{textAlign:"center"}}>
                                    <h2>Have you seen this girl?</h2>
                                    <button>Yes</button>
                                    <button>No</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ContactsProvider>
        </div>
    );
}

export default HomePage;