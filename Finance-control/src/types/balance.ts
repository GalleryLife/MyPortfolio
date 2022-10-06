export interface IBalance {
  balance: number
  expenses: IValuesExpenses[]
  isEdit: boolean
  theme: 'light' | 'dark'
  categoryExpenses: string[]
}

export interface IValuesExpenses {
  category: string
  expenses: number
  id: number | string
}

export interface ISetExpenses {
  category: string
  expenses: number
}