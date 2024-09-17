import { Link } from "react-router-dom";

function Error(){
    return (
        <div>
            <h1>Error Page</h1>
            <h2>404</h2>
            <h3>Page Not Found</h3>
            <Link to="/">Back To Home</Link>
        </div>
    )
}

export default Error;