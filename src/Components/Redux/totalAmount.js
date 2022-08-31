import { createSlice } from '@reduxjs/toolkit'

export const totalAmount = createSlice({
  name: 'amountOfPrice',
  initialState: {
    amountOfPrice: 0,
  },
  reducers: {
    incrementByAmount: (state, val) => {
      state.amountOfPrice += val.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { incrementByAmount } = totalAmount.actions

export default totalAmount.reducer