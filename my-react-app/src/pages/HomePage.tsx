import DashBoard from "../components/DashBoard";
import {Line, Pie} from "react-chartjs-2"
import {
    Chart as ChartJS, 
    CategoryScale, 
    LinearScale, 
    PointElement, 
    LineElement, 
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
    Title, 
    Tooltip, 
    Legend
);

const data = {
  labels: ['Rei Ayanami', 'Alice Margatroid', 'Asuka Langley'],
  datasets: [
    {
      label: '# of Votes',
      data: [19, 12, 3],
      backgroundColor: [
        'rgb(43, 145, 213)',
        'rgb(255, 207, 86)',
        'rgb(255, 99, 133)',
      ],
      /*borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],*/
      borderWidth: 1,
    },
  ],
};

function HomePage(){
    return(
        <div>
            <DashBoard></DashBoard>
            <div style={{overflow:"auto", height:"100vh", border:"3px solid black"}}>
                <div style={{maxWidth:"30rem"}}>
                    <div style={{width:"30rem", margin:"0 auto"}}>
                        <Pie data={data}options={{maintainAspectRatio: false}}></Pie>
                    </div>
                    <p style={{textAlign:"center", fontWeight:"500"}}>Votação de melhor waifu</p>
                </div>
                <h1>Oiiiiiiiiiiiiiiiiiii</h1>
                <h1>Oiiiiiiiiiiiiiiiiiii</h1>
                <h1>Oiiiiiiiiiiiiiiiiiii</h1>
                <h1>Oiiiiiiiiiiiiiiiiiii</h1>
                <h1>Oiiiiiiiiiiiiiiiiiii</h1>
                <h1>Oiiiiiiiiiiiiiiiiiii</h1>
                <h1>Oiiiiiiiiiiiiiiiiiii</h1>
                <h1>Oiiiiiiiiiiiiiiiiiii</h1>
                <h1>Oiiiiiiiiiiiiiiiiiii</h1>
                <h1>Oiiiiiiiiiiiiiiiiiii</h1>
                <h1>Oiiiiiiiiiiiiiiiiiii</h1>
                <h1>Oiiiiiiiiiiiiiiiiiii</h1>
                <h1>Oiiiiiiiiiiiiiiiiiii</h1>
                <h1>Oiiiiiiiiiiiiiiiiiii</h1>
                <h1>Oiiiiiiiiiiiiiiiiiii</h1>
                <h1>Oiiiiiiiiiiiiiiiiiii</h1>
                <h1>Oiiiiiiiiiiiiiiiiiii</h1>
                <h1>Oiiiiiiiiiiiiiiiiiii</h1>
                <h1>Oiiiiiiiiiiiiiiiiiii</h1>
            </div>
        </div>
    );
}

export default HomePage;