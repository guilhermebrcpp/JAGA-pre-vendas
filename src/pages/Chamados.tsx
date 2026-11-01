import Layout from "../components/Layout";
import { colors } from "../theme/colors";

type Chamado = { title: string; date: string };

// TODO: trocar por dados reais quando houver backend
const chamados: Chamado[] = [
    { title: "Análise de projeto para ONG que resgata animais", date: "25/01/2027" },
    { title: "Desenvolvimento de plataforma para gestão de clínicas veterinárias", date: "03/02/2027" },
    { title: "Modernização do sistema interno de empresa de logística", date: "17/02/2027" },
    { title: "Criação de aplicativo para rede de restaurantes", date: "28/02/2027" },
    { title: "Planejamento de sistema de atendimento para instituição de ensino", date: "12/03/2027" },
    { title: "Levantamento de requisitos para plataforma de gestão financeira", date: "26/03/2027" },
];

function Chamados() {
    return (
        <Layout title="Chamados">
            <div className="page-actions">
                <p className="page-subtitle">Chamados recentes</p>
            </div>

            <div className="card list-card">
                {chamados.map(c => (
                    <div className="list-row interactive" key={c.title}>
                        <span className="dot" style={{ backgroundColor: colors.primary }} />
                        <span className="list-main">{c.title}</span>
                        <span className="list-date">{c.date}</span>
                    </div>
                ))}
            </div>
        </Layout>
    );
}

export default Chamados;
