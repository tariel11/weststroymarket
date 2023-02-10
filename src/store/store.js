import { configureStore } from "@reduxjs/toolkit";
import { basketReducer } from "./slices/basket";
import { categoryProductsReducer } from "./slices/products";
import { searchProductsReducer } from "./slices/searchProducts";
import { wishListReducer } from "./slices/wishList";

const store = configureStore({
  reducer: {
    categoryProducts: categoryProductsReducer,
    basket: basketReducer,
    wishList: wishListReducer,
    searchProducts: searchProductsReducer
  }
})

export default store