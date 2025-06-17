import { createSlice } from "@reduxjs/toolkit";
import { getBlogsApiCall } from "../apiCalls/blogsApiCall";
import type { TBlogsIntialState } from "@customeTypes/blogs";

const initialState: TBlogsIntialState = {
  loading: "idle",
  blogs: [],
  error: null,
};

const AblogSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getBlogsApiCall.pending, (state) => {
        state.loading = "pending";
        state.error = null;
      })
      .addCase(getBlogsApiCall.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.blogs = action.payload;
      })
      .addCase(getBlogsApiCall.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.payload as string;
      });
  },
});

export default AblogSlice.reducer;
