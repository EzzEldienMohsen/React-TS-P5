import { configureStore } from '@reduxjs/toolkit';
import { cartSlice } from './cartSlice';

configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});
