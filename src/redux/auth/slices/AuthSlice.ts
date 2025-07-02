import type { TAuthIntialState } from "@customeTypes/auth";
import { createSlice } from "@reduxjs/toolkit";
import { SignupApiCall } from "../apicalls/SignupApiCall";
import { LoginApiCall } from "../apicalls/LoginApiCall";
import { activationAccountApiCall } from "../apicalls/AtivationApiCall";

const initialState: TAuthIntialState = {
  loading: "idle",
  error: null,
  accessToken: localStorage.getItem("accessToken")
    ? JSON.parse(localStorage.getItem("accessToken")!)
    : null,
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user")!)
    : null,
  message: null,
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetAuth: (state) => {
      state.error = null;
      state.loading = "idle";
      state.message = null;
    },

    logout: (state) => {
      state.accessToken = null;
      state.user = null;
      localStorage.removeItem("accessToken");
      localStorage.removeItem("user");
    },
  },
  extraReducers(builder) {
    //Signup
    builder
      .addCase(SignupApiCall.pending, (state) => {
        state.loading = "pending";
        state.error = null;
      })
      .addCase(SignupApiCall.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.message = action.payload.message;
      })
      .addCase(SignupApiCall.rejected, (state, action) => {
        state.error = action.payload as string;
        state.loading = "failed";
      });

    //Login
    builder
      .addCase(LoginApiCall.pending, (state) => {
        state.loading = "pending";
        state.error = null;
      })
      .addCase(LoginApiCall.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.accessToken = action.payload.accessToken;
        state.user = action.payload.user;
        localStorage.setItem(
          "accessToken",
          JSON.stringify(action.payload.accessToken)
        );
        localStorage.setItem("user", JSON.stringify(action.payload.user));
      })
      .addCase(LoginApiCall.rejected, (state, action) => {
        state.error = action.payload as string;
        state.loading = "failed";
      });

    //Activation account
    builder
      .addCase(activationAccountApiCall.pending, (state) => {
        state.loading = "pending";
        state.error = null;
      })
      .addCase(activationAccountApiCall.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.accessToken = action.payload.accessToken;
        state.user = action.payload.user;
        localStorage.setItem(
          "accessToken",
          JSON.stringify(action.payload.accessToken)
        );
        localStorage.setItem("user", JSON.stringify(action.payload.user));
      })
      .addCase(activationAccountApiCall.rejected, (state, action) => {
        state.error = action.payload as string;
        state.loading = "failed";
      });
  },
});

export const { logout, resetAuth } = AuthSlice.actions;
export default AuthSlice.reducer;
