import { createAsyncThunk } from "@reduxjs/toolkit";
import fetch from "./fetch";

const BooksThunk = {
    getBooksFromServer: createAsyncThunk(
        'getBooksFromServer',
        async (data) => {
            try {
                const books = await fetch({ url: "http://192.168.0.40:3001/get-books", method: "get", jwt: data.jwtToken });
                if (books.status === "FAILED") {
                    throw (books.message);
                }
                return { books };
            } catch (error) {
                throw error;
            }
        }
    ),

    saveBooksToServer: createAsyncThunk(
        'saveBooksToServer',
        async (data) => {
            try {
                const books = await fetch({ url: "http://192.168.0.40:3001/save-books", method: "post", data: data.books, jwt: data.jwtToken });
                return { books };
            } catch (error) {
                throw error;
            }
        }
    ),
}
export default BooksThunk;