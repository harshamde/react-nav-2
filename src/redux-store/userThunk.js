import { createAsyncThunk } from "@reduxjs/toolkit";
import fetch from "./fetch";

export const userLogin = createAsyncThunk(
    "userLogin",
    async (data) => {
        try {
            // const response = await fetch({ url: "http://localhost:3001/login", method: "post", data });
            const response = await window.roomie.fetch1("/login", { method: "post", body: data });
            if (response.status === "FAILED") {
                throw (response.message);
            }
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
            const response = await window.roomie.fetch1("/register", { method: "post", body: data })
            // const response = await fetch({ url: "http://localhost:3001/register", method: "post", data });
            if (response.status === "FAILED") {
                throw (response.message);
            }
            return response;
        } catch (error) {
            throw (error);
        }
    }
);