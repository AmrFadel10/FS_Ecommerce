import type { TOrderSIntialState } from "@customeTypes/orders";
import { createSlice } from "@reduxjs/toolkit";
import getAllOrdersApiCall from "../apiCalls/getOrdersApiCall";

const initialState: TOrderSIntialState = {
  loading: "idle",
  error: null,
  orders: [],
  count: null,
};

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    cleanUpOrders(state) {
      state.loading = "idle";
      state.error = null;
      state.orders = [];
      state.count = null;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getAllOrdersApiCall.pending, (state) => {
        state.loading = "pending";
        state.error = null;
      })
      .addCase(getAllOrdersApiCall.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.orders = action.payload.orders;
        state.count = action.payload.count;
      })
      .addCase(getAllOrdersApiCall.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.payload as string;
      });
  },
});

export const { cleanUpOrders } = orderSlice.actions;
export default orderSlice.reducer;
