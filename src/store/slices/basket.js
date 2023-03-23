import { createSlice } from "@reduxjs/toolkit";

const initialState = ({
  basketItems: localStorage.getItem('basketItems')
    ? JSON.parse(localStorage.getItem('basketItems'))
    : [],
})

const basketSlices = createSlice({
  name: 'basketItems',
  initialState,
  reducers: {
    increaseProduct: (state, action) => {
      const productIndex = state.basketItems.findIndex(item => item.title === action.payload.title)
      if(productIndex >= 0){
        state.basketItems[productIndex].quantity += 1 
      }else {
       const tempProduct = {...action.payload, quantity: 1} 
       state.basketItems.push(tempProduct)
       localStorage.setItem('basketItems', JSON.stringify(state.basketItems));
      }
    },
    decreaseProduct(state, action) {
      const itemIndex = state.basketItems.findIndex(
        (item) => item.title === action.payload.title
      );

      if (state.basketItems[itemIndex].quantity > 1) {
        state.basketItems[itemIndex].quantity -= 1;

      } else if (state.basketItems[itemIndex].quantity === 1) {
        const nextCartItems = state.basketItems.filter(
          (item) => item.title !== action.payload.title
        );

        state.basketItems = nextCartItems;
      }

      localStorage.setItem('basketItems', JSON.stringify(state.basketItems));
    },
    removeProduct:  (state, action) => {
      const updateProducts = state.basketItems.filter(item => item.title !== action.payload.title)
      state.basketItems = updateProducts
      localStorage.setItem('basketItems', JSON.stringify(state.basketItems));
    },
    clearBasket: (state) => {
      state.basketItems = [];
      localStorage.setItem('basketItems', JSON.stringify(state.basketItems));
    }
  }
})

export const { increaseProduct, removeProduct, clearBasket, decreaseProduct } = basketSlices.actions;

export const basketReducer =  basketSlices.reducer
