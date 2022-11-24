import { createAsyncThunk } from "@reduxjs/toolkit";
import Fetch from "./Fetch";

export const userLogin = createAsyncThunk(
    "userLogin",
    async (data) => {
        try {
            const response = Fetch({ url: "http://localhost:3001/login", method: "post", data });
            return response;
        } catch (error) {
            throw (error);
        }
    }
);


export const userRegistration = createAsyncThunk(
    "userRegistration",
    async (data) => {
        try {
            const response = Fetch({ url: "http://localhost:3001/register", method: "post", data });
            return response;
        } catch (error) {
            throw (error);
        }
    }
);