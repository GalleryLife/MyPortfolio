import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IBalance, ISetExpenses, IValuesExpenses } from '../types/balance'

const data = [
  'Food & drinks',
  'Shopping',
  'Housing',
  'Transport',
  'Vehisle',
  'Life & Entertainment',
  'Cimmunication, PC',
  'Financial expenses',
  'Investments',
  'Income'
]

const initialState: IBalance = {
  balance: 0,
  expenses: [],
  isEdit: false,
  theme: 'light',
  categoryExpenses: data
}

export const balanceSlice = createSlice({
  name: 'balance',
  initialState,
  reducers: {
    changeBalance: (state, action) => {
      if (action.payload === '') {
        state.balance = 0
      } else { 
        state.balance = parseInt(action.payload)
      }
    },
    updateBalance: (state) => {
      const initialValue = 0
      const summ = state.expenses.reduce((accumulator: number, currentValue: IValuesExpenses) => 
        accumulator + currentValue.expenses,
      initialValue)
      state.balance = state.balance - summ
    },
    setExpenses: {
      reducer: (state, action: PayloadAction<ISetExpenses>) => {
        state.expenses = [
          ...state.expenses, 
          { 
            ...action.payload, 
            id: new Date().getMilliseconds() + Math.random() 
          }
        ]
        state.balance = state.balance - action.payload.expenses
      },
      prepare: (category: string, expenses: number, description: string) => ({ payload: { category, expenses, description } })
    },
    toggleEditMode: (state) => {
      state.isEdit = !state.isEdit
    },
    setTheme: (state) => {
      state.theme = (state.theme === 'light' ? 'dark' : 'light')
    }
  }
})

export const {
  changeBalance,
  setExpenses,
  toggleEditMode,
  setTheme,
  updateBalance
} = balanceSlice.actions
export default balanceSlice.reducer
