import { useLocation } from "react-router-dom";
import { useState } from "react";
import Modal from "./Modal";
import styles from './Product.module.css';

function Product() {
    const location = useLocation();
    // eslint-disable-next-line no-unused-vars
    const [item, setItem] = useState({...location.state});
    console.log(item);

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
        <h1>Product</h1>
        <div className={styles.detailContainer}>

            <div className="detail-left">
                <img src={item.image} alt="" className={styles.detailImage}/>
            </div>

            <div className="detail-right">
                <div className="detail-info">
                    <p className="detail-name">{item.name}</p>
                    <p className="detail-price">{item.price}</p>
                </div>

                <div className="detail-button">
                    <button 
                    type="button" 
                    className="add-to-cart" 
                    onClick={() => setIsOpen(true)}
                    >
                        Add to cart
                    </button>
                </div>

                <div className="detail-more">
                    <p className="detail-description">{item.description}</p>
                </div>
            </div>
        </div>
        <Modal open={isOpen} onClose={() => setIsOpen(false)} />
        </>
    );
};

export default Product;