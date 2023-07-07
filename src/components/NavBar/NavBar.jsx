import { Link } from 'react-router-dom';
import './NavBar.css'
import { useContext } from 'react';
import MacbookContext from '../../contexts/Macbook';

export default function NavBar() {
    const { cart } = useContext( MacbookContext );
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/"><img src="https://www.freeiconspng.com/thumbs/apple-logo-icon/apple-icon-21.png" alt="Apple" /></Link>
                </li>
                <li>
                    <Link to="/checkout">
                        { cart.length ? `Checkout (${cart.length})` : `Checkout` }
                    </Link>
                </li>
            </ul>
        </nav>
    );
}