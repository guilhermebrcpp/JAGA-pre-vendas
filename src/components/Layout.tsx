import type { ReactNode } from "react";
import Sidebar from "./Sidebar";
import pfp from "../assets/pfp.png";

type LayoutProps = { title: string; children: ReactNode };

function Layout({ title, children }: LayoutProps) {
    return (
        <div className="app-shell">
            <Sidebar />
            <div className="app-main">
                <header className="topbar">
                    <h1 className="topbar-title">{title}</h1>
                    <img src={pfp} alt="" className="topbar-avatar" />
                    <span className="topbar-user">Usuário</span>
                </header>
                <main className="app-content">{children}</main>
            </div>
        </div>
    );
}

export default Layout;
