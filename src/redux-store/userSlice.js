import { createSlice } from "@reduxjs/toolkit";
import { userLogin, userRegistration } from "./userThunk";

const userSlice = createSlice({
    name: "userSlice",
    initialState: {
        username: "",
        password: "",
        confirmPassword: "",
        jwtToken: "",
        isLoading: false,
        isLoggedIn: false,
        error: null,
        siteKey: "6Lc5HEYjAAAAAC8eo9CjoupUzsXPX9Xgn1DTMd_v",
        isRecaptchaVerified: false
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

        recaptchaTokenChanged: (state, action) => {
            console.log(action.payload);
        }
    },

    extraReducers: (builder) => {

        //#region ====================================== REGISTRATION THUNK ==============================================

        builder.addCase(userRegistration.pending, (state, action) => {
            state.isLoading = true;
            state.error = null;
        });

        builder.addCase(userRegistration.fulfilled, (state, action) => {
            state.isLoading = false;
            state.password = "";
            state.confirmPassword = "";
        });

        builder.addCase(userRegistration.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        });

        //#endregion


        //#region ====================================== LOGIN THUNK ==============================================

        builder.addCase(userLogin.pending, (state, action) => {
            state.error = null;
            state.isLoggedIn = false;
            state.isLoading = true;
        });

        builder.addCase(userLogin.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isLoggedIn = true;
            // state.jwtToken = action.payload.jwtToken;
        });

        builder.addCase(userLogin.rejected, (state, action) => {
            state.isLoggedIn = false;
            state.isLoading = false;
            state.error = action.error.message;
        });

        //#endregion

    }

});

export default userSlice;