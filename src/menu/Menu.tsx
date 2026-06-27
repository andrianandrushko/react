import { Link } from 'react-router-dom';
import './Menu.css'

const Menu = () => {
    return (
        <div className={'menu'}>
            <ul>
                <li><Link to={'/'}>Home</Link></li>

                <li><Link to='/users/dummyjson'>Users-DummyJson</Link></li>

                <li><Link to='/posts/dummyjson'>Posts-DummyJson</Link></li>

            </ul>
        </div>
    );
};

export default Menu;