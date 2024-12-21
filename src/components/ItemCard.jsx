import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function ItemCard({
    name,
    price,
}) {
    return (
        <>
            <Link 
            to="product" 
            className="product-link" 
            state={{ name, price, }}
            >
                <img src="#" alt="" />
                <div className="card-info">
                    <p>{name}</p>
                    <p>{price}</p>
                </div>
            </Link>
        </>
    )
};

ItemCard.propTypes = {
    name: PropTypes.string,
    price: PropTypes.number,
};

export default ItemCard;