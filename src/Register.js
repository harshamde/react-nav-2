import React from 'react';
import { NavLink } from 'react-router-dom';

const Register = () => {

    const handleRegisterClick = () => { };
    return (
        <div style={{ display: 'inline-block', border: '1px solid black', padding: '10px' }}>
            Username : <input type="text" />
            <br />
            Password : <input type="password" />
            <br />
            Confirm Password : <input type="password" />
            <br />
            <button onClick={handleRegisterClick}>Register</button>
            <br />
            Existing User? <NavLink to="/login">Login...</NavLink>
        </div>
    );
}

export default Register;
