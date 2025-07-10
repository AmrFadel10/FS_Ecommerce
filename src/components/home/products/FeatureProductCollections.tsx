//React & Redux
import { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "@redux/hooks";

//APIS
import getproductsApiCall from "@redux/products/apiCalls/productsApiCall";
import { cleanUpProducts } from "@redux/products/slices/productsSlice";

//Components
import ProductsList from "./ProductsList";
import Empty from "@components/common/Empty";
import Loading from "@feedback/loading/Loading";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

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

  const { items } = useAppSelector((state) => state.wishlist);
  const { accessToken } = useAppSelector((state) => state.auth);
  const productRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const productsApi = dispatch(
      getproductsApiCall({ limit: limit!, page: 1 })
    );
    return () => {
      productsApi.abort();
      dispatch(cleanUpProducts());
    };
  }, [dispatch, limit]);

  const homeProducts = products.map((product) => {
    return {
      ...product,
      isLiked: items.includes(product._id),
      isActivation: !!accessToken,
    };
  });

  return (
    <section>
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold mb-8">
          {where === "private" ? "You may also like" : "Featured Collection:"}
        </h3>
        <div className="flex gap-x-2">
          <span
            className="hover:cursor-pointer hover:text-slate-950 text-slate-500"
            onClick={() =>
              productRef.current?.scrollBy({ behavior: "smooth", left: -800 })
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
      <Loading
        status={productLoading}
        error={error}
        size={150}
        type="homeProducts"
      >
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

export default FeatureProductCollections;
