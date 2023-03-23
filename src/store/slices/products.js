import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../utils/axios";

export const fetchCategoryProducts = createAsyncThunk(
    "categoryProducts/fetchCategoryProducts",
    async ({ category, price = "all", order = "lowest", page = "1" }) => {
        const { data } = await axios.get(
            `/products/getall?&category=${category}&price=${price}&order=${order}&page=${page}`
        );
        return data;
    }
);

export const fetchSearchProducts = createAsyncThunk(
    "searchProducts/fetchSearchProducts",
    async ({ query, price = "all", order = "lowest", page = "1" }) => {
        const { data } = await axios.get(
            `/products/getall?&query=${query}&price=${price}&order=${order}&page=${page}`
        );
        return data;
    }
);

export const fetchOneProduct = createAsyncThunk(
    "/fetcOneProduct",
    async (slug) => {
        const { data } = await axios.get("/products/getone", {
            params: { slug },
        });
        return data;
    }
);

const initialState = {
    categoryProducts: {
        products: [],
        countProducts: 0,
        pages: 0,
        productsPerPage: 0,
        status: "loading",
    },
    oneProduct: {
        product: {},
        status: "loading",
    },
    searchProducts: {
        products: [],
        countProducts: 0,
        pages: 0,
        productsPerPage: 0,
        status: "loading",
    },
};

const productsSlices = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: {
        [fetchCategoryProducts.pending]: (state) => {
            state.categoryProducts.products = [];
            state.categoryProducts.status = "loading";
        },
        [fetchCategoryProducts.fulfilled]: (state, action) => {
            state.categoryProducts.products = action.payload.products;
            state.categoryProducts.countProducts = action.payload.countProducts;
            state.categoryProducts.pages = action.payload.pages;
            state.categoryProducts.productsPerPage =
                action.payload.productsPerPage;
            state.categoryProducts.status = "loaded";
        },
        [fetchCategoryProducts.rejected]: (state) => {
            state.categoryProducts.products = [];
            state.categoryProducts.status = "error";
        },
        [fetchSearchProducts.pending]: (state) => {
            state.searchProducts.products = [];
            state.searchProducts.status = "loading";
        },
        [fetchSearchProducts.fulfilled]: (state, action) => {
            state.searchProducts.products = action.payload.products;
            state.searchProducts.countProducts = action.payload.countProducts;
            state.searchProducts.pages = action.payload.pages;
            state.searchProducts.productsPerPage =
                action.payload.productsPerPage;
            state.searchProducts.status = "loaded";
        },
        [fetchSearchProducts.rejected]: (state) => {
            state.searchProducts.products = [];
            state.searchProducts.status = "error";
        },
        [fetchOneProduct.pending]: (state) => {
            state.oneProduct.product = {};
            state.oneProduct.status = "loading";
        },
        [fetchOneProduct.fulfilled]: (state, action) => {
            state.oneProduct.product = action.payload;
            state.oneProduct.status = "loaded";
        },
        [fetchOneProduct.rejected]: (state) => {
            state.oneProduct.product = {};
            state.oneProduct.status = "error";
        },
    },
});

export const productsReducer = productsSlices.reducer;
