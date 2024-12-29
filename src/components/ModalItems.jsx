import PropTypes from "prop-types";
import styles from './ModalItems.module.css';
import { useEffect, useState } from "react";

function ModalItems({
    cartList,
    setCartList,
}) {
    const [subtotal, setSubtoal] = useState();


    useEffect(() => {
        if (cartList.length > 0) {
            let tempTotal = cartList.reduce((acc, item) => {
                return acc + item.quantity * item.price;
            }, 0);
            setSubtoal(tempTotal);
        } else {
            setSubtoal(0);
        }
    }, [cartList]);

    function incItem(id) {
        setCartList((prevList) =>{
            const updatedList = prevList.map((item) => {
                if (item.id == id) {
                    return {...item, quantity: item.quantity + 1}
                }
                return item;
            })
            return updatedList;
        })
    }

    function decItem(id) {
        setCartList((prevList) => {
            const updatedList = prevList.map((item) => {
                if (item.id == id) {
                    return {...item, quantity: item.quantity - 1}
                }
            })
            return updatedList;
        })
    }


    function delItem(id) {
        setCartList((prevList) => {
            return prevList.filter((item) => item.id != id);
        })
    }

    return (
        <>
        <h3>Subtotal</h3>
        <h3>${subtotal}</h3>
        
        <ul>
            {cartList.map((item) => {
                if (!item) return console.log(null);

                return (
                    <li className={styles.modalItem} key={item.id}>
                        <img src={item.img} alt="" />
                        <p>${item.price}</p>
                        <div className="modalItemEdit">
                            {/* remove decrement if quantity is 0 */}
                            {(item.quantity == 0) ? null : (<button onClick={() => decItem(item.id)}>-</button>)}
                            <p>{item.quantity}</p>
                            <button onClick={() => incItem(item.id)}>+</button>
                        </div>
                        <div className="modalItemDelete">
                            <button onClick={() => delItem(item.id)}>&#128465;</button>
                        </div>
                    </li>
                )
            })}
        </ul>
        </>
    )

}

ModalItems.propTypes = {
    cartList: PropTypes.array,
    setCartList: PropTypes.func,
};

export default ModalItems;