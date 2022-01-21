import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductProps } from "../model/products";

const initialState = [] as ProductProps[];

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    loadProducts: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { loadProducts } = productsSlice.actions;
export default productsSlice.reducer;
