import {createSlice, Draft, PayloadAction} from '@reduxjs/toolkit';
import {ICartIncrementCount, ICartDecrementCount, ICartPayload, ICartState} from '../types/cart-types';

const initialState: ICartState = {
  cart: []
}

const cartSLice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: {
      reducer: (state: Draft<any>, action: PayloadAction<ICartPayload>) => {
        const index = state.cart.findIndex((item: any) => item.id === action.payload.id)
        if (index === -1) {
          state.cart = [...state.cart, {
            id: action.payload.id,
            title: action.payload.title,
            img: action.payload.img,
            price: action.payload.price,
            count: 1
          }]
        } else {
          state.cart[index].count++
        }
      },
      prepare: (id: number, title: string, img: string, price: number) => ({payload: {title, id, img, price}})
    },
    removeFromCart: (state, action: PayloadAction<any>) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload)
    },
    incrementCount: {
      reducer: (state: Draft<any>, action: PayloadAction<ICartIncrementCount>) => {
        const id = state.cart.findIndex((item: any) => item.id === action.payload.id)
        state.cart[id].count++
      },
      prepare: (id: number, count: number) => ({payload: {id, count}})

    },
    decrementCount: {
      reducer: (state: Draft<any>, action: PayloadAction<ICartDecrementCount>) => {
        const id = state.cart.findIndex((item: any) => item.id === action.payload.id)
        state.cart[id].count = action.payload.count - 1
      },
      prepare: (id: number, count: number) => ({payload: {id, count}})

    }
  }
})


export const {addToCart, removeFromCart, incrementCount, decrementCount} = cartSLice.actions
export default cartSLice.reducer
