import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function ItemCard({
    id,
    name,
    price,
    image,
    description,
}) {
    return (
        <>
            <Link 
            to="product" 
            className="product-link" 
            // pass state using the special state prop for Link in React Router
            state={{ id, name, price, image, description, }}
            >
                <img 
                src={image} 
                alt="" 
                className="product-image" 
                />
                <div className="card-info">
                    <p>{id}</p>
                    <p className="product-name">
                        {name}
                    </p>
                    <p className="product-price">
                        {price}
                    </p>
                </div>
            </Link>
        </>
    )
};

ItemCard.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string,
    description: PropTypes.string,
};

export default ItemCard;