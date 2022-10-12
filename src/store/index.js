import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';
import cartSlice from './cartSlice';

const rootReducer = combineReducers({
  user: userSlice,
  cart: cartSlice,
});

export const store = configureStore({
  reducer: rootReducer
});
