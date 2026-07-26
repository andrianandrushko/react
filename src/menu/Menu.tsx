import {Link} from "react-router";

const Menu = () => {
    return (
        // список посилань на сторінки
        <div>
            <ul>
                <li><Link to={'users'}>users</Link></li>
                <li><Link to={'posts'}>posts</Link></li>
                <li><Link to={'comments'}>comments</Link></li>
                <li><Link to={'recipe'}>recipe</Link></li>
            </ul>
        </div>
    );
};

export default Menu;