import type { RootState } from "@redux/store";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { isAxiosError } from "axios";

export const getProductsCartApiCall = createAsyncThunk(
  "cart/getProductsCart",
  async (_, { rejectWithValue, getState, fulfillWithValue }) => {
    try {
      const ids = Object.keys((getState() as RootState).cart.items);
      if (!ids.length) {
        return fulfillWithValue([]);
      }

      const query = ids.map((id) => `id=${id}`).join("&");
      const cart = await axios.get(`/product/cart?${query}`);
      return cart.data;
    } catch (error) {
      if (isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message);
      } else {
        return rejectWithValue("Unexpected error");
      }
    }
  }
);
