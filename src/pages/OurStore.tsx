// React & Redux
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  type ChangeEvent,
} from "react";
import { useSearchParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { cleanUpBrands } from "@redux/brands/slices/BrandsSlice";
import { cleanUpProducts } from "@redux/products/slices/productsSlice";

//Components
import SideBarStore from "@components/ourStore/SidebarStore";
import ProductsList from "@components/home/products/ProductsList";
import ProductControlsPanel from "@components/common/products/ProductControlsPanel";
import Empty from "@components/common/Empty";
import Loading from "@feedback/loading/Loading";

//APIS
import getproductsApiCall from "@redux/products/apiCalls/productsApiCall";
import getBrandsApiCall from "@redux/brands/apiCalls/BrandsApiCall";
import Pagination from "@components/ourStore/Pagination";

export default function OurStore() {
  const dispatch = useAppDispatch();
  const ref = useRef<NodeJS.Timeout>(null);
  const [query, setQuery] = useSearchParams();
  const currentParams = useMemo(
    () => Object.fromEntries(query.entries()),
    [query]
  );
  const { sort, category, brand, gte, lte, sr, page } = currentParams;
  const {
    products,
    error,
    loading: productLoading,
  } = useAppSelector((state) => state.products);
  const { items, loading: wishLoading } = useAppSelector(
    (state) => state.wishlist
  );

  const { loading: categoryLoading } = useAppSelector(
    (state) => state.categories
  );

  const { loading: brandsLoading, error: brandsError } = useAppSelector(
    (state) => state.brands
  );

  const { accessToken } = useAppSelector((state) => state.auth);

  const ourStoreProducts = products.map((product) => {
    return {
      ...product,
      isLiked: items.includes(product._id),
      isActivation: !!accessToken,
    };
  });

  const handleQueryInInputs = useCallback(
    (e: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
      const { value, name } = e.target;
      if (!isNaN(+value) && +value < 0) return;
      if (ref.current) clearTimeout(ref.current);
      ref.current = setTimeout(() => {
        query.set(name, value);
        setQuery(query);
      }, 500);
    },
    [query, setQuery]
  );

  const handleQueryLinks = useCallback(
    (key: string, value: string) => {
      if (!value) {
        query.delete(key);
      } else {
        query.set(`${key}`, value);
      }
      setQuery(query);
    },
    [setQuery, query]
  );

  useEffect(() => {
    const brandsPromise = dispatch(getBrandsApiCall());

    return () => {
      brandsPromise.abort();
      dispatch(cleanUpBrands());
      if (ref.current) clearTimeout(ref.current);
    };
  }, [dispatch]);

  useEffect(() => {
    const productsPromise = dispatch(
      getproductsApiCall({
        limit: 8,
        sort,
        category,
        brand,
        gte,
        lte,
        sr,
        page,
      })
    );
    return () => {
      productsPromise.abort();
      dispatch(cleanUpProducts());
    };
  }, [dispatch, sort, category, brand, gte, lte, sr, page]);

  return (
    <div className=" mt-8 flex gap-8 min-h-[700px]">
      <div className="lg:w-60 lg:flex flex-col gap-4 hidden ">
        <Loading
          error={brandsError}
          type="sidebarProductPage"
          status={
            brandsLoading === "idle" || categoryLoading === "idle"
              ? "idle"
              : brandsLoading === "pending" || categoryLoading === "pending"
              ? "pending"
              : brandsLoading === "failed" || categoryLoading === "failed"
              ? "failed"
              : "succeeded"
          }
          size={50}
        >
          <SideBarStore
            handleLowerAndGreaterthan={handleQueryInInputs}
            handleQueryLinks={handleQueryLinks}
            gte={query.get("gte")}
            lte={query.get("lte")}
          />
        </Loading>
      </div>
      <div className="flex-[5] flex flex-col rounded-lg w-full">
        <ProductControlsPanel handleSort={handleQueryInInputs} />
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
          type="productsListPage"
        >
          {ourStoreProducts.length ? (
            <>
              <ProductsList products={ourStoreProducts} />
              <Pagination />
            </>
          ) : (
            <Empty />
          )}
        </Loading>
      </div>
    </div>
  );
}
