import {Link} from "react-router-dom";
import "./Menu.css";

const Menu = () => {
    return (
        // список посилань на сторінки
        <div className="menu">
            <ul>
                <li><Link to="/">Home</Link></li>

                <li><Link to="/login">Login</Link></li>

                <li><Link to="/auth/resources">Auth Resources</Link></li>

                <li><Link to="/posts">Posts</Link></li>

                <li><Link to="/comments">Comments</Link></li>

                <li><Link to="/todos">Todos</Link></li>

                <li><Link to="/quotes">Quotes</Link></li>
            </ul>
        </div>
    );
};

export default Menu;