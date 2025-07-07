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
import { GrNext, GrPrevious } from "react-icons/gr";

const PopularProductCollections = ({
  where,
  limit,
}: {
  where?: "public" | "private";
  limit?: number;
}) => {
  const dispatch = useAppDispatch();
  const productRef = useRef<HTMLDivElement>(null);
  const { items } = useAppSelector((state) => state.wishlist);
  const { accessToken } = useAppSelector((state) => state.auth);
  const { categories } = useAppSelector((state) => state.categories);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [loading, setLoading] = useState<TLoading>("idle");
  const [error, setError] = useState<null | string>(null);
  const [scrolledToRight, setScrolledToRight] = useState(false);
  const [popularProducts, setpopularProducts] = useState<TProduct[]>([]);

  useEffect(() => {
    setLoading("pending");
    dispatch(
      getPopularProductsApiCall({
        limit: limit!,
        category: activeCategory,
        sort: "-sold",
      })
    )
      .unwrap()
      .then((data) => {
        setLoading("succeeded");
        setpopularProducts(data.products);
      })
      .catch((error) => {
        setLoading("failed");
        setError(error);
      });
  }, [dispatch, limit, activeCategory]);

  useEffect(() => {
    setActiveCategory(categories?.[0]?.title);
  }, [categories]);

  const homeProducts = popularProducts.map((product) => {
    return {
      ...product,
      isLiked: items.includes(product._id),
      isActivation: !!accessToken,
    };
  });
  return (
    <section className="relative ">
      <div className="flex justify-between items-center ">
        <div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Popular Collection:</h3>
            <p className="text-gray-400 text-sm">{`Do not miss the current offers until the end of ${new Date().toLocaleString(
              "en-us",
              { month: "long" }
            )}.`}</p>
          </div>
        </div>
        <ul className="flex gap-x-8">
          {categories.map((category) => {
            return (
              <li
                key={category._id}
                className={`${
                  activeCategory === category.title ? "active" : ""
                } popular-ctagory-liks uppercase  relative py-2 cursor-pointer `}
                onClick={() => {
                  setActiveCategory(category.title);
                  setScrolledToRight(false);
                }}
              >
                {category.title}
              </li>
            );
          })}
        </ul>
      </div>
      <Loading status={loading} error={error} size={150} type="homeProducts">
        {homeProducts.length > 0 ? (
          <div className="overflow-x-scroll hide-scrollbar" ref={productRef}>
            <ProductsList products={homeProducts} where={where} />
            {scrolledToRight ? (
              <div
                className="absolute -left-10 top-1/2 -translate-y-1/2 shadow-lg z-10 cursor-pointer hover:bg-gray-200 bg-white p-3 rounded-full"
                onClick={() => {
                  productRef.current?.scrollTo({
                    behavior: "smooth",
                    left: -1000,
                  });
                  setScrolledToRight(false);
                }}
              >
                <GrPrevious size={26} />
              </div>
            ) : (
              <div
                className="absolute -right-10 top-1/2 -translate-y-1/2 shadow-lg z-10 cursor-pointer hover:bg-gray-200 bg-white p-3 rounded-full"
                onClick={() => {
                  productRef.current?.scrollTo({
                    behavior: "smooth",
                    left: 1000,
                  });
                  setScrolledToRight(true);
                }}
              >
                <GrNext size={26} />
              </div>
            )}
          </div>
        ) : (
          <Empty size={150} />
        )}
      </Loading>
    </section>
  );
};

export default PopularProductCollections;
