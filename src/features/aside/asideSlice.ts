import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export enum AsideState {
  Cart,
  Form
}

type AsideStateSlice = {
  currentAsideState: AsideState;
}

const initialState: AsideStateSlice = {
  currentAsideState: AsideState.Cart,
};

const asideSlice = createSlice({
  name: 'aside',
  initialState,
  reducers: {
    setAsideState: (state, action: PayloadAction<AsideState>) => {
      state.currentAsideState = action.payload;
    },
  },
});

export const { setAsideState } = asideSlice.actions;
export default asideSlice.reducer;
