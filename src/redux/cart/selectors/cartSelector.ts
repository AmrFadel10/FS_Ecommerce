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

export const countSubtotalPrice = createSelector(
  (state: RootState) => state.cart,
  ({ items, getProductFullInfo }) => {
    const ids = getProductFullInfo.map((item) => item._id);
    const result = Object.entries(items)
      .map(([key, value]) => {
        const ind = ids.indexOf(key);
        return Object.values(value).map((value2) => {
          if (ind !== -1) {
            return getProductFullInfo[ind].price * value2;
          } else {
            return [];
          }
        });
      })
      .flat()
      .filter((ele) => typeof ele === "number")
      .reduce((acc, cur) => {
        return acc + cur;
      }, 0);
    return result;
  }
);

export const editProductToshowInCheckout = createSelector(
  (state: RootState) => state.cart,
  ({ items, getProductFullInfo }) => {
    const ids = getProductFullInfo.map((item) => item._id);
    const result = Object.entries(items)
      .map(([key, value]) => {
        const ind = ids.indexOf(key);
        if (ind === -1) return [];
        return Object.entries(value).map(([color, quantity]) => {
          return {
            ...getProductFullInfo[ind],
            color,
            quantity,
          };
        });
      })
      .flat();
    return result;
  }
);
