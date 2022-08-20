import {configureStore} from '@reduxjs/toolkit';
import godsSlice from '../features/godsSlice';
import cartSLice from '../features/cartSlice';

const store = configureStore({
  reducer: {
    gods: godsSlice,
    cart: cartSLice
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;
