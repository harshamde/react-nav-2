import { NavLink, useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const handleLoginClick = () => {
        navigate("/dashboard");
    };

    return (
        <div style={{ display: 'inline-block', border: '1px solid black', padding: '10px' }}>
            Username : <input type="text" />
            <br />
            Password : <input type="password" />
            <br />
            <button onClick={handleLoginClick}>Login</button>
            <br />
            New User? <NavLink to="/register">Register...</NavLink>
        </div>
    );
}

export default Login;
