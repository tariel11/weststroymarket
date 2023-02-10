import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../utils/axios";

export const fetchSearchProducts = createAsyncThunk('searchProducts/fetchSearchProducts', async (searchQuery) => {
  const {data} = await axios.get(`/products/search`, {params: {searchQuery}});
  return data
})

const initialState = {
  searchProducts: {
    items: [],
    status: 'loading'
  }
}

const searchProductsSlices = createSlice({
  name: 'searchProducts',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchSearchProducts.pending]: (state) => {
      state.searchProducts.items = [];
      state.searchProducts.status = 'loading'
    },
    [fetchSearchProducts.fulfilled]: (state, action) => {
      state.searchProducts.items = action.payload;
      state.searchProducts.status = 'loaded'
    },
    [fetchSearchProducts.rejected]: (state) => {
      state.searchProducts.items = [];
      state.searchProducts.status = 'error'
    },
  }
})

export const searchProductsReducer = searchProductsSlices.reducer