import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const carSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      console.log(action.payload);
      state.push({ ...action.payload, count: 1 });
    },
    removeCart(state, action) {
      console.log(action.payload);
      // state.splice(state.findIndex((item) => item.id === action.payload), 1);
      return state.filter((item) => item.id !== action.payload);
    },
    plusToCart(state, action) {
      state.find((product) => product.id === action.payload).count += 1;
      return state;
    },
    minesToCart(state, action) {
    const item= state.find((product) => product.id === action.payload);
      if(item.count>1){
        item.count -= 1
      } 
    },
  },
});

export const { addToCart, removeCart, plusToCart, minesToCart } =
  carSlice.actions;
export default carSlice.reducer;
