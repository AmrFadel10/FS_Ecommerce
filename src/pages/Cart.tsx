import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { getProductsCartApiCall } from "@redux/cart/apicalls/cartApiCall";
import { cleanUpCart } from "@redux/cart/slices/cartSlice";
//pages
import CartList from "@components/cart/CartList";
import TotalPrice from "@components/cart/TotalPrice";
import Empty from "@components/common/Empty";
import Loading from "@feedback/loading/Loading";

export default function Cart() {
  const dispatch = useAppDispatch();
  const { getProductFullInfo, items, loading, error } = useAppSelector(
    (state) => state.cart
  );
  const products = getProductFullInfo
    .map((ele) => {
      if (items[ele._id]) {
        const keysArr = Object.keys(items[ele._id]);
        const valuesArr = Object.values(items[ele._id]);
        return keysArr.map((col, ind) => {
          return { ...ele, color: col, count: valuesArr[ind] };
        });
      }
      return [];
    })
    .flat();

  useEffect(() => {
    const promise = dispatch(getProductsCartApiCall());

    return () => {
      dispatch(cleanUpCart());
      promise.abort();
    };
  }, [dispatch]);

  return (
    <Loading status={loading} error={error}>
      <section className="flex flex-col w-full">
        {products.length ? (
          <>
            <CartList products={products} />
            <TotalPrice />
          </>
        ) : (
          <Empty />
        )}
      </section>
    </Loading>
  );
}
