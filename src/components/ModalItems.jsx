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

    function incItem(e) {
        const targetId = e.target.parentElement.id;
        setCartList((prevList) =>{
            const updatedList = prevList.map((item) => {
                if (item.id == targetId) {
                    return {...item, quantity: item.quantity + 1}
                }
                return item;
            })
            return updatedList;
        })
    }

    function decItem(e) {
        const targetId = e.target.parentElement.id;
        setCartList((prevList) => {
            const updatedList = prevList.map((item) => {
                if (item.id == targetId) {
                    return {...item, quantity: item.quantity - 1}
                }
            })
            return updatedList;
        })
    }


    function delItem(e) {
        const targetId = e.target.parentElement.id;
        setCartList((prevList) => {
            return prevList.filter((item) => item.id != targetId);
        })
    }

    return (
        <>
        <h3>Subtotal</h3>
        <h3>${Math.round(subtotal * 100) /100}</h3>
        
        <ul>
            {cartList.map((item) => {
                // if (!item) return null;
                
                return (
                    <li className={styles.modalItem} key={item.id}>
                        <img src={item.img} alt="" />
                        <p>${item.price}</p>
                        <div className="modalItemEdit" id={item.id}>
                            {/* remove decrement if quantity is 1 */}
                            {(item.quantity == 0) ? null : (<button onClick={(e) => decItem(e)}>-</button>)}
                            <p>{item.quantity}</p>
                            <button onClick={(e) => incItem(e)}>+</button>
                        </div>
                        <div className="modalItemDelete" id={item.id}>
                            {/* using unicode (&#128465;) for the trash can icon */}
                            <button onClick={(e) => delItem(e)}>&#128465;</button>
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