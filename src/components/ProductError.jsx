import { Link } from "react-router-dom";

function ProducError() {
    return (
        <div>
            {/* &apos; is the notation for apostrophe (') */}
            <h1>I&apos;m sorry. We failed to update your cart.</h1>
            <Link to="/">
                You can go back to the homoe page by clicking here, though!
            </Link>
        </div>
    )
}

export default ProducError;