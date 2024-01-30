import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

const cartList: ICart[] = [];

type initialStateType = {
  cartList: ICart[];
  isOpen: boolean
}

const initialState: initialStateType = {
  cartList,
  isOpen: false
};


export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: {
      reducer: (state, action: PayloadAction<ICart>) => {
        const product = state.cartList.find((item) => item.id === action.payload.id)

        if (!product) {
          state.cartList.push(action.payload);
        } else {
          alert('Product allready at cart')
        }
      },
      prepare: (id: number, nome: string, preco: number, foto: string) => ({
        payload: {
          id,
          nome,
          preco,
          foto
        } as ICart,
      }),
    },
    removeItem: (state, action: PayloadAction<number>) => {
      const cartId = action.payload;
      state.cartList = state.cartList.filter((cart) => cart.id !== cartId);
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
});

export const {
  addItem,
  removeItem,
  open,
  close,
} = cartSlice.actions

export default cartSlice.reducer