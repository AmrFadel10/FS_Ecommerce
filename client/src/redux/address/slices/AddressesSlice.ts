import { createSlice } from "@reduxjs/toolkit";
import { getAddressesApiCall } from "../apiCalls/getAddressesApiCall";
import type { InitialStateAddressesType } from "@customeTypes/address";
import { deleteteAddressApiCall } from "../apiCalls/deleteAddressApiCall";
import { updateAddressApiCall } from "../apiCalls/updateAddressApiCall";
import { addAddressApiCall } from "../apiCalls/createAddressApiCall";
import { logout } from "@redux/auth/slices/AuthSlice";

const initialState: InitialStateAddressesType = {
  loading: "idle",
  addresses: [],
  error: null,
};

const addressesSlice = createSlice({
  name: "addresses",
  initialState,
  reducers: {
    cleanUpAddresses: (state) => {
      state.loading = "idle";
      state.error = null;
      state.addresses = [];
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getAddressesApiCall.pending, (state) => {
        state.loading = "pending";
        state.error = null;
      })
      .addCase(getAddressesApiCall.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.addresses = action.payload;
      })
      .addCase(getAddressesApiCall.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.payload as string;
      });
    //add address
    builder.addCase(addAddressApiCall.fulfilled, (state, action) => {
      state.addresses.unshift(action.payload);
    });

    //update address
    builder.addCase(updateAddressApiCall.fulfilled, (state, action) => {
      state.addresses = state.addresses.map((address) => {
        if (address._id === action.payload._id) {
          return action.payload;
        }
        return address;
      });
    });

    //delete address
    builder.addCase(deleteteAddressApiCall.fulfilled, (state, action) => {
      state.addresses = state.addresses.filter((address) => {
        return address._id !== action.payload._id;
      });
    });
    //When logout reset addresses
    builder.addCase(logout, (state) => {
      state.addresses = [];
      state.loading = "idle";
      state.error = null;
    });
  },
});

export const { cleanUpAddresses } = addressesSlice.actions;
export default addressesSlice.reducer;
