import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment: (state, action) => {
      state.count = state.count + 1;
    },
    decrement: (state, action) => {
      state.count = state.count - 1;
    },
    incrementBy: (state, action) => {
      state.count = state.count + action.payload;
    },
  },
});

// export actions
export const { increment, decrement, incrementBy } = counterSlice.actions;
// exprt reducer
export default counterSlice.reducer;
