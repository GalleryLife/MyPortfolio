import {createAsyncThunk, createSlice, Draft, PayloadAction} from '@reduxjs/toolkit';
import axios from 'axios';
import {IGods, IGodsInitialState} from '../types/gods-types';
import {CheckboxValueType} from 'antd/es/checkbox/Group';

const initialState: IGodsInitialState = {
  gods: [],
  category: [''],
  status: false,
  searchValue: ''
}

export const getGods = createAsyncThunk(
  'gods/getGods',
  async (_, {rejectWithValue, dispatch}: any) => {
    try {
      const response = await axios('https://fakestoreapi.com/products/')
      dispatch(setGods(response.data))
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

export const filterGods = createAsyncThunk(
  'gods/getGods',
  async ({rejectWithValue, dispatch}: any) => {
    try {
      const response = await axios('https://fakestoreapi.com/products/')
      dispatch(selectCategory(response.data))
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)


const godsSlice = createSlice({
  name: 'gods',
  initialState,
  reducers: {
    setGods(state, action: PayloadAction<IGods[]>) {
      return {...state, gods: action.payload}
    },
    toggleStatus(state) {
      state.status = !state.status
    },
    changeValue: (state, action: PayloadAction<any>) => {
      state.searchValue = action.payload
    },
    searchItem: (state, action: PayloadAction<any>) => {
      console.log(action.payload.value)
    },
    selectCategory: (state: Draft<any>, action: PayloadAction<CheckboxValueType[] | IGods[]>) => {
      const {payload} = action
      console.log(payload)
      // state.category = payload
      // console.log(state.category)
      const index = payload.findIndex(index => index)
      state.gods = state.gods.filter((item: IGods) => item.category === action.payload[index])
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
        godsSlice.caseReducers.selectCategory(state, action)
      })
  }
})

export const {setGods, changeValue, searchItem, selectCategory} = godsSlice.actions
export default godsSlice.reducer
