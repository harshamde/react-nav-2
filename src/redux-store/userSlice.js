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
        isRegistered: false,
        error: null,
        // siteKey: "6Lc5HEYjAAAAAC8eo9CjoupUzsXPX9Xgn1DTMd_v",
        // isRecaptchaVerified: false,
        // recaptchaToken: null
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

        googleLoginSuccess: (state, action) => {
            let isLoginSuccess = action.payload;
            
            if (isLoginSuccess) {
                state.isLoggedIn = isLoginSuccess;
            } else {
                state.error = "Google sign in failed";
            }
        },

        // recaptchaTokenChanged: (state, action) => {
        //     state.recaptchaToken = action.payload.recaptchaToken;
        // },

        clearData: (state, action) => {
            state.password = "";
            state.username = "";
            state.confirmPassword = "";
            state.error = null;
        }
    },

    extraReducers: (builder) => {

        //#region ====================================== REGISTRATION THUNK ==============================================

        builder.addCase(userRegistration.pending, (state, action) => {
            state.isLoading = true;
            state.error = null;
            state.isRegistered = false;

        });

        builder.addCase(userRegistration.fulfilled, (state, action) => {
            state.isLoading = false;
            state.password = "";
            state.username = "";
            state.confirmPassword = "";
            state.isRegistered = true;
            state.error = null;
        });

        builder.addCase(userRegistration.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
            state.isRegistered = false;
            state.password = "";
            state.username = "";
            state.confirmPassword = "";
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
            state.password = "";
            state.username = "";
            state.confirmPassword = "";
            state.error = null;
        });

        builder.addCase(userLogin.rejected, (state, action) => {
            state.isLoggedIn = false;
            state.isLoading = false;
            state.error = action.error.message;
            state.password = "";
            state.username = "";
            state.confirmPassword = "";
        });

        //#endregion

    }

});

export default userSlice;