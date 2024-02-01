import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface MultiStepFormState {
  step: number;
  formData: any;
}

const initialState: MultiStepFormState = {
  step: 1,
  formData: {},
};

const multiStepFormSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setStep(state, action: PayloadAction<number>) {
      state.step = action.payload;
    },
    setFormData(state, action: PayloadAction<any>) {
      state.formData = action.payload;
    },
  },
});

export const { setStep, setFormData } = multiStepFormSlice.actions;
export default multiStepFormSlice.reducer;

