import { Link } from 'react-router-dom';
import './Menu.css'
const Menu = () => {
    return (
        <div className={'menu'}>
            <ul>
                <li><Link to={'/'}>Home</Link></li>

                <li><Link to={'users'}>Users:</Link></li>

                <li><Link to='/users/jsonplaceholder'> JSONPlaceholder</Link></li>

                <li><Link to='/users/dummyjson'>DummyjsonPage</Link></li>

                <li><Link to={'posts'}>Posts:</Link></li>

                <li><Link to='/posts/jsonplaceholder'>JSONPlaceholder</Link></li>

                <li><Link to='/posts/dummyjson'>DummyjsonPage</Link></li>

                <li><Link to={'comments'}>Comments:</Link></li>

                <li><Link to='/comments/jsonplaceholder'>JSONPlaceholder</Link></li>

                <li><Link to='/comments/dummyjson'>DummyjsonPage</Link></li>

                <li><Link to={'products'}>Products:</Link></li>

                <li><Link to='/products/jsonplaceholder'>JSONPlaceholder</Link></li>

                <li><Link to='/products/dummyjson'>DummyjsonPage</Link></li>
            </ul>
        </div>
    );
};

export default Menu;