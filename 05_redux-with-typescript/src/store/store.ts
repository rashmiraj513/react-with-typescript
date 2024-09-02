import { configureStore } from '@reduxjs/toolkit';
import { cartSlice } from './CartSlice.ts';

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
