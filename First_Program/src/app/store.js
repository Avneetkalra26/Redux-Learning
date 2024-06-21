import { configureStore } from "@reduxjs/toolkit";
import countSlice from "../features/countSlice";

const store = configureStore({
  reducer: {
    count: countSlice,
  },
});

export default store;
