import { Link, NavLink } from "react-router-dom";
import Icon, { type IconName } from "./Icon";

const items: { title: string; link: string; icon: IconName }[] = [
    { title: "Dashboard", link: "/", icon: "dashboard" },
    { title: "Clientes", link: "/clientes", icon: "people" },
    { title: "Projetos", link: "/projetos", icon: "folder" },
    { title: "Chamados", link: "/chamados", icon: "ticket" },
];

function Sidebar() {
    return (
        <aside className="sidebar">
            <div className="sidebar-brand">
                <div className="sidebar-logo">M</div>
                <span>Margatroid</span>
            </div>
            <nav className="sidebar-nav">
                {items.map(item => (
                    <NavLink
                        key={item.link}
                        to={item.link}
                        end={item.link === "/"}
                        className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
                    >
                        <Icon name={item.icon} />
                        {item.title}
                    </NavLink>
                ))}
            </nav>
            <div className="sidebar-footer">
                <Link to="/" className="nav-link">
                    <Icon name="settings" />
                    Configurações
                </Link>
            </div>
        </aside>
    );
}

export default Sidebar;
