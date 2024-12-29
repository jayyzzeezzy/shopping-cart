import styles from './Modal.module.css';
import PropTypes from "prop-types";
// allows modal to render thru portal
import ReactDom from 'react-dom';
import ModalItems from './ModalItems';

function Modal({
    open,
    onClose,
    cartList,
    setCartList,
}) {
    if (!open) return null;
    console.log(cartList);

    // making a call outside of root render
    return ReactDom.createPortal(
        <>
        <div className={styles.overlay} />
        <div className={styles.cart}>
            <h3>Cart</h3>
            <button onClick={onClose}>Close Cart</button>
            <div className={styles.modalItems}>
                <ModalItems cartList={cartList} setCartList={setCartList} />
            </div>
        </div>
        <div className={styles.modalItems}>
        </div>
        </>,
        document.getElementById('portal')
    )
};

Modal.propTypes = {
    open: PropTypes.bool,
    children: PropTypes.string,
    onClose: PropTypes.func,
    cartList: PropTypes.array,
    setCartList: PropTypes.func,
};

export default Modal;