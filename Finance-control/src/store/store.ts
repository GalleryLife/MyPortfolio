import { configureStore } from '@reduxjs/toolkit'
import balanceSlice from '../features/balanceSlice'

export const store = configureStore({
  reducer: {
    balanceSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
