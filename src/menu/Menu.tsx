import { Link } from 'react-router-dom';
import './Menu.css'

const Menu = () => {
    return (
        <div className={'menu'}>
            <ul>
                <li><Link to={'/'}>Home</Link></li>

                <li><Link to={'users'}>Users:</Link></li>

                <li><Link to='/users/dummyjson'>DummyJson</Link></li>

                <li><Link to={'posts'}>Posts:</Link></li>

                <li><Link to='/posts/dummyjson'>DummyJson</Link></li>

            </ul>
        </div>
    );
};

export default Menu;