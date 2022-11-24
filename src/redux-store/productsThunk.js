import { createAsyncThunk } from "@reduxjs/toolkit";
import Fetch from "./Fetch";

const ProductsThunk = {



    getProductsFromServer: createAsyncThunk(
        'getProductsFromServer',
        async () => {
            try {
                const products = await Fetch({ url: "http://localhost:3001/get-products", method: "get" });
                return { products };
            } catch (error) {
                throw error;
            }
        }
    ),
    saveProductsToServer: createAsyncThunk(
        'saveProductsToServer',
        async (data) => {
            try {
                const products = await Fetch({ url: "http://localhost:3001/save-products", method: "post", data });
                return { products };
            } catch (error) {
                throw error;
            }
        }
    )


}

export default ProductsThunk;