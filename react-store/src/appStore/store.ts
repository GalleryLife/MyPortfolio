import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import godsSlice from '../features/godsSlice';
import cartSLice from '../features/cartSlice';
import purchaseSlice from '../features/modalSlice';

const persistConfig = {
  key: 'cart',
  storage
}

const rootCartReducer = combineReducers({
  cartSLice,
})
const persistCartReducer = persistReducer(persistConfig, rootCartReducer)

const store = configureStore({
  reducer: {
    gods: godsSlice,
    cart: persistCartReducer,
    purchaseModal: purchaseSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persister = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;
