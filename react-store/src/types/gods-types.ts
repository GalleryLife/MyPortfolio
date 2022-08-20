export interface IGodsInitialState {
  gods: IGods[]
  status: boolean
}

export interface IGods {
  id: number,
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: IRating
}

interface IRating {
  rate: number
  count: number
}
