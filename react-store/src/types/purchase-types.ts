export interface IPurchaseModalState {
  isVisible: boolean,
  purchaseValues: IPurchaseValues
}

export interface IPurchaseValues {
  firstName: string
  lastName: string
  phone: string
  email: string
  card: string
}
