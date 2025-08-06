import { createSlice } from "@reduxjs/toolkit";
import getBrandsApiCall from "../apiCalls/BrandsApiCall";
import type { TBrandsIntialState } from "@customeTypes/brands";

const initialState: TBrandsIntialState = {
  loading: "idle",
  brands: [],
  error: null,
};

const blogsSlice = createSlice({
  name: "brands",
  initialState,
  reducers: {
    cleanUpBrands: (state) => {
      state.error = null;
      state.loading = "idle";
      state.brands = [];
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getBrandsApiCall.pending, (state) => {
        state.loading = "pending";
        state.error = null;
      })
      .addCase(getBrandsApiCall.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.brands = action.payload;
      })
      .addCase(getBrandsApiCall.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.payload as string;
      });
  },
});

export const { cleanUpBrands } = blogsSlice.actions;
export default blogsSlice.reducer;
