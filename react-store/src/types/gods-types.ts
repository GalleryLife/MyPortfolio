export interface IGodsInitialState {
  gods: IGods[]
  status: boolean
  searchValue: string
  category: string[]
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

export interface IFilterState {
  search: ISearch
}

interface ISearch {
  value: string
}
