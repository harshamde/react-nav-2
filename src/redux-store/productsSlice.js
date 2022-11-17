import { createSlice } from "@reduxjs/toolkit";
import getProductsFromServer from "./productsThunk";

const productsSlice = createSlice({
    name: 'productsSlice',
    initialState: {
        products: [],
        isLoading: false,
        error: null,
    },
    reducers: {

    },

    extraReducers: (builder) => {
        builder.addCase(getProductsFromServer.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.products = action.payload.products;
        });

        builder.addCase(getProductsFromServer.pending, (state, action) => {
            state.isLoading = true;
        });

        builder.addCase(getProductsFromServer.rejected, (state, action) => {
            state.error = action.error.message;
            state.isLoading = false;
        });
    }

});


export default productsSlice;