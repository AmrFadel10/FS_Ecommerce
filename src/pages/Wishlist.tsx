//React & Redux
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { getWishlistProductsApiCall } from "@redux/wishlist/apicalls/getWishlistProductsApiCall";
import { cleanUpWishlist } from "@redux/wishlist/slices/wishlistSlice";

//Compontents
import ProductsList from "@components/home/products/ProductsList";
import Empty from "@components/common/Empty";
import Loading from "@feedback/loading/Loading";

export default function Wishlist() {
  const dispatch = useAppDispatch();
  const { productFullInfo, loading, error } = useAppSelector(
    (state) => state.wishlist
  );
  const { accessToken } = useAppSelector((state) => state.auth);
  useEffect(() => {
    const promise = dispatch(getWishlistProductsApiCall());
    return () => {
      promise.abort();
      dispatch(cleanUpWishlist());
    };
  }, [dispatch]);

  const wishlistProducts = productFullInfo.map((product) => {
    return { ...product, isLiked: true, isActivation: !!accessToken };
  });

  return (
    <Loading error={error} status={loading} type="wishlist">
      <section>
        {wishlistProducts.length ? (
          <ProductsList products={wishlistProducts} where="public" />
        ) : (
          <Empty />
        )}
      </section>
    </Loading>
  );
}
