import axios from 'axios';
import {createAsyncThunk, createSlice, Draft, PayloadAction} from '@reduxjs/toolkit';
import {IFilterData, IGetGodsPayload, IGods, IGodsInitialState} from '../types/gods-types';

const initialState: IGodsInitialState = {
  gods: [],
  filterData: {
    title: '',
    maxPrice: '',
    minPrice: '',
  },
  totalProductsCount: 0,
  activePage: 1,
  pageSize: 9,
  status: false,
  error: false
}

export const getGods = createAsyncThunk(
  'gods/getGods',
  async ({
    maxPrice,
    minPrice,
    page,
    title,
    fromForm = false
  }: IGetGodsPayload, {
    dispatch,
    getState
  }: any) => {
    const {pageSize, activePage, filterData} = getState().gods

    if (!fromForm) {
      title = filterData.title
      maxPrice = filterData.maxPrice
      minPrice = filterData.minPrice

      if (!page) page = activePage
      dispatch(setActivePage(page!))
    } else {
      dispatch(setActivePage(1))

      if (!(title || minPrice || maxPrice)) {
        title = ''
        minPrice = ''
        maxPrice = ''
      }
    }
    dispatch(setFilterData({title, minPrice, maxPrice}))
    try {
      await axios(`http://localost:8888/gods?${minPrice && '&price_gte=' + minPrice}${maxPrice && '&price_lte=' + maxPrice}${title && '&title_like=' + title}`)
        .then(response => dispatch(setTotalProductsCount(response.data.length)))
      return axios(`http://localhost:8888/gods?_page=${page}&_limit=${pageSize}${minPrice && '$price_gte=' + minPrice}${maxPrice && '$price_lte=' + maxPrice}${maxPrice}${title && '&title_like=' + title}`)
        .then(response => response.data)
    } catch(error){
      dispatch(errorStatus())
    }
  }
)


const godsSlice = createSlice({
  name: 'gods',
  initialState,
  reducers: {
    toggleStatus: (state: Draft<IGodsInitialState>) => {
      state.status = !state.status
    },
    errorStatus: (state: Draft<IGodsInitialState>) => {
      state.error = true
    },
    setTotalProductsCount: (state: Draft<IGodsInitialState>, action: PayloadAction<number>) => {
      state.totalProductsCount = action.payload
    },
    setActivePage: (state: Draft<IGodsInitialState>, action: PayloadAction<number>) => {
      state.activePage = action.payload
    },
    setGods(state: Draft<IGodsInitialState>, action: PayloadAction<IGods[]>) {
      state.gods = action.payload
    },
    setFilterData: (state: Draft<IGodsInitialState>, action: PayloadAction<IFilterData>) => {
      state.filterData.title = action.payload.title
      state.filterData.minPrice = action.payload.minPrice
      state.filterData.maxPrice = action.payload.maxPrice
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getGods.pending, (state) => {
        godsSlice.caseReducers.toggleStatus(state)
      })
      .addCase(getGods.fulfilled, (state, action) => {
        godsSlice.caseReducers.toggleStatus(state)
        godsSlice.caseReducers.setGods(state, action)
      })
      .addCase(getGods.rejected, (state) => {
        godsSlice.caseReducers.toggleStatus(state)
      })
  }
})

export const {setActivePage, setTotalProductsCount, setFilterData, errorStatus} = godsSlice.actions
export default godsSlice.reducer
