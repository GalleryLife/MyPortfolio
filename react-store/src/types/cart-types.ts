export interface ICartState {
  cart: ICart[]
}

export interface ICart {
  id: number
  title: string
  img: string
  price: number
  count: number
}

export interface ICartPayload {
  id: number
  title: string
  img: string
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
