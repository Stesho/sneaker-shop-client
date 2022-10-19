import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';
import cartSlice from './cartSlice';
import productsSlice from './productsSlice';

const rootReducer = combineReducers({
  user: userSlice,
  cart: cartSlice,
  products: productsSlice
});

export const store = configureStore({
  reducer: rootReducer
});
