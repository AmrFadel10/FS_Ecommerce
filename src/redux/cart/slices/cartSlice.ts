import type { TCartInitialState } from "@customeTypes/cart";
import { createSlice } from "@reduxjs/toolkit";
import { getProductsCartApiCall } from "../apicalls/cartApiCall";
import type { RootState } from "@redux/store";
import { productsCount } from "@redux/cart/selectors/cartSelector";

const initialState: TCartInitialState = {
  loading: "idle",
  error: null,
  items: localStorage.getItem("cart_items")
    ? JSON.parse(localStorage.getItem("cart_items") ?? "")
    : {},
  getProductFullInfo: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      if (state.items[action.payload.id]) {
        state.items[action.payload.id][action.payload.color] =
          action.payload.count;
      } else {
        state.items[action.payload.id] = {};
        state.items[action.payload.id][action.payload.color] =
          action.payload.count;
      }
      localStorage.setItem("cart_items", JSON.stringify(state.items));
    },

    deleteFromCart(state, action) {
      if (state.items[action.payload.id]) {
        if (state.items[action.payload.id][action.payload.color]) {
          delete state.items[action.payload.id][action.payload.color];

          if (Object.keys(state.items[action.payload.id]).length == 0) {
            delete state.items[action.payload.id];
          }
          localStorage.setItem("cart_items", JSON.stringify(state.items));
          if (Object.keys(state.items).length == 0) {
            state.items = {};
            localStorage.removeItem("cart_items");
          }
        }
      }
    },
    cleanUpCart: (state) => {
      state.getProductFullInfo = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProductsCartApiCall.pending, (state) => {
        state.error = null;
        state.loading = "pending";
      })
      .addCase(getProductsCartApiCall.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.getProductFullInfo = action.payload;
      })
      .addCase(getProductsCartApiCall.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.payload as string;
      });
  },
});

export const countProductCart = (state: RootState) => {
  const count = Object.values(state.cart.items)
    .flatMap(Object.values)
    .reduce((acc, cur) => {
      return acc + cur;
    }, 0);
  return count;
};
export { productsCount };
export const { addToCart, deleteFromCart, cleanUpCart } = cartSlice.actions;
export default cartSlice.reducer;
