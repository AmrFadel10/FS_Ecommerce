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
//APIS
import getproductsApiCall from "@redux/products/apiCalls/productsApiCall";
import getBrandsApiCall from "@redux/brands/apiCalls/BrandsApiCall";

const useOurStore = () => {
  const dispatch = useAppDispatch();
  const ref = useRef<NodeJS.Timeout>(null);
  const [query, setQuery] = useSearchParams();
  const currentParams = useMemo(
    () => Object.fromEntries(query.entries()),
    [query]
  );
  const { sort, category, brand, gte, lte, sr, page } = currentParams;
  const {
    data,
    error,
    loading: productLoading,
  } = useAppSelector((state) => state.products);
  const { items } = useAppSelector((state) => state.wishlist);

  const { loading: brandsLoading, error: brandsError } = useAppSelector(
    (state) => state.brands
  );

  const { accessToken } = useAppSelector((state) => state.auth);

  const ourStoreProducts = data.map((product) => {
    return {
      ...product,
      isLiked: items.includes(product._id),
      isActivation: !!accessToken,
    };
  });

  const handleQueryInInputs = useCallback(
    (e: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
      const { value, name } = e.target;
      if (isNaN(value) || +value < 0) return;
      if (ref.current) clearTimeout(ref.current);
      ref.current = setTimeout(() => {
        query.set(name, value);
        setQuery(query);
      }, 500);
    },
    [query, setQuery]
  );

  const handleQueryInSort = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      const { name, value } = e.target;
      query.set(name, value);
      setQuery(query);
    },
    [setQuery, query]
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
    };
  }, [dispatch, sort, category, brand, gte, lte, sr, page]);

  return {
    handleQueryInInputs,
    query,
    sort,
    category,
    brand,
    gte,
    lte,
    sr,
    productLoading,
    error,
    brandsError,
    brandsLoading,
    handleQueryLinks,
    data,
    ourStoreProducts,
    handleQueryInSort,
  };
};

export default useOurStore;
