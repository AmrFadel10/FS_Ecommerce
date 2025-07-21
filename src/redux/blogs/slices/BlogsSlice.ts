import { createSlice } from "@reduxjs/toolkit";
import { getBlogsApiCall } from "../apiCalls/blogsApiCall";
import type { TBlogsIntialState } from "@customeTypes/blogs";

const initialState: TBlogsIntialState = {
  loading: "idle",
  data: [],
  error: null,
};

const blogsSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    cleanUpBlogs: (state) => {
      state.loading = "idle";
      state.error = null;
      state.data = [];
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getBlogsApiCall.pending, (state) => {
        state.loading = "pending";
        state.error = null;
      })
      .addCase(getBlogsApiCall.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.data = action.payload;
      })
      .addCase(getBlogsApiCall.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.payload as string;
      });
  },
});

export const { cleanUpBlogs } = blogsSlice.actions;
export default blogsSlice.reducer;
