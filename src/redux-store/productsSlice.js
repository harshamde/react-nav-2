import { createSlice } from "@reduxjs/toolkit";
import ProductsThunk from "./productsThunk";
const { getProductsFromServer, saveProductsToServer } = ProductsThunk;

const productsSlice = createSlice({
    name: 'productsSlice',
    initialState: {
        products: [],
        isLoading: false,
        error: null,
        originalProductForEdit: null
    },
    reducers: {
        nameChange: (state, action) => {
            state.products = state.products.map(product => product._id === action.payload.product._id ? { ...product, name: action.payload.name } : product)
        },
        priceChange: (state, action) => {
            state.products = state.products.map(product => product._id === action.payload.product._id ? { ...product, price: action.payload.price } : product)
        },
        quantityChange: (state, action) => {
            state.products = state.products.map(product => product._id === action.payload.product._id ? { ...product, quantity: action.payload.quantity } : product)
        },

        addNewProduct: (state, action) => {
            const newProduct = { _id: ObjectID().toHexString(), name: "", price: "", quantity: 0, status: "new & edit" };
            state.products = [...state.products, newProduct];
        },
        editProduct: (state, action) => {
            state.originalProductForEdit = action.payload.product;

            let newStatus = "";
            switch (action.payload.product.status) {
                case "from-server":
                    newStatus = "from-server & edit";
                    break;
                case "from-server & updated":
                    newStatus = "from-server & edit";
                    break;
                case "new & updated":
                    newStatus = "new & edit";
                    break;
                default:
                    newStatus = action.payload.status;
            }

            state.products = state.products.map(product => product._id === action.payload.product._id ? { ...product, status: newStatus } : product);

        },
        updateProduct: (state, action) => {
            let newStatus = "";
            switch (action.payload.product.status) {
                case "from-server & edit":
                    newStatus = "from-server & updated";
                    break;
                case "new & edit":
                    newStatus = "new & updated";
                    break;
                default:
                    newStatus = action.payload.status;
            }
            state.products = state.products.map(product => product._id === action.payload.product._id ? { ...product, status: newStatus } : product);
        },
        cancelEditProduct: (state, action) => {
            if (action.payload.product.status === "new & edit") {
                state.products = state.products.filter(product => product._id !== action.payload.product._id);
            } else {
                state.products = state.products.map(product => product._id === action.payload.product._id ? state.originalProductForEdit : product);
                state.originalProductForEdit = null;
            }
        },
        deleteProduct: (state, action) => {
            let newStatus = "";
            switch (action.payload.product.status) {
                case "from-server":
                    newStatus = "from-server & deleted";
                    state.products = state.products.map(product => product._id === action.payload.product._id ? { ...product, status: newStatus } : product);
                    break;
                case "from-server & updated":
                    newStatus = "from-server & deleted";
                    state.products = state.products.map(product => product._id === action.payload.product._id ? { ...product, status: newStatus } : product);
                    break;
                case "new & updated":
                    state.products = state.products.filter(product => product._id !== action.payload.product._id);
                    break;
                default:
                    newStatus = action.payload.status;
            }
        },
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


        builder.addCase(saveProductsToServer.fulfilled, (state, action) => {
            state.error = null;
            state.isLoading = false;
            state.products = action.payload.products.map(product => ({ ...product, status: "from-server" }));
        });

    }

});


export default productsSlice;