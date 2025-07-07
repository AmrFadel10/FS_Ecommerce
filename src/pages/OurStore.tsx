// React & Redux
import {
  useCallback,
  useEffect,
  useLayoutEffect,
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
import Pagination from "@components/ourStore/Pagination";

//APIS
import getproductsApiCall from "@redux/products/apiCalls/productsApiCall";
import getBrandsApiCall from "@redux/brands/apiCalls/BrandsApiCall";

export default function OurStore() {
  const dispatch = useAppDispatch();
  const ref = useRef<NodeJS.Timeout>(null);
  const [query, setQuery] = useSearchParams();
  const currentParams = useMemo(
    () => Object.fromEntries(query.entries()),
    [query]
  );
  const { sort, category, brand, gte, lte, sr, page } = currentParams;
  console.log(sort, category, brand, gte, lte, sr, page);
  const {
    products,
    error,
    loading: productLoading,
  } = useAppSelector((state) => state.products);
  const { items } = useAppSelector((state) => state.wishlist);

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
      dispatch(cleanUpProducts());
      dispatch(cleanUpBrands());
    };
  }, [dispatch]);

  useLayoutEffect(() => {
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
    };
  }, [dispatch, sort, category, brand, gte, lte, sr, page]);

  return (
    <div className=" mt-8 flex gap-8 min-h-[700px]">
      <div className="lg:w-60 lg:flex flex-col gap-4 hidden ">
        <Loading
          error={brandsError}
          type="sidebarProductPage"
          status={brandsLoading}
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
      <div className="flex-[5] flex flex-col">
        <ProductControlsPanel
          handleSort={handleQueryInInputs}
          isFiltered={!!(sort || category || brand || gte || lte || sr)}
        />
        <Loading status={productLoading} error={error} type="productsListPage">
          {ourStoreProducts.length && productLoading === "succeeded" ? (
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
