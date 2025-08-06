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
  reducers: {
    cleanUpCategories(state) {
      state.loading = "idle";
      state.error = null;
      state.categories = [];
    },
  },
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
export const { cleanUpCategories } = categoriesSlice.actions;
export default categoriesSlice.reducer;
