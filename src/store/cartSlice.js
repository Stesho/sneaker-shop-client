import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
  },
  reducers: {
    addToCart(state, action) {
      state.products.push(action.payload);
    },
    updateProductById(state, action) {
      const products = state.products;
      const index = state.products.findIndex(item => item.id === action.payload.id);
      products.splice(index, 1, action.payload.product);
      state.products = products;
    },
    removeProductById(state, action) {
      const index = state.products.findIndex(item => item.id === action.payload.id);
      state.products.splice(index, 1);
    }
  }
});

export const { addToCart, updateProductById, removeProductById } = cartSlice.actions;
export default cartSlice.reducer;
