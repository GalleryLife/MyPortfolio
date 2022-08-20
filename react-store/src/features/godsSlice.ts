import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import axios from 'axios';
import {IGods, IGodsInitialState} from '../types/gods-types';

const initialState: IGodsInitialState = {
  gods: [],
  status: false,
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


const godsSlice = createSlice({
  name: 'gods',
  initialState,
  reducers: {
    setGods(state, action: PayloadAction<IGods[]>) {
      return {...state, gods: action.payload}
    },
    toggleStatus(state) {
      state.status = !state.status
    }
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
  }
})

export const {setGods} = godsSlice.actions
export default godsSlice.reducer
