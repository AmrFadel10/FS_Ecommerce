import { createSlice } from "@reduxjs/toolkit";
import type { TAProductsInitialState, TProduct } from "@customeTypes/products";
import { getAProductApiCall } from "../apiCalls/AProduct.ApiCall";

const initialState: TAProductsInitialState = {
  aproduct: null,
  loading: "idle",
  error: null,
};

const aProductsSlice = createSlice({
  name: "aproduct",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getAProductApiCall.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(getAProductApiCall.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.aproduct = action.payload as TProduct;
    });
    builder.addCase(getAProductApiCall.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.payload as string;
    });
  },
});

export default aProductsSlice.reducer;
