import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function ItemCard({
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
            state={{ name, price, image, description, }}
            >
                <img 
                src={image} 
                alt="" 
                className="product-image" 
                />
                <div className="card-info">
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
    name: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string,
    description: PropTypes.string,
};

export default ItemCard;