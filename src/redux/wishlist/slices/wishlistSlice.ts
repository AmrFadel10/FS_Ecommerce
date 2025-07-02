import type { TWishlistSlice } from "@customeTypes/wishlist";
import { createSlice } from "@reduxjs/toolkit";
import { toggleWishlistApiCall } from "../apicalls/toggleWishlistApiCall";
import { getWishlistProductsApiCall } from "../apicalls/getWishlistProductsApiCall";
import { logout } from "@redux/auth/slices/AuthSlice";
import type { TProduct } from "@customeTypes/products";

const initialState: TWishlistSlice = {
  items: [],
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
        console.log(state.items);
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
        state.items = action.payload.wishlist.map((prod: TProduct) => prod._id);
      })
      .addCase(getWishlistProductsApiCall.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.payload as string;
      });
    //reset wishlist with logout
    builder.addCase(logout, (state) => {
      state.productFullInfo = [];
      state.items = [];
    });
  },
});

export const { cleanUpWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
