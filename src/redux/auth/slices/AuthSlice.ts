import type { TAuthIntialState } from "@customeTypes/auth";
import { createSlice } from "@reduxjs/toolkit";
import { SignupApiCall } from "../apicalls/SignupApiCall";
import { LoginApiCall } from "../apicalls/LoginApiCall";

const initialState: TAuthIntialState = {
  loading: "idle",
  error: null,
  accessToken: null,
  user: null,
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetAuth: (state) => {
      state.error = null;
      state.loading = "idle";
    },
  },
  extraReducers(builder) {
    //Signup
    builder
      .addCase(SignupApiCall.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(SignupApiCall.fulfilled, (state) => {
        state.loading = "succeeded";
      })
      .addCase(SignupApiCall.rejected, (state, action) => {
        state.error = action.payload as string;
        state.loading = "failed";
      });
    //Login
    builder
      .addCase(LoginApiCall.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(LoginApiCall.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.accessToken = action.payload.accessToken;
        state.user = action.payload.user;
      })
      .addCase(LoginApiCall.rejected, (state, action) => {
        state.error = action.payload as string;
        state.loading = "failed";
      });
  },
});

export const { resetAuth } = AuthSlice.actions;
export default AuthSlice.reducer;
