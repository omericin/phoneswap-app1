import { createSlice } from '@reduxjs/toolkit'

export const totalAmount = createSlice({
  name: 'amountOfPrice',
  initialState: {
    amountOfPrice: 0,
    phoneReducer1: 0,
    phoneReducer2: 0,
    phoneReducer3: 0,
    phoneReducer4: 0,
    phoneInfo1: null,
    phoneInfo2: null,
    phoneInfo3: null,
    phoneInfo4: null,
    isLoggedIn: false,
  },
  reducers: {
    incrementByAmount1: (state, val) => {
      state.phoneReducer1 = val.payload;
    },
    incrementByAmount2: (state, val) => {
      state.phoneReducer2 = val.payload;
    },
    incrementByAmount3: (state, val) => {
      state.phoneReducer3 = val.payload;
    },
    incrementByAmount4: (state, val) => {
      state.phoneReducer4 = val.payload;
    },
    setPhoneInfo1: (state, val) => {
      state.phoneInfo1 = val.payload;
    },
    setPhoneInfo2: (state, val) => {
      state.phoneInfo2 = val.payload;
    },
    setPhoneInfo3: (state, val) => {
      state.phoneInfo3 = val.payload;
    },
    setPhoneInfo4: (state, val) => {
      state.phoneInfo4 = val.payload;
    },
    setLogin: (state) => {
      state.isLoggedIn = true;
    },
    setLogout: (state) => {
      state.isLoggedIn = false;
    },
  },
})

// Action creators are generated for each case reducer function
export const { incrementByAmount1,
  incrementByAmount2,
  incrementByAmount3,
  incrementByAmount4,
  setPhoneInfo1,
  setPhoneInfo2,
  setPhoneInfo3,
  setPhoneInfo4,
  setLogin,
  setLogout,
} = totalAmount.actions

export default totalAmount.reducer