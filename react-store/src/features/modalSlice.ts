import {createSlice, Draft} from '@reduxjs/toolkit';
import {IModalState} from '../types/purchase-types';

const initialState: IModalState = {
  isVisible: false,
}

const modalSlice = createSlice({
  name: 'purchase',
  initialState,
  reducers: {
    toggleModal: (state: Draft<IModalState>) => {
      state.isVisible = !state.isVisible
    }
  }
})


export const {toggleModal} = modalSlice.actions
export default modalSlice.reducer
