export interface IBalance {
  balance: number
  expenses: IValuesExpenses[]
}

export interface IValuesExpenses {
  products: string
  expenses: string | number
}
