import { Link } from "react-router-dom";
import styles from './Navbar.module.css';

function Navbar() {
    return (
        <nav className={styles.Navbar}>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="shop">Shop</Link>
                </li>
            </ul>
            <div>
                <li>
                    <Link to="cart">Cart</Link>
                </li>
            </div>
        </nav>
    )
};

export default Navbar;