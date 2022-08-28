export interface IGodsInitialState {
  gods: IGods[]
  status: boolean
  error: boolean
  pageSize: number
  activePage: number
  filterData: IFilterData
  totalProductsCount: number
}

export interface IGods {
  id: number
  title: string
  price: number
  image: string
}

export interface IGetGodsPayload {
  page?: number
  fromForm?: boolean
  title?: string | undefined
  maxPrice?: string | undefined
  minPrice?: string | undefined
}

export interface IFilterData{
  title: string | undefined
  maxPrice: string | undefined
  minPrice: string | undefined
}
