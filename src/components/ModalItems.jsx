import PropTypes from "prop-types";
import styles from './ModalItems.module.css';

function ModalItems({
    cartList,
    // eslint-disable-next-line no-unused-vars
    setCartList,
}) {
    return (
        <>
        <h3>Items</h3>
        
        <ul>
            {cartList.map((item) => {
                return (
                    <li className={styles.modalItem} key={item.id}>
                        <img src={item.img} alt="" />
                        <div className="modalItemEdit">
                            <input type="number" value={item.quantity}/>
                            x
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