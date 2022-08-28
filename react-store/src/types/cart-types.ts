export interface ICartState {
  cart: ICart[]
  isPurchase: boolean
}

export interface ICart {
  id: number
  img: string
  price: number
  count: number
  title: string
}

export interface ICartPayload {
  id: number
  img: string
  title: string
  price: number
}

export interface ICartRemoveItem {
  id: number
}

export interface ICartIncrementCount {
  id: number
  count: number
}

export interface ICartDecrementCount {
  id: number
  count: number
}
