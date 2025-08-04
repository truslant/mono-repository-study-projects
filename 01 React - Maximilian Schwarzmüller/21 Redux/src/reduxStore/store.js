import { configureStore } from "@reduxjs/toolkit";
import { productsSliceReducer } from "./productsSlice";
import { cartSliceReducer } from "./cartSlice";

const reduxStore = configureStore({
    reducer: {
        productsSlice: productsSliceReducer,
        cartSlice: cartSliceReducer,
    }
})

export default reduxStore