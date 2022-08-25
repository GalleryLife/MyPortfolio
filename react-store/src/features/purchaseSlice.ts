import {createSlice} from '@reduxjs/toolkit';
import {IPurchaseModalState} from '../types/purchase-types';

const initialState: IPurchaseModalState = {
  isVisible: false,
  purchaseValues: {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    card: ''
  }
}

const purchaseSLice = createSlice({
  name: 'purchase',
  initialState,
  reducers: {
    toggleModal: (state) => {
      state.isVisible = !state.isVisible
    }
  }
})


export const {toggleModal} = purchaseSLice.actions
export default purchaseSLice.reducer
