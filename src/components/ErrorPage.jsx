import { Link } from "react-router-dom";
import styles from "./ErrorPage.module.css";

function ErrorPage() {
    return (
        <div className={styles.errorPage}>
            {/* &apos; is the notation for apostrophe (') */}
            <h1>Oh no, this route doesn&apos;t exist!</h1>
            <Link to="/">
                You can go back to the homoe page by clicking here, though!
            </Link>
        </div>
    )
}

export default ErrorPage;