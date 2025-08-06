import { createSlice } from "@reduxjs/toolkit";
import type { InitialStateAddressType } from "@customeTypes/address";
import { addAddressApiCall } from "../apiCalls/createAddressApiCall";
import { updateAddressApiCall } from "../apiCalls/updateAddressApiCall";
import { deleteteAddressApiCall } from "../apiCalls/deleteAddressApiCall";
import { logout } from "@redux/auth/slices/AuthSlice";

const initialState: InitialStateAddressType = {
  loading: "idle",
  address: null,
  error: null,
};

const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    cleanUpAddress: (state) => {
      state.address = null;
      state.loading = "idle";
      state.error = null;
    },
  },
  extraReducers(builder) {
    //add address
    builder
      .addCase(addAddressApiCall.pending, (state) => {
        state.loading = "pending";
        state.error = null;
      })
      .addCase(addAddressApiCall.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.address = action.payload;
      })
      .addCase(addAddressApiCall.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.payload as string;
      });

    //update address
    builder
      .addCase(updateAddressApiCall.pending, (state) => {
        state.loading = "pending";
        state.error = null;
      })
      .addCase(updateAddressApiCall.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.address = action.payload;
      })
      .addCase(updateAddressApiCall.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.payload as string;
      });

    //delete address
    builder.addCase(deleteteAddressApiCall.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.address = action.payload;
    });

    //When logout reset addresses
    builder.addCase(logout, (state) => {
      state.address = null;
      state.loading = "idle";
      state.error = null;
    });
  },
});
export const { cleanUpAddress } = addressSlice.actions;
export default addressSlice.reducer;
