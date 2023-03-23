import { createSlice } from "@reduxjs/toolkit";

const initialState = ({
  wishList: localStorage.getItem('wishList')
  ? JSON.parse(localStorage.getItem('wishList'))
  : [],
})

const wishListSlices = createSlice({
  name: 'wishList',
  initialState,
  reducers: { 
    addToWishList: (state, action) => {
       state.wishList.push(action.payload)
       localStorage.setItem('wishList', JSON.stringify(state.wishList));
      
    },
    removeToWishList:  (state, action) => {
      const updateWishList = state.wishList.filter(item => item.title !== action.payload.title)
      state.wishList = updateWishList
      localStorage.setItem('wishList', JSON.stringify(state.wishList));
    },
    clearWishList: (state) => {
      state.wishList = [];
      localStorage.setItem('wishList', JSON.stringify(state.wishList));
    }
  }
})

export const { addToWishList, removeToWishList, clearWishList } = wishListSlices.actions;

export const wishListReducer =  wishListSlices.reducer