import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import userSlice from './redux-store/userSlice';
import { userRegistration } from './redux-store/userThunk';

const Register = () => {
    const userSliceState = useSelector(store => store.userSliceState);
    const dispatch = useDispatch();

    const handleRegisterClick = () => {
        console.log("click");
        const dataToSend = {
            username: userSliceState.username,
            password: userSliceState.password,
            confirmPassword: userSliceState.confirmPassword
        };

        dispatch(userRegistration(dataToSend));

    };


    return (
        <div style={{ display: 'inline-block', border: '1px solid black', padding: '10px' }}>
            Username : <input type="text" value={userSliceState.username} onChange={(e) => dispatch(userSlice.actions.usernameChange({ username: e.target.value }))} />
            <br />
            Password : <input type="text" value={userSliceState.password} onChange={(e) => dispatch(userSlice.actions.passwordChange({ password: e.target.value }))} />
            <br />
            Confirm Password : <input type="text" value={userSliceState.confirmPassword} onChange={(e) => dispatch(userSlice.actions.confirmPasswordChange({ confirmPassword: e.target.value }))} />
            <br />
            <button onClick={handleRegisterClick}>Register</button>
            <br />
            Existing User? <NavLink to="/login">Login...</NavLink>
        </div>
    );
}

export default Register;
