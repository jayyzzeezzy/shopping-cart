import styles from './Modal.module.css';
import PropTypes from "prop-types";
// allows modal to render thru portal
import ReactDom from 'react-dom';

function Modal({
    open,
    children,
    onClose,
}) {
    if (!open) return null;

    // making a call outside of root render
    return ReactDom.createPortal(
        <>
        <div className={styles.overlay} />
        <div className={styles.cart}>
            <h3>Cart</h3>
            <button onClick={onClose}>Close Cart</button>
            {children}
        </div>
        </>,
        document.getElementById('portal')
    )
};

Modal.propTypes = {
    open: PropTypes.bool,
    children: PropTypes.string,
    onClose: PropTypes.func,
};

export default Modal;