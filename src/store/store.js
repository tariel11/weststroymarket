import { configureStore } from "@reduxjs/toolkit";
import { basketReducer } from "./slices/basket";
import { productsReducer } from "./slices/products";
import { wishListReducer } from "./slices/wishList";

const store = configureStore({
    reducer: {
        products: productsReducer,
        basket: basketReducer,
        wishList: wishListReducer,
    },
});

export default store;
