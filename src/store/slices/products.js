import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../utils/axios";

export const fetchCategoryProducts = createAsyncThunk('categoryProducts/fetchCategoryProducts', async (category) => {
  const {data} = await axios.get(`/products/category`, {params: {category}});
  return data
})

const initialState = {
  categoryProducts: {
    items: [],
    status: 'loading'
  }
}

const categoryProductsSlices = createSlice({
  name: 'categoryProducts',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCategoryProducts.pending]: (state) => {
      state.categoryProducts.items = [];
      state.categoryProducts.status = 'loading'
    },
    [fetchCategoryProducts.fulfilled]: (state, action) => {
      state.categoryProducts.items = action.payload;
      state.categoryProducts.status = 'loaded'
    },
    [fetchCategoryProducts.rejected]: (state) => {
      state.categoryProducts.items = [];
      state.categoryProducts.status = 'error'
    },
  }
})

export const categoryProductsReducer = categoryProductsSlices.reducer