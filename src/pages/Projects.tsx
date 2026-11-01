import Layout from "../components/Layout";
import Pill from "../components/Pill";
import { statusColors, typeColors } from "../theme/colors";

type Project = {
    title: string;
    description: string;
    status: string;
    company: string;
    type: string;
};

// TODO: trocar por dados reais quando houver backend
const projects: Project[] = [
    {
        title: "CKMT Security Website",
        description: "Um fórum para empresas pequenas e médias sobre segurança",
        status: "Pausado",
        company: "CKMT™",
        type: "Website",
    },
    {
        title: "Gestão Alpha Solutions",
        description: "Sistema de gerenciamento de estoque",
        status: "Em andamento",
        company: "Alpha Solutions",
        type: "Sistema de Gestão",
    },
];

function Projects() {
    return (
        <Layout title="Projetos">
            <div className="page-actions">
                <p className="page-subtitle">Projetos cadastrados</p>
            </div>

            {projects.map(p => (
                <div className="card project-card" key={p.title}>
                    <div className="project-main">
                        <h2 className="project-title">{p.title}</h2>
                        <p className="project-desc">{p.description}</p>
                        <div className="project-meta">
                            <span>Status</span>
                            <Pill label={p.status} color={statusColors[p.status]} />
                        </div>
                    </div>
                    <div className="project-side">
                        <span className="project-client">{p.company}</span>
                        <Pill label={p.type} color={typeColors[p.type]} />
                    </div>
                </div>
            ))}
        </Layout>
    );
}

export default Projects;
