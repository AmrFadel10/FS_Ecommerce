import { createSlice } from "@reduxjs/toolkit";
import type { TProductsInitialState } from "@customeTypes/products";
import getproductsApiCall from "../apiCalls/productsApiCall";

const initialState: TProductsInitialState = {
  loading: "idle",
  error: null,
  products: [],
  count: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    cleanUpProducts: (state) => {
      state.products = [];
      state.loading = "idle";
      state.error = null;
    },
  },
  extraReducers(builder) {
    //For store page and fetaure products in home page
    builder
      .addCase(getproductsApiCall.pending, (state) => {
        state.loading = "pending";
        state.error = null;
      })
      .addCase(getproductsApiCall.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.products = action.payload.products;
        state.count = action.payload.count;
      })
      .addCase(getproductsApiCall.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.payload as string;
      });
  },
});
export const { cleanUpProducts } = productsSlice.actions;
export default productsSlice.reducer;
