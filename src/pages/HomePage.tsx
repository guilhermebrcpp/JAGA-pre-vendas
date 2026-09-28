import DashBoard from "../components/DashBoard";
import {Line, Bar, Pie} from "react-chartjs-2"
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
  labels: ['Rei Ayanami', 'Alice Margatroid', 'Asuka Langley'],
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
  labels: ['Today', "Tomorrow", "After Tomorrow", "After Tomorrow+"],
  datasets: [
    {
      label: 'Chance of Happening',
      data: [0.0000019, 0.0000012, 0.0000003, 0.0000001],
      backgroundColor: [
        'rgb(43, 145, 213)'
      ]
    },
  ],
};

function Create(){
    alert("criei um cliente")
}

function Destroy(){
    alert("Destrui um cliente")
}

function Restart(){
    alert("Reiniciei a DB")
}

function HomePage(){
    return(
        <div>
            <DashBoard></DashBoard>
            <div style={{overflow:"auto", height:"100vh", border:"3px solid black", padding:"2rem"}}>
                <div className="row">
                    <div className="col">
                            <div style={{width:"20rem", margin:"0 auto", aspectRatio: 1}}>
                                <Pie data={data} options={{maintainAspectRatio: false}}></Pie>
                            </div>
                            <p style={{textAlign:"center", fontWeight:"500"}}>Votação de melhor mulher</p>
                    </div>
                    <div className="col">
                        <p style={{fontSize:"1.5rem"}}>You must be ready to burn yourself in your own flame: how could you become new, if you had not first become ashes? You suffer? Then suffer! The man who has not yet suffered from himself does not know how to live. Go into your isolation, my brother, and look for the way to yourself. A way will lead you past yourself, and past your seven devils</p>
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
                            <div style={{width:"30rem", height:"15rem", margin:"0 auto", aspectRatio: 1}}>
                                <Bar data={dataLine}></Bar>
                            </div>
                            <p style={{textAlign:"center", fontWeight:"500"}}>Nothing ever happens</p>
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
        </div>
    );
}

export default HomePage;