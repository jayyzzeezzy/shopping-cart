import { useLocation, useOutletContext } from "react-router-dom";
import { useState } from "react";
import Modal from "./Modal";
import styles from './Product.module.css';

function Product() {
    const [cartList, setCartList] = useOutletContext();
    const location = useLocation();
    // state that is transferred by the special state prop in Link
    const state = location.state;
    // console.log(state);

    const [isOpen, setIsOpen] = useState(false);

    const addToCart = () => {
        console.log("clicked");
        const obj = {
            id: state.id,
            name: state.name,
            img: state.image,
            price: state.price,
            // set to 1 by default
            quantity: 1,
        };
        console.log(obj);

        // setCartList
        // if the item already exist in cartList
        // increment its quantiy by 1
        // if it is not found then it is a new item
        // add it to the cart

        
        console.log(cartList);
    };

    return (
        <>
        <h1>Product</h1>
        <div className={styles.detailContainer}>

            <div className="detail-left">
                <img src={state.image} alt="" className={styles.detailImage}/>
            </div>

            <div className="detail-right">
                <div className="detail-info">
                    <p className="detail-name">{state.name}</p>
                    <p className="detail-price">{state.price}</p>
                </div>

                <div className="detail-button">
                    <button 
                    type="button" 
                    className="add-to-cart" 
                    onClick={() => {setIsOpen(true); addToCart()}}
                    >
                        Add to cart
                    </button>
                </div>

                <div className="detail-more">
                    <p className="detail-description">{state.description}</p>
                </div>
            </div>
        </div>
        <Modal open={isOpen} onClose={() => setIsOpen(false)} cartList={cartList} setCartList={setCartList} />
        </>
    );
};

export default Product;