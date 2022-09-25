import { createSlice, Draft } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store/store'
import { IBalance } from '../types/balance'

const initialState: IBalance = {
  balance: 0,
  expenses: []
}

export const balanceSlice = createSlice({
  name: 'balance',
  initialState,
  reducers: {
    changeBalance: (state, action) => {
      state.balance = parseInt(action.payload)
    },
    setExpenses: (state, action) => {
      state.expenses = [...state.expenses, { ...action.payload }]
    }
  }
})

export const { changeBalance, setExpenses } = balanceSlice.actions
export default balanceSlice.reducer
