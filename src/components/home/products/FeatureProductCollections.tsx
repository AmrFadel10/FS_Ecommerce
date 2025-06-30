//React & Redux
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@redux/hooks";

//APIS
import { getWishlistProductsApiCall } from "@redux/wishlist/apicalls/getWishlistProductsApiCall";
import getproductsApiCall from "@redux/products/apiCalls/productsApiCall";
import { cleanUpProducts } from "@redux/products/slices/productsSlice";
import { cleanUpWishlist } from "@redux/wishlist/slices/wishlistSlice";

//Components
import ProductsList from "./ProductsList";
import Empty from "@components/common/Empty";
import Loading from "@feedback/loading/Loading";

const FeatureProductCollections = ({
  where,
  limit,
}: {
  where?: "public" | "private";
  limit?: number;
}) => {
  const {
    products,
    error,
    loading: productLoading,
  } = useAppSelector((state) => state.products);
  const { items, loading: wishLoading } = useAppSelector(
    (state) => state.wishlist
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    const productsApi = dispatch(getproductsApiCall({ limit: limit! }));
    const wishlistApi = dispatch(getWishlistProductsApiCall());
    return () => {
      productsApi.abort();
      wishlistApi.abort();
      dispatch(cleanUpProducts());
      dispatch(cleanUpWishlist());
    };
  }, [dispatch]);

  const homeProducts = products.map((product) => {
    return { ...product, isLiked: items.includes(product._id) };
  });

  return (
    <>
      <h3 className="text-2xl font-semibold mb-10">
        {where === "private" ? "You may also like" : "Featured Collection"}
      </h3>
      <Loading
        status={
          productLoading === "idle" || wishLoading === "idle"
            ? "idle"
            : productLoading === "pending" || wishLoading === "pending"
            ? "pending"
            : productLoading === "failed" || wishLoading === "failed"
            ? "failed"
            : "succeeded"
        }
        error={error}
        size={150}
        type="homeProducts"
      >
        {homeProducts.length > 0 ? (
          <ProductsList products={homeProducts} where={where} />
        ) : (
          <Empty size={150} />
        )}
      </Loading>
    </>
  );
};

export default FeatureProductCollections;
