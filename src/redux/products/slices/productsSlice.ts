import { createSlice } from "@reduxjs/toolkit";
import type { TProductsInitialState } from "@customeTypes/products";
import getproductsApiCall from "../apiCalls/productsApiCall";

const initialState: TProductsInitialState = {
  loading: "idle",
  error: null,
  products: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getproductsApiCall.pending, (state) => {
        state.loading = "pending";
        state.error = null;
      })
      .addCase(getproductsApiCall.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.products = action.payload;
      })
      .addCase(getproductsApiCall.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.payload as string;
      });
  },
});

export default productsSlice.reducer;
