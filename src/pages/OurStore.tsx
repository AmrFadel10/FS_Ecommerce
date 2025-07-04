// React & Redux
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { cleanUpProducts } from "@redux/products/slices/productsSlice";

//API
import getproductsApiCall from "@redux/products/apiCalls/productsApiCall";

//Components
import SideBarStore from "@components/ourStore/SidebarStore";
import ProductsList from "@components/home/products/ProductsList";
import ProductControlsPanel from "@components/common/products/ProductControlsPanel";
import Empty from "@components/common/Empty";
import Loading from "@feedback/loading/Loading";

export default function OurStore() {
  const dispatch = useAppDispatch();
  const {
    products,
    error,
    loading: productLoading,
  } = useAppSelector((state) => state.products);
  const { items, loading: wishLoading } = useAppSelector(
    (state) => state.wishlist
  );
  const { accessToken } = useAppSelector((state) => state.auth);

  const ourStoreProducts = products.map((product) => {
    return {
      ...product,
      isLiked: items.includes(product._id),
      isActivation: !!accessToken,
    };
  });

  useEffect(() => {
    const productsApi = dispatch(getproductsApiCall({ limit: 8 }));

    return () => {
      productsApi.abort();
      dispatch(cleanUpProducts());
    };
  }, [dispatch]);

  return (
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
      type="outStore"
    >
      <div className="container mx-auto mt-8 flex gap-8">
        <SideBarStore />
        <div className="flex-[4] rounded-lg w-full">
          <ProductControlsPanel />
          {ourStoreProducts.length ? (
            <ProductsList products={ourStoreProducts} />
          ) : (
            <Empty />
          )}
        </div>
      </div>
    </Loading>
  );
}
