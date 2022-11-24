import { configureStore } from "@reduxjs/toolkit";
import booksSlice from "./booksSlice";
import productsSlice from "./productsSlice";
import userSlice from './userSlice';

export const store = configureStore({
    reducer: {
        booksSliceState: booksSlice.reducer,
        productsSliceState: productsSlice.reducer,
        userSliceState: userSlice.reducer,
    },
});