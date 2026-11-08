import DashBoard from "../components/DashBoard";
import pfp from "../assets/pfp.png"
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
import { useEffect, useState } from "react";

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
      label: '# de projetos',
      data: [19, 12, 3],
      backgroundColor: [
        'rgb(43, 145, 213)',
        'rgb(255, 207, 86)',
        'rgb(255, 99, 133)',
      ]
    },
  ],
};

/*
let dataLine = {
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
};*/

async function teste_api(){
    const url = "https://pokeapi.co/api/v2/pokemon/gengar"
    const info = await fetch(url)
    const json = await info.json()
    //alert(json["id"])
    return json["id"]
}

import { ArrowSprintRegular } from '@fluentui/react-icons';

function HomePage(){
    const [dataLine, setDataLine] = useState({
        labels: ['teste', "teste", "teste", "teste"],
        datasets: [
            {
            label: 'Clientes Novos',
            data: [1, 2, 3, 4],
            backgroundColor: [
                'rgb(43, 145, 213)'
            ]
            },
        ],
        });

    useEffect(() => {
        async function merda(){
            const url = "https://pokeapi.co/api/v2/pokemon/pikachu"
            const info = await fetch(url)
            const json = await info.json()

            setDataLine({
            labels: ['Julho', "Agosto", "Setembro", "Outubro"],
            datasets: [
                {
                label: 'Clientes Novos',
                data: [json["id"], 12, 8, 6],
                backgroundColor: [
                    'rgb(43, 145, 213)'
                ]
                },
            ],
            })
        }

        merda()
    }, []);

    const {contacts} = useContacts();
    const frase = contacts[0].name;
    const clients_total_count = contacts.length;
    return(
        <div>
            <ContactsProvider>
                <DashBoard></DashBoard>
                <div style={{overflow:"auto", height:"100vh", padding:"2rem", paddingTop:"1rem"}}>
                    <div style={{display:"flex"}}>
                        <p>Bem vindo Moreno</p>
                        <div style={{marginLeft:"auto", display:"flex", alignItems:"center"}}>
                            <img src={pfp} height="75rem"></img>
                            <p style={{margin:"0rem", marginLeft:"0.5rem"}}>Usuario</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div style={{display:"flex", justifyContent:"space-evenly"}}>
                                <div style={{display:"inline-block"}}>
                                    <h1>Clientes</h1>
                                    <h3 style={{textAlign:"center"}}>5</h3>
                                </div>
                                <div style={{display:"inline-block"}}>
                                    <h1>Projetos</h1>
                                    <h3 style={{textAlign:"center"}}>9</h3>
                                </div>
                                <div style={{display:"inline-block"}}>
                                    <h1>Atrasados</h1>
                                    <h3 style={{textAlign:"center"}}>2</h3>
                                </div>
                                <div style={{display:"inline-block"}}>
                                    <h1>Receita</h1>
                                    <h3 style={{textAlign:"center"}}>R$35.000,00</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="row">
                        <div className="col">
                            <div>
                                <h3 style={{textAlign:"center"}}>Tipos de Projeto</h3>
                                <div style={{width:"25rem", height:"15rem", margin:"0 auto"}}>
                                    <Pie data={data} options={{maintainAspectRatio: false, plugins: { legend: { position: 'right' }}}}></Pie>
                                </div>
                            </div>
                        </div>
                        <div className="col" style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                            <div>
                                <h3 style={{textAlign:"center"}}>Chamados novos por mês</h3>
                                <div style={{width:"30rem", height:"15rem", margin:"0 auto", aspectRatio: 1}}>
                                    <Bar data={dataLine}></Bar>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="row">
                        <div className="col">
                            <h1 style={{textAlign:"center", marginBottom:"1rem"}}>Projetos em andamento</h1>
                            <div style={{display:"flex", justifyContent:"space-evenly"}}>
                                <div style={{display:"inline-block"}}>
                                    <h3>Projeto</h3>
                                    <p>Portal Corporativo</p>
                                    <p>Sistema de Gestão</p>
                                    <p>Segurança de Rede</p>
                                    <p>Loja Virtual</p>
                                    <p>Gestão de Estoque</p>
                                </div>
                                <div style={{display:"inline-block"}}>
                                    <h3>Cliente</h3>
                                    <p>NovaTech</p>
                                    <p>Alpha Solutions</p>
                                    <p>CKMT Corp.</p>
                                    <p>Orion Commerce</p>
                                    <p>BluePeak</p>
                                </div>
                                <div style={{display:"inline-block"}}>
                                    <h3>Tipo</h3>
                                    <p>Website</p>
                                    <p>Sistema de Gestão</p>
                                    <p>Segurança</p>
                                    <p>Website</p>
                                    <p>Sistema de Gestão</p>
                                </div>
                                <div style={{display:"inline-block"}}>
                                    <h3>Progresso</h3>
                                    <p style={{color:"green"}}>15%</p>
                                    <p style={{color:"green"}}>92%</p>
                                    <p style={{color:"green"}}>52%</p>
                                    <p style={{color:"green"}}>66%</p>
                                    <p style={{color:"green"}}>67%</p>
                                </div>
                                <div style={{display:"inline-block"}}>
                                    <h3>Prazo</h3>
                                    <p>12/10/2026</p>
                                    <p>18/10/2026</p>
                                    <p>08/10/2026</p>
                                    <p>02/11/2026</p>
                                    <p>15/11/2026</p>
                                </div>
                                <div style={{display:"inline-block"}}>
                                    <h3>Status</h3>
                                    <p>Em andamento</p>
                                    <p>Em andamento</p>
                                    <p>Pausado</p>
                                    <p>Planejamento</p>
                                    <p>Não iniciado</p>
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