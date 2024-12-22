import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function ItemCard({
    name,
    price,
    image,
}) {
    return (
        <>
            <Link 
            to="product" 
            className="product-link" 
            state={{ name, price, image, }}
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
};

export default ItemCard;