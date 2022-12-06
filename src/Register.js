import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import userSlice from './redux-store/userSlice';
import { userRegistration } from './redux-store/userThunk';

//#region recaptcha
import ReCAPTCHA from 'react-google-recaptcha'
// import axios from 'axios';
//#endregion

const Register = () => {
    const userSliceState = useSelector(store => store.userSliceState);
    const dispatch = useDispatch();

    const handleRegisterClick = () => {
        const dataToSend = {
            username: userSliceState.username,
            password: userSliceState.password,
            confirmPassword: userSliceState.confirmPassword,
            recaptchaToken: userSliceState.recaptchaToken

        };
        dispatch(userRegistration(dataToSend));
    };

    async function onChange(value) {
        dispatch(userSlice.actions.recaptchaTokenChanged({ recaptchaToken: value }));
    }

    useEffect(() => {
        dispatch(userSlice.actions.clearData());
    }, []);

    return (
        <div style={{ display: 'inline-block', border: '1px solid black', padding: '10px' }}>
            Username : <input type="text" value={userSliceState.username} onChange={(e) => dispatch(userSlice.actions.usernameChange({ username: e.target.value }))} />
            <br />
            Password : <input type="password" value={userSliceState.password} onChange={(e) => dispatch(userSlice.actions.passwordChange({ password: e.target.value }))} />
            <br />
            Confirm Password : <input type="password" value={userSliceState.confirmPassword} onChange={(e) => dispatch(userSlice.actions.confirmPasswordChange({ confirmPassword: e.target.value }))} />
            <br /><br />

            <ReCAPTCHA
                sitekey="6Lc5HEYjAAAAAC8eo9CjoupUzsXPX9Xgn1DTMd_v"
                onChange={onChange}
            />

            {userSliceState.isLoading ? <label>Please wait...</label> :
                <button onClick={handleRegisterClick}>Register</button>}
            <br />
            {userSliceState.error && <div style={{ color: "red" }}>{userSliceState.error}</div>}
            <br />
            Existing User? <NavLink to="/login">Login...</NavLink>
        </div >
    );
}

export default Register;
