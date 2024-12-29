import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
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