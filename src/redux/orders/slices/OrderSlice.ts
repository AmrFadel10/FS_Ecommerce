import type { TOrderIntialState } from "@customeTypes/orders";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import createOrderApiCall from "../apiCalls/addOrderApiCall";

const initialState: TOrderIntialState = {
  loading: "idle",
  totalPrice: 0,
  shipping: 100,
  error: null,
  order: null,
};
type TPayload = {
  totalPrice: number;
};
const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    calculateTotslPrice(state, action: PayloadAction<TPayload>) {
      state.totalPrice = action.payload.totalPrice;
    },
    cleanUpOrder(state) {
      state.loading = "idle";
      state.error = null;
      state.order = null;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(createOrderApiCall.pending, (state) => {
        state.loading = "pending";
        state.error = null;
      })
      .addCase(createOrderApiCall.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.order = action.payload;
        localStorage.removeItem("cart_items");
      })
      .addCase(createOrderApiCall.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.payload as string;
      });
  },
});
export const { cleanUpOrder, calculateTotslPrice } = orderSlice.actions;
export default orderSlice.reducer;
