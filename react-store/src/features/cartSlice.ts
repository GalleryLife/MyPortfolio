import {createSlice, Draft, PayloadAction} from '@reduxjs/toolkit';
import {ICartState} from '../types/cart-types';

const initialState: ICartState = {
  cart: []
}

interface IPayloadType {
  id: number
  title: string
}

const cartSLice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: {
      reducer: (state: Draft<any>, action: PayloadAction<IPayloadType>) => {
        state.cart = [...state.cart, {title: action.payload.title, id: action.payload.id}]
      },
      prepare: (title: string, id: number) => ({payload: {title, id}})
    }
  }
})

export const {addToCart} = cartSLice.actions
export default cartSLice.reducer
