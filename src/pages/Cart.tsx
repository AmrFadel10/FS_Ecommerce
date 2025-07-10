import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { getProductsCartApiCall } from "@redux/cart/apicalls/cartApiCall";
import { cleanUpCart } from "@redux/cart/slices/cartSlice";
//pages
import CartList from "@components/cart/CartList";
import TotalPrice from "@components/cart/TotalPrice";
import Empty from "@components/common/Empty";
import Loading from "@feedback/loading/Loading";
import {
  countSubtotalPrice,
  editProductToshowInCheckout,
} from "@redux/cart/selectors/cartSelector";

export default function Cart() {
  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector((state) => state.cart);
  const products = useAppSelector(editProductToshowInCheckout);
  const subtotalPrice = useAppSelector(countSubtotalPrice);

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
            <TotalPrice subtotalPrice={subtotalPrice} />
          </>
        ) : (
          <Empty />
        )}
      </section>
    </Loading>
  );
}
