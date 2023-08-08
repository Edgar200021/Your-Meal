import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IProduct } from '../../models/product/product'

export type BasketProduct = Required<
  Omit<IProduct, 'description' | 'ingredients' | 'calory' | 'category'>
> & {
  count: number
}

type ToggleCount = {
  id: IProduct['id']
  action: 'increment' | 'decrement'
}

interface InitialState {
  products: BasketProduct[]
  count: number
  totalPrice: number
}

const initialState: InitialState = {
  products: [],
  count: 0,
  totalPrice: 0,
}

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<BasketProduct>) {
      const product: BasketProduct | undefined = state.products.find(
        item => item.id === action.payload.id
      )

      if (product) {
        product.count += action.payload.count
        state.count += action.payload.count
        state.totalPrice += product.price * action.payload.count
        return
      }

      state.products.push(action.payload)
      state.totalPrice += action.payload.price * action.payload.count
      state.count += action.payload.count
    },

    removeProduct(state, action: PayloadAction<BasketProduct['id']>) {
      const product: BasketProduct | undefined = state.products.find(
        item => item.id === action.payload
      )

      if (!product) return
      state.products = state.products.filter(item => item.id !== action.payload)
      state.totalPrice -= product.price * product.count
      state.count -= product.count
    },

    toggleCount(state, action: PayloadAction<ToggleCount>) {
      const product: BasketProduct | undefined = state.products.find(
        item => item.id === action.payload.id
      )

      if (!product) return

      switch (action.payload.action) {
        case 'increment':
          product.count++
          state.count++
          state.totalPrice += product.price
          return
        case 'decrement':
          if (product.count === 1) {
            state.products = state.products.filter(
              item => item.id !== product.id
            )
            state.count--
            state.totalPrice -= product.price
            return
          }
          product.count--
          state.count--
          state.totalPrice -= product.price
      }
    },
  },
})

export default basketSlice.reducer

export const { addProduct, removeProduct, toggleCount } = basketSlice.actions
