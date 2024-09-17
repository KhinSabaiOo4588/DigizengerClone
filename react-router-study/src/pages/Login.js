import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css'; // Ensure you import your CSS file

function Login({ setUser }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const loginHandler = (e) => {
        e.preventDefault();
        if (!name || !email) return;
        setUser(name);
        navigate("/dashboard");
    }

    return (
        <div className="login-container">
            <h1>Login</h1>
            <form onSubmit={loginHandler}>
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="Enter your name"
                />
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Enter your email"
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;
