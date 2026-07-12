import { Link } from "react-router-dom";
import "./Menu.css";

const Menu = () => {
    return (
        <div className="menu">
            <ul>
                <li><Link to="/">Home</Link></li>

                <li><Link to="/Cars">Cars</Link></li>

                <li><Link to='/Form'>Form</Link></li>
            </ul>
        </div>
    );
};

export default Menu;