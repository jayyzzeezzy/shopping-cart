import { Link } from "react-router-dom";
import styles from "./ProductError.module.css";

function ProducError() {
    return (
        <div className={styles.productError}>
            {/* &apos; is the notation for apostrophe (') */}
            <h1>I&apos;m sorry. We could not update your cart.</h1>
            <Link to="/">
                You can go back to the homoe page by clicking here, though!
            </Link>
        </div>
    )
}

export default ProducError;