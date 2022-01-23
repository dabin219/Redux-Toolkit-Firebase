import { createSlice } from "@reduxjs/toolkit";
import { WritableDraft } from "immer/dist/internal";
import { ProductProps } from "../model/products";

const initialState = [] as ProductProps[];

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProducts: (state, action) => {
      const idArray: any[] = [];
      state.map((product) => idArray.push(product.id));
      const difference = action.payload.filter(
        (product: { id: WritableDraft<ProductProps> }) =>
          !idArray.includes(product.id)
      );
      state.push(...difference);
    },
  },
});

export const { addProducts } = productsSlice.actions;
export default productsSlice.reducer;
