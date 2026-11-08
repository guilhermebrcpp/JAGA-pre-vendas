import "../css/DashBoardButton.css"
import { Link } from 'react-router-dom';

type DashBoardButtonProps = {
    title: string;
    link: string;
    children: React.ReactNode;
};

function DashBoardButton({title, link, children}: DashBoardButtonProps){
    // style={{border:"3px solid black"}} 
    return(
        <div className="dashboardbutton">
            
            <Link to={link} style={{textDecoration:"none", display:"flex", alignItems:"center", paddingLeft:"1rem"}}>
                {children}
                <p style={{fontFamily:"arial"}} className="DashBoardButtonText">{title}</p>
            </Link>
        </div>
    );
}

export default DashBoardButton;