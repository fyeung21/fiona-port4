import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <>
            <h2>This is the 404 page</h2>
            <p>Oops! You have reached the 404 page.</p>
            <Link to="/work">Back to Home</Link>
        </>
    )
}

export default NotFoundPage;