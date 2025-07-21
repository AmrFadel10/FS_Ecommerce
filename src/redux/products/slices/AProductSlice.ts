import { createSlice } from "@reduxjs/toolkit";
import type { TAProductsInitialState, TProduct } from "@customeTypes/products";
import { getAProductApiCall } from "../apiCalls/AProductApiCall";
import { AddRatingForAProductApiCall } from "../apiCalls/AddRatingApiCall";

const initialState: TAProductsInitialState = {
  data: null,
  loading: "idle",
  error: null,
};

const aProductsSlice = createSlice({
  name: "aproduct",
  initialState,
  reducers: {
    cleanUpAProduct(state) {
      state.data = null;
      state.loading = "idle";
      state.error = null;
    },
  },
  extraReducers(builder) {
    builder.addCase(getAProductApiCall.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(getAProductApiCall.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.data = action.payload as TProduct;
    });
    builder.addCase(getAProductApiCall.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.payload as string;
    });
    builder.addCase(AddRatingForAProductApiCall.fulfilled, (state, action) => {
      state.data = action.payload as TProduct;
    });
  },
});
export const { cleanUpAProduct } = aProductsSlice.actions;
export default aProductsSlice.reducer;
