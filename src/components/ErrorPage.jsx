import { Link } from "react-router-dom";

function ErrorPage() {
    return (
        <div>
            {/* &apos; is the notation for apostrophe (') */}
            <h1>Oh no, this route doesn&apos;t exist!</h1>
            <Link to="/">
                You can go back to the homoe page by clicking here, though!
            </Link>
        </div>
    )
}

export default ErrorPage;