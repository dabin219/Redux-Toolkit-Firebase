import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductProps } from "../model/products";

const initialState = [] as ProductProps[];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      const isExisting = state.find(
        (product) => product.id === action.payload.id
      );
      if (!isExisting) {
        state.push(action.payload);
      }
    },
    remove(state, action) {
      const index = state.findIndex(
        (product) => product.id === action.payload.id
      );
      state.splice(index, 1);
    },
  },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
