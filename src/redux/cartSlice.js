import { createSlice } from "@reduxjs/toolkit";


export const slice = createSlice({
    name: 'cart',
    initialState: {
      cartItem: [
        1
      ]
    },
  
    reducers: {
      addItemToCart: (state, action) => {
          state.cartItem.push({
            dishId: action.payload.dish.id,
            quantity: action.payload.quantity
          })
      }
      }
     },
  )
  
  
  export const getCartItems = state => state.cart.cartItem;
  export const { addItemToCart } = slice.actions;
  export default slice.reducer;