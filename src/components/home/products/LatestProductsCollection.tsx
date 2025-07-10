//React & Redux
import { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "@redux/hooks";

//APIS
import { getPopularProductsApiCall } from "@redux/products/apiCalls/productsApiCall";

//Components
import ProductsList from "./ProductsList";
import Empty from "@components/common/Empty";
import Loading from "@feedback/loading/Loading";
import type { TLoading } from "@customeTypes/common";
import type { TProduct } from "@customeTypes/products";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const LatestPorductsCollection = ({
  where,
  limit,
}: {
  where?: "public" | "private";
  limit?: number;
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
        limit: limit!,
        sort: "createdAt",
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
  }, [dispatch, limit]);

  const homeProducts = latestPorducts.map((product) => {
    return {
      ...product,
      isLiked: items.includes(product._id),
      isActivation: !!accessToken,
    };
  });
  return (
    <section>
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold mb-4">Latest Collection:</h3>
        <div className="flex gap-x-2">
          <span
            className="hover:cursor-pointer hover:text-slate-950 text-slate-500"
            onClick={() =>
              productRef.current?.scrollBy({
                behavior: "smooth",
                left: -800,
              })
            }
          >
            <IoIosArrowBack size={23} />
          </span>
          <span
            className="hover:cursor-pointer hover:text-slate-950 text-slate-500"
            onClick={() =>
              productRef.current?.scrollBy({ behavior: "smooth", left: 800 })
            }
          >
            <IoIosArrowForward size={23} />
          </span>
        </div>
      </div>
      <Loading status={loading} error={error} size={150} type="homeProducts">
        {homeProducts.length > 0 ? (
          <div className="overflow-x-scroll hide-scrollbar" ref={productRef}>
            <ProductsList products={homeProducts} where={where} />
          </div>
        ) : (
          <Empty size={150} />
        )}
      </Loading>
    </section>
  );
};

export default LatestPorductsCollection;
