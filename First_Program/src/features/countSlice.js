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
    incrementOdd: (state) => {
      if (state.countValue % 2 !== 0) {
        state.countValue += 1;
      }
    },
    increment: (state, action) => {
      state.countValue += action.payload;
    }
  }
});

export const incrementAsync = () => (dispatch) => {
    setTimeout(() => {
        dispatch(increment(1));
    }, 1000);
};

export const { increaseCounter, decreaseCounter, incrementOdd, increment } = countSlice.actions;

export default countSlice.reducer;
