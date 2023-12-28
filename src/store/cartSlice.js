import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const carSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      console.log(action.payload);
      state.push(action.payload);
    },
    removeCart(state,action){
      console.log(action.payload);
      // state.splice(state.findIndex((item) => item.id === action.payload), 1);
      return state.filter((item)=> item.id !== action.payload)
    }
  },
});

export const { addToCart, removeCart } = carSlice.actions;
export default carSlice.reducer;
