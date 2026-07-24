import {Link} from "react-router";

const Menu = () => {
    return (
        <div>
            <ul>
                <li><Link to={'comments'}>comments</Link></li>
            </ul>
        </div>
    );
};

export default Menu;