import { createAsyncThunk } from "@reduxjs/toolkit";
import fetch from "./fetch";

const getProductsFromServer = createAsyncThunk(
    'getProductsFromServer',
    async () => {
        try {
            const products = await fetch("http://localhost:3001/get-products", "get");
            return { products };
        } catch (error) {
            throw error;
        }
    }
);



export default getProductsFromServer;