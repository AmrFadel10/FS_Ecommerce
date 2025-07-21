//React & Redux
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { getWishlistProductsApiCall } from "@redux/wishlist/apicalls/getWishlistProductsApiCall";
import { cleanUpWishlist } from "@redux/wishlist/slices/wishlistSlice";

//Compontents
import Loading from "@feedback/loading/Loading";
import MetaTags from "@components/common/MetaTags";
import GridList from "@components/common/GridList";
import ProductCard from "@components/common/products/ProductCard";

export default function Wishlist() {
  const dispatch = useAppDispatch();
  const { productFullInfo, loading, error } = useAppSelector(
    (state) => state.wishlist
  );
  const { accessToken } = useAppSelector((state) => state.auth);
  useEffect(() => {
    if (!accessToken) return;
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
      <MetaTags title="Wishlist" />

      <section>
        <GridList
          Component={ProductCard}
          items={wishlistProducts}
          loading={loading}
          where="wishlist"
        />
      </section>
    </Loading>
  );
}
