import { createAsyncThunk } from "@reduxjs/toolkit";
import Fetch from "./Fetch";

const BooksThunk = {

    getBooksFromServer: createAsyncThunk(
        'getBooksFromServer',
        async () => {
            try {
                const books = await Fetch({ url: "http://192.168.0.40:3001/get-books", method: "get" });
                return ({ books });
            } catch (error) {
                throw error;
            }
        }
    ),

    saveBooksToServer: createAsyncThunk(
        'saveBooksToServer',
        async (data) => {
            try {
                const books = await Fetch({ url: "http://192.168.0.40:3001/save-books", method: "post", data });
                return { books };
            } catch (error) {
                throw error;
            }
        }
    )
}
export default BooksThunk;