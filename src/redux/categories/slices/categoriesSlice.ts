import { createSlice } from "@reduxjs/toolkit";
import getCategoriesApiCall from "../apiCalls/categoriesApiCall";
import type { TCategoriesInitialState } from "@customeTypes/categories";

const initialState: TCategoriesInitialState = {
  loading: "idle",
  error: null,
  categories: [],
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getCategoriesApiCall.pending, (state) => {
        state.loading = "pending";
        state.error = null;
      })
      .addCase(getCategoriesApiCall.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.categories = action.payload;
      })
      .addCase(getCategoriesApiCall.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.payload as string;
      });
  },
});

export default categoriesSlice.reducer;
