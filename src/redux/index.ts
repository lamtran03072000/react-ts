import { configureStore, EnhancedStore } from '@reduxjs/toolkit';
import productSlice from './productReducer/productSlice';

export const store: EnhancedStore = configureStore({
  reducer: {
    productReducer: productSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;
