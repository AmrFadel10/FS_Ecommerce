//React & Redux
import { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
//APIS
import { getPopularProductsApiCall } from "@redux/products/apiCalls/productsApiCall";
//Components
import Loading from "@feedback/loading/Loading";
import type { TLoading } from "@customeTypes/common";
import type { TProduct } from "@customeTypes/products";
import Heading from "@components/common/Heading";
import AboveArrowsToRightAndLeft from "./AboveArrowsToRightAndLeft";
import GridList from "@components/common/GridList";
import ProductCard from "@components/common/products/ProductCard";

const ProductsCollection = ({
  limit,
  sort,
  type,
}: {
  where?: "public" | "private";
  limit?: number;
  sort: "-createdAt" | "-sold";
  type: "feature" | "latest";
}) => {
  const dispatch = useAppDispatch();
  const { items } = useAppSelector((state) => state.wishlist);
  const { accessToken } = useAppSelector((state) => state.auth);
  const [loading, setLoading] = useState<TLoading>("idle");
  const [error, setError] = useState<null | string>(null);
  const [latestPorducts, setLatestPorducts] = useState<TProduct[]>([]);
  const productRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setLoading("pending");
    dispatch(
      getPopularProductsApiCall({
        limit: limit || 10,
        sort,
      })
    )
      .unwrap()
      .then((data) => {
        setLoading("succeeded");
        setLatestPorducts(data.products);
      })
      .catch((error) => {
        setLoading("failed");
        setError(error);
      });
  }, [dispatch, limit, sort]);

  const homeProducts = latestPorducts.map((product) => {
    return {
      ...product,
      isLiked: items.includes(product._id),
      isActivation: !!accessToken,
    };
  });
  return (
    <section className="">
      <div className="flex justify-between items-center">
        <Heading
          title={
            type === "feature" ? "Feature Collection" : "Latest Collection"
          }
        />
        <AboveArrowsToRightAndLeft
          refItem={productRef}
          length={homeProducts.length}
        />
      </div>
      <Loading status={loading} error={error} size={150} type="homeProducts">
        <div className="overflow-x-scroll hide-scrollbar" ref={productRef}>
          <GridList
            items={homeProducts}
            where="public"
            Component={ProductCard}
            loading={loading}
          />
        </div>
      </Loading>
    </section>
  );
};

export default ProductsCollection;
