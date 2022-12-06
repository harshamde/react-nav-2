import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const App = () => {
    const userSliceState = useSelector(store => store.userSliceState);
    const navigate = useNavigate();

    useEffect(() => {
        if (userSliceState.isLoggedIn) {
            navigate("/dashboard");
        }
    }, [userSliceState.isLoggedIn]);

    useEffect(() => {
        if (userSliceState.isRegistered) {
            navigate("/login");
        }
    }, [userSliceState.isRegistered]);

    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
}

export default App;
