import { useLocation, useOutletContext } from "react-router-dom";
import { useState } from "react";
import Modal from "./Modal";
import styles from './Product.module.css';

function Product() {
    const [cartList, setCartList] = useOutletContext();
    const location = useLocation();
    // state that is transferred by the special state prop in Link
    const product = location.state;
    // console.log(state);

    const [isOpen, setIsOpen] = useState(false);

    const addToCart = () => {
        console.log("clicked");

        const obj = {
            id: product.id,
            name: product.name,
            img: product.image,
            price: product.price,
            // set to 1 by default
            quantity: 1,
        };
        console.log(obj);

        // setCartList
        // if the item already exist in cartList
        // increment its quantiy by 1
        // if it is not found then it is a new item
        // add it to the cart

        setCartList((prevCartList) => {
            let itemExists = false;
            const updatedCart = prevCartList.map(cartItem => {
                if (cartItem.id == obj.id) {
                    itemExists = true;
                    return {...cartItem, quantity: cartItem.quantity + 1};
                }
                return cartItem;
            })

            if (!itemExists) {
                return [...updatedCart, obj];
            }

            return updatedCart;
        })
        console.log(cartList);
        
    };

    return (
        <>
        <h1>Product</h1>
        <div className={styles.detailContainer} id={product.id}>

            <div className="detail-left">
                <img src={product.image} alt="" className={styles.detailImage}/>
            </div>

            <div className="detail-right">
                <div className="detail-info">
                    <p className="detail-name">{product.name}</p>
                    <p className="detail-price">{product.price}</p>
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
                    <p className="detail-description">{product.description}</p>
                </div>
            </div>
        </div>
        <Modal open={isOpen} onClose={() => setIsOpen(false)} cartList={cartList} setCartList={setCartList} />
        </>
    );
};

export default Product;