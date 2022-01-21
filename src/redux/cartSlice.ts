import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductProps } from "../model/products";

const initialState = [] as ProductProps[];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: {
      reducer: (state, action: PayloadAction<ProductProps>) => {
        state.push(action.payload);
      },
      prepare: (description: ProductProps) => ({
        payload: {} as ProductProps,
      }),
    },
    remove(state, action: PayloadAction<string>) {
      const index = state.findIndex(
        (product) => product.name === action.payload
      );
      state.splice(index, 1);
    },
  },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;