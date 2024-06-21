import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
  name: "count",
  initialState: {
    countValue: 0,
  },
  reducers: {
    increaseCounter: (state) => {
      state.countValue += 1;
    },
    decreaseCounter: (state) => {
      state.countValue -= 1;
    },
    incrementOdd: (state, action) => {
      if (state.countValue % 2 !== 0) {
        state.countValue += action.payload;
      }
    },
    increment: (state, action) => {
      state.countValue += action.payload;
    },
    addAmount: (state, action) => {
      state.countValue += action.payload;
    },
  },
});

export const incrementAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(increment(amount));
  }, 1000); // Simulating a delay of 1 second
};

export const {
  increaseCounter,
  decreaseCounter,
  incrementOdd,
  increment,
  addAmount,
} = countSlice.actions;

export default countSlice.reducer;
