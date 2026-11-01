import { Line, Doughnut } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    ArcElement,
    Tooltip,
    Filler,
} from "chart.js";
import Layout from "../components/Layout";
import KpiCard from "../components/KpiCard";
import Pill from "../components/Pill";
import { colors, statusColors, typeColors } from "../theme/colors";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, ArcElement, Tooltip, Filler);

const projectTypes = [
    { label: "Website", value: 19 },
    { label: "Sistema de Gestão", value: 12 },
    { label: "Segurança", value: 3 },
];
const projectTypesTotal = projectTypes.reduce((sum, t) => sum + t.value, 0);

const donutData = {
    labels: projectTypes.map(t => t.label),
    datasets: [
        {
            label: "# de projetos",
            data: projectTypes.map(t => t.value),
            backgroundColor: projectTypes.map(t => typeColors[t.label]),
            borderWidth: 0,
        },
    ],
};

const donutOptions = {
    maintainAspectRatio: false,
    cutout: "72%",
    plugins: { legend: { display: false } },
};

const lineData = {
    labels: ["Julho", "Agosto", "Setembro", "Outubro"],
    datasets: [
        {
            label: "Chamados novos",
            data: [5, 12, 8, 6],
            borderColor: colors.primary,
            backgroundColor: `${colors.primary}1F`,
            borderWidth: 2.5,
            fill: true,
            tension: 0,
            pointRadius: 3.2,
            pointBackgroundColor: colors.primary,
        },
    ],
};

const lineOptions = {
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
        x: { grid: { display: false }, ticks: { color: "rgba(0,0,0,0.54)" } },
        y: {
            beginAtZero: true,
            border: { display: false },
            grid: { color: "rgba(0,0,0,0.05)" },
            ticks: { color: "rgba(0,0,0,0.54)", precision: 0 },
        },
    },
};

type Row = {
    project: string;
    client: string;
    type: string;
    progress: number;
    deadline: string;
    status: string;
};

const ongoing: Row[] = [
    { project: "Portal Corporativo", client: "NovaTech", type: "Website", progress: 15, deadline: "12/10/2026", status: "Em andamento" },
    { project: "Sistema de Gestão", client: "Alpha Solutions", type: "Sistema de Gestão", progress: 92, deadline: "18/10/2026", status: "Em andamento" },
    { project: "Segurança de Rede", client: "CKMT Corp.", type: "Segurança", progress: 52, deadline: "08/10/2026", status: "Pausado" },
    { project: "Loja Virtual", client: "Orion Commerce", type: "Website", progress: 66, deadline: "02/11/2026", status: "Planejamento" },
    { project: "Gestão de Estoque", client: "BluePeak", type: "Sistema de Gestão", progress: 67, deadline: "15/11/2026", status: "Não iniciado" },
];

function HomePage() {
    return (
        <Layout title="Dashboard">
            <div className="page-actions">
                <p className="page-subtitle">Visão geral dos projetos</p>
            </div>

            <div className="kpi-grid">
                <KpiCard title="Clientes" value="5" icon="people" color={colors.primary} />
                <KpiCard title="Projetos" value="9" icon="folder" color={colors.info} />
                <KpiCard title="Atrasados" value="2" icon="schedule" color={colors.danger} footer="Requerem atenção imediata" />
                <KpiCard title="Receita" value="R$35.000,00" icon="money" color={colors.success} />
            </div>

            <div className="chart-grid">
                <div className="card">
                    <h2 className="card-title">Chamados novos por mês</h2>
                    <div className="chart-box">
                        <Line data={lineData} options={lineOptions} />
                    </div>
                </div>

                <div className="card">
                    <h2 className="card-title">Tipos de projeto</h2>
                    <div className="donut-wrap">
                        <div className="donut">
                            <Doughnut data={donutData} options={donutOptions} />
                            <div className="donut-total">{projectTypesTotal}</div>
                        </div>
                        <div className="legend">
                            {projectTypes.map(t => (
                                <div className="legend-item" key={t.label}>
                                    <span className="dot" style={{ backgroundColor: typeColors[t.label] }} />
                                    <span className="label">{t.label}</span>
                                    <span className="value">{t.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="card">
                <h2 className="card-title">Projetos em andamento</h2>
                <div className="table-scroll">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Projeto</th>
                                <th>Cliente</th>
                                <th>Tipo</th>
                                <th>Progresso</th>
                                <th>Prazo</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ongoing.map(row => (
                                <tr key={row.project}>
                                    <td className="strong">{row.project}</td>
                                    <td className="muted">{row.client}</td>
                                    <td><Pill label={row.type} color={typeColors[row.type]} /></td>
                                    <td>
                                        <div className="progress">
                                            <div className="progress-track">
                                                <div className="progress-bar" style={{ width: `${row.progress}%`, backgroundColor: colors.primary }} />
                                            </div>
                                            <span className="progress-value">{row.progress}%</span>
                                        </div>
                                    </td>
                                    <td className="faint">{row.deadline}</td>
                                    <td><Pill label={row.status} color={statusColors[row.status]} /></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </Layout>
    );
}

export default HomePage;
