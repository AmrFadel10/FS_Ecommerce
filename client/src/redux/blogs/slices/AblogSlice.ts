import { createSlice } from "@reduxjs/toolkit";
import { getABlog } from "../apiCalls/AblogApiCall";
import type { TAblogStateType } from "@customeTypes/blogs";

const initialState: TAblogStateType = {
  loading: "idle",
  data: null,
  error: null,
};

const AblogSlice = createSlice({
  name: "ablog",
  initialState,
  reducers: {
    cleanUpBlog: (state) => {
      state.data = null;
      state.loading = "idle";
      state.error = null;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getABlog.pending, (state) => {
        state.loading = "pending";
        state.error = null;
      })
      .addCase(getABlog.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.data = action.payload;
      })
      .addCase(getABlog.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.payload as string;
      });
  },
});
export const { cleanUpBlog } = AblogSlice.actions;
export default AblogSlice.reducer;
