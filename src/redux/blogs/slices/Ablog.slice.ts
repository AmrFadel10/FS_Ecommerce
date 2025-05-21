import { createSlice } from "@reduxjs/toolkit";
import { getABlog } from "../apiCalls/Ablog.ApiCall";
import type { TAblogStateType } from "@customeTypes/blogs";

const initialState: TAblogStateType = {
  loading: "idle",
  ablog: null,
  error: null,
};

const AblogSlice = createSlice({
  name: "ablog",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getABlog.pending, (state) => {
        state.loading = "pending";
        state.error = null;
      })
      .addCase(getABlog.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.ablog = action.payload;
      })
      .addCase(getABlog.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.payload as string;
      });
  },
});

export default AblogSlice.reducer;
