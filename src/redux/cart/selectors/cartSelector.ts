import type { RootState } from "@redux/store";
import { createSelector } from "@reduxjs/toolkit";

export const productsCount = createSelector(
  (state: RootState) => state.cart.items,
  (item) => {
    const productsCounter = Object.values(item)
      .flatMap(Object.values)
      .reduce((acc, cur) => {
        return acc + cur;
      }, 0);
    return productsCounter;
  }
);
