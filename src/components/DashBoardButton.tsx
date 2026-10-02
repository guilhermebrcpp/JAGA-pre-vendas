import "../css/DashBoardButton.css"
import { Link } from 'react-router-dom';

type DashBoardButtonProps = {
    title: string;
    link: string;
};

function DashBoardButton({title, link}: DashBoardButtonProps){
    // style={{border:"3px solid black"}} 
    return(
        <div className="dashboardbutton">
            <Link to={link} style={{textDecoration:"none"}}>
                <p style={{fontFamily:"arial"}} className="DashBoardButtonText">{title}</p>
            </Link>
        </div>
    );
}

export default DashBoardButton;