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
        <h1 className={styles.productHeading}>Product</h1>
        <div className={styles.detailContainer} id={product.id}>

            <div className={styles.detailLeft}>
                <img src={product.image} alt="" className={styles.detailImage}/>
            </div>

            <div className={styles.detailRight}>
                <div className={styles.detailInfo}>
                    <p className={styles.detailName}>{product.name}</p>
                    <p className={styles.detailPrice}>${product.price}</p>
                </div>

                <div className={styles.detailButton}>
                    <button 
                    type="button" 
                    className={styles.addToCart} 
                    onClick={() => {setIsOpen(true); addToCart()}}
                    >
                        Add to cart
                    </button>
                </div>

                <div className={styles.detailMore}>
                    <p className={styles.detailDescription}>{product.description}</p>
                </div>
            </div>
        </div>
        <Modal open={isOpen} onClose={() => setIsOpen(false)} cartList={cartList} setCartList={setCartList} />
        </>
    );
};

export default Product;