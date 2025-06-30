import type { TWishlistSlice } from "@customeTypes/wishlist";
import { createSlice } from "@reduxjs/toolkit";
import { toggleWishlistApiCall } from "../apicalls/toggleWishlistApiCall";
import { getWishlistProductsApiCall } from "../apicalls/getWishlistProductsApiCall";

const initialState: TWishlistSlice = {
  items: localStorage.getItem("wishlist")
    ? JSON.parse(localStorage.getItem("wishlist") || "")
    : [],
  productFullInfo: [],
  loading: "idle",
  error: null,
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    cleanUpWishlist(state) {
      state.productFullInfo = [];
    },
  },
  extraReducers(builder) {
    builder
      // Add or remove product from wishlist
      .addCase(toggleWishlistApiCall.pending, (state) => {
        state.error = null;
      })
      .addCase(toggleWishlistApiCall.fulfilled, (state, action) => {
        if (action.payload.type == "added") {
          state.items.push(action.payload.id);
        } else if (action.payload.type == "removed") {
          state.items = state.items.filter((id) => id !== action.payload.id);

          state.productFullInfo = state.productFullInfo.filter(
            (prod) => prod._id !== action.payload.id
          );
        }
        localStorage.setItem("wishlist", JSON.stringify(state.items));
      })
      .addCase(toggleWishlistApiCall.rejected, (state, action) => {
        state.error = action.payload as string;
      })
      //Get products for wishlist
      .addCase(getWishlistProductsApiCall.pending, (state) => {
        state.loading = "pending";
        state.error = null;
      })
      .addCase(getWishlistProductsApiCall.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.productFullInfo = action.payload.wishlist;
      })
      .addCase(getWishlistProductsApiCall.rejected, (state, action) => {
        state.loading = "failed";
        console.log(action.payload);
        state.error = action.payload as string;
      });
  },
});

export const { cleanUpWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
