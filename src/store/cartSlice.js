import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const carSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.push(action.payload);
    },
  },
});

export const { addToCart } = carSlice.actions;
export default carSlice.reducer;
