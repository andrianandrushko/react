import {Link} from "react-router-dom";
import "./Menu.css";

const Menu = () => {
    return (
        <div className="menu">
            // список посилань на сторінки
            <ul>
                // посилання на головну сторінку
                <li><Link to="/">Home</Link></li>

                // посилання на сторінку логіну
                <li><Link to="/login">Login</Link></li>

                // посилання на сторінку авторизаційних ресурсів
                <li><Link to="/auth/resources">Auth Resources</Link></li>

                // посилання на сторінку постів
                <li><Link to="/posts">Posts</Link></li>

                // посилання на сторінку коментарів
                <li><Link to="/comments">Comments</Link></li>

                // посилання на сторінку задач
                <li><Link to="/todos">Todos</Link></li>

                // посилання на сторінку цитат
                <li><Link to="/quotes">Quotes</Link></li>
            </ul>
        </div>
    );
};

export default Menu;