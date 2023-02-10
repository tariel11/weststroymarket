import { createSlice } from "@reduxjs/toolkit";

const initialState = ({
  basket: {
    basketItems: localStorage.getItem('basketItems')
    ? JSON.parse(localStorage.getItem('basketItems'))
    : [],
    userInfo: localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : {},
  }
})

const basketSlices = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    increaseProduct: (state, action) => {
      const productIndex = state.basket.basketItems.findIndex(item => item.title === action.payload.title)
      if(productIndex >= 0){
        state.basket.basketItems[productIndex].quantity += 1 
      }else {
       const tempProduct = {...action.payload, quantity: 1} 
       state.basket.basketItems.push(tempProduct)
       localStorage.setItem('basketItems', JSON.stringify(state.basket.basketItems));
      }
    },
    decreaseProduct(state, action) {
      const itemIndex = state.basket.basketItems.findIndex(
        (item) => item.title === action.payload.title
      );

      if (state.basket.basketItems[itemIndex].quantity > 1) {
        state.basket.basketItems[itemIndex].quantity -= 1;

      } else if (state.basket.basketItems[itemIndex].quantity === 1) {
        const nextCartItems = state.basket.basketItems.filter(
          (item) => item.title !== action.payload.title
        );

        state.basket.basketItems = nextCartItems;
      }

      localStorage.setItem('basketItems', JSON.stringify(state.basket.basketItems));
    },
    removeProduct:  (state, action) => {
      const updateProducts = state.basket.basketItems.filter(item => item.title !== action.payload.title)
      state.basket.basketItems = updateProducts
      localStorage.setItem('basketItems', JSON.stringify(state.basket.basketItems));
    },
    clearBasket: (state) => {
      state.basket.basketItems = [];
      localStorage.setItem('basketItems', JSON.stringify(state.basket.basketItems));
    }
  }
})

export const { increaseProduct, removeProduct, clearBasket, decreaseProduct } = basketSlices.actions;

export const basketReducer =  basketSlices.reducer
