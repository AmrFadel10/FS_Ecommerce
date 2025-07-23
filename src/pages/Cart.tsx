import { useAppSelector } from "@redux/hooks";
import { getProductsCartApiCall } from "@redux/cart/apicalls/cartApiCall";
import { cleanUpCart } from "@redux/cart/slices/cartSlice";
//Selectors
import {
  countSubtotalPrice,
  editProductToshowInCheckout,
} from "@redux/cart/selectors/cartSelector";
//Hooks
import useLoadDataWithCleanup from "@hooks/useLoadDataWithCleanup";
//Components
import CartList from "@components/cart/CartList";
import TotalPrice from "@components/cart/TotalPrice";
import Empty from "@components/common/Empty";
import Loading from "@feedback/loading/Loading";
import MetaTags from "@components/common/MetaTags";

export default function Cart() {
  const products = useAppSelector(editProductToshowInCheckout);
  const subtotalPrice = useAppSelector(countSubtotalPrice);

  const { loading, error } = useLoadDataWithCleanup({
    getDataAction: getProductsCartApiCall,
    cleanUpAction: cleanUpCart,
    stateName: "cart",
  });
  ("cart");
  return (
    <Loading status={loading} error={error} type="commonLoading">
      <MetaTags title="Cart" />
      <section className="flex flex-col">
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
