import type { TCouponIntialState } from "@customeTypes/coupon";
import { createSlice } from "@reduxjs/toolkit";
import checkCouponIsAvailableApiCall from "../apiCalls/CouponApiCall";

const initialState: TCouponIntialState = {
  loading: "idle",
  error: null,
  couponDiscount: null,
};

const couponSlice = createSlice({
  name: "coupon",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkCouponIsAvailableApiCall.pending, (state) => {
        state.loading = "pending";
        state.error = null;
      })
      .addCase(checkCouponIsAvailableApiCall.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.couponDiscount = action.payload;
      })
      .addCase(checkCouponIsAvailableApiCall.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.payload as string;
      });
  },
});

export default couponSlice.reducer;
