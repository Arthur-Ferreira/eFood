import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type initialStateType = {
  cartList: ICart[];
  isAsideOpen: boolean
  isOpen: boolean
  modalData: Prato | null;
}

const initialState: initialStateType = {
  cartList: [],
  isAsideOpen: false,
  isOpen: false,
  modalData: null,
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
    open: (state, action: PayloadAction<Prato>) => {
      state.isOpen = true;
      state.modalData = action.payload;
    },
    close: (state) => {
      state.isOpen = false;
    },
    openAside: (state) => {
      state.isAsideOpen = true;
    },
    closeAside: (state) => {
      state.isAsideOpen = false;
    }

  }
});

export const {
  addItem,
  removeItem,
  open,
  close,
  openAside,
  closeAside
} = cartSlice.actions

export default cartSlice.reducer