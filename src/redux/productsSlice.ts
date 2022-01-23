import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { WritableDraft } from "immer/dist/internal";
import { ProductProps } from "../model/products";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

interface initialStateProps {
  loading: boolean;
  data: ProductProps[];
}

const initialState: initialStateProps = { loading: false, data: [] };

export const getProducts = createAsyncThunk("getProducts", async () => {
  const productsSnapshot = await getDocs(collection(db, "products"));
  const newProducts: Array<any> = [];
  productsSnapshot.docs.map((doc) => newProducts.push(doc.data()));
  return newProducts;
});

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProducts: (state, action) => {
      const difference = action.payload.filter(
        (product: { id: WritableDraft<ProductProps> }) =>
          !state.data.includes(product.id)
      );
      state.data.push(...difference);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.loading = false;
        const difference = action.payload.filter(
          (product: { id: WritableDraft<ProductProps> }) =>
            !state.data.includes(product.id)
        );
        state.data.push(...difference);
      })
      .addCase(getProducts.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { addProducts } = productsSlice.actions;
export default productsSlice.reducer;
