import styles from './Modal.module.css';
import PropTypes from "prop-types";

function Modal({
    open,
    children,
    onClose,
}) {
    if (!open) return null;

    return (
        <>
        <div className={styles.overlay} />
        <div className={styles.cart}>
            <button onClick={onClose}>Close Cart</button>
            {children}
        </div>
        </>
        
    )
};

Modal.propTypes = {
    open: PropTypes.bool,
    children: PropTypes.string,
    onClose: PropTypes.func,
};

export default Modal;