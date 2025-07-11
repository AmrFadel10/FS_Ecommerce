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
import Heading from "@components/common/Heading";

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
      <div className="flex justify-between md:items-center md:flex-row flex-col w-full">
        <div className="">
          <Heading title="Popular Collection" />
          <p className="hidden lg:block text-gray-400 text-sm">{`Do not miss the current offers until the end of ${new Date().toLocaleString(
            "en-us",
            { month: "long" }
          )}.`}</p>
        </div>
        {categories.length > 0 && (
          <ul className="flex xl:gap-x-8 md:gap-x-5 gap-x-2 w-fit  md:justify-end ">
            {categories.map((category) => {
              return (
                <li
                  key={category._id}
                  className={`${
                    activeCategory === category.title ? "active" : ""
                  } popular-category-liks lg:uppercase capitalize relative md:py-2 py-1 font-medium cursor-pointer md:text-sm text-xs`}
                  onClick={() => {
                    setActiveCategory(category.title);
                  }}
                >
                  {category.title}
                </li>
              );
            })}
          </ul>
        )}
      </div>
      <Loading status={loading} error={error} size={150} type="homeProducts">
        {homeProducts.length > 0 ? (
          <div className="overflow-x-scroll hide-scrollbar" ref={productRef}>
            <ProductsList products={homeProducts} where={where} />
            <div
              className="absolute hidden lg:block xl:-left-6 lg:left-2 top-1/2 -translate-y-1/2 shadow-lg z-10 cursor-pointer hover:bg-gray-200 bg-white p-3 rounded-full"
              onClick={() => {
                productRef.current?.scrollBy({
                  behavior: "smooth",
                  left: -800,
                });
              }}
            >
              <GrPrevious size={26} />
            </div>
            <div
              className="absolute hidden lg:block xl:-right-6 lg:right-2 top-1/2 -translate-y-1/2 shadow-lg z-10 cursor-pointer hover:bg-gray-200 bg-white p-3 rounded-full"
              onClick={() => {
                productRef.current?.scrollBy({
                  behavior: "smooth",
                  left: 800,
                });
              }}
            >
              <GrNext size={26} />
            </div>
          </div>
        ) : (
          <Empty size={150} />
        )}
      </Loading>
    </section>
  );
};

export default PopularProductCollections;
