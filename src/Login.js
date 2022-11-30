import { NavLink, useNavigate } from "react-router-dom";
import { userLogin } from "./redux-store/userThunk";
import { useDispatch, useSelector } from 'react-redux';
import userSlice from './redux-store/userSlice';

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userSliceState = useSelector(store => store.userSliceState);

    const handleLoginClick = () => {
        const dataToSend = {
            username: userSliceState.username,
            password: userSliceState.password,
        };

        dispatch(userLogin(dataToSend));
    };


    return (
        <div style={{ display: 'inline-block', border: '1px solid black', padding: '10px' }}>
            Username : <input type="text" value={userSliceState.username} onChange={(e) => dispatch(userSlice.actions.usernameChange({ username: e.target.value }))} />
            <br />
            Password : <input type="password" value={userSliceState.password} onChange={(e) => dispatch(userSlice.actions.passwordChange({ password: e.target.value }))} />
            <br /><br />
            {userSliceState.isLoading ? <label>Please wait...</label> :
                <button onClick={handleLoginClick}>Login</button>}
            <br />
            {userSliceState.error && <div style={{ color: "red" }}>{userSliceState.error}</div>}
            <br />
            New User? <NavLink to="/register">Register...</NavLink>
        </div>
    );
}

export default Login;
