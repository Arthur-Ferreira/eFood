import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type initialStateType = {
  cartList: ICart[];
}

const cartList: ICart[] = [];


const initialState: initialStateType = {
  cartList,
};


export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: {
      reducer: (state, action: PayloadAction<ICart>) => {
        state.cartList.push(action.payload);
      },
      prepare: (id: number, nome: string, preco: number) => ({
        payload: {
          id,
          nome,
          preco
        } as ICart,
      }),
    },
    removeItem: (state, action: PayloadAction<number>) => {
      const cartId = action.payload;
      state.cartList = state.cartList.filter((cart) => cart.id !== cartId);
    }
  }
});

export const {
  addItem,
  removeItem,
} = cartSlice.actions

export default cartSlice.reducer