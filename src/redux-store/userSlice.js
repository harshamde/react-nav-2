import { createSlice } from "@reduxjs/toolkit";
import { userLogin, userRegistration } from "./userThunk";

const userSlice = createSlice({
    name: "userSlice",
    initialState: {
        username: "",
        password: "",
        confirmPassword: "",
        jwt: "",
        isLoading: false,
    },

    reducers: {
        usernameChange: (state, action) => {
            state.username = action.payload.username;
        },

        passwordChange: (state, action) => {
            state.password = action.payload.password;
        },

        confirmPasswordChange: (state, action) => {
            state.confirmPassword = action.payload.confirmPassword;
        },
    },

    extraReducers: (builder) => {

        builder.addCase(userRegistration.pending, (state, action) => {
            state.isLoading = true;
        });

        builder.addCase(userRegistration.fulfilled, (state, action) => {
            state.isLoading = false;
        });

        builder.addCase(userRegistration.rejected, (state, action) => {
            state.isLoading = true;
        });

        builder.addCase(userLogin.pending, (state, action) => {
            state.isLoading = true;
        });

        builder.addCase(userLogin.fulfilled, (state, action) => {
            state.isLoading = false;
        });

        builder.addCase(userLogin.rejected, (state, action) => {
            state.isLoading = true;
        });

    }

});

export default userSlice;