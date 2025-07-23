//React & Redux
import { useCallback, useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
//APIS
import { getPopularProductsApiCall } from "@redux/products/apiCalls/productsApiCall";
//Components
import type { TLoading } from "@customeTypes/common";
import type { TProduct } from "@customeTypes/products";

const usePopularProductCollection = (
  where: "public" | "private",
  limit?: number,
  category?: string
) => {
  const dispatch = useAppDispatch();
  const productRef = useRef<HTMLDivElement>(null);
  const { items } = useAppSelector((state) => state.wishlist);
  const { accessToken } = useAppSelector((state) => state.auth);
  const { categories } = useAppSelector((state) => state.categories);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [loading, setLoading] = useState<TLoading>("idle");
  const [error, setError] = useState<null | string>(null);
  const [popularProducts, setpopularProducts] = useState<TProduct[]>([]);

  const handleCategory = useCallback((title: string) => {
    setActiveCategory(title);
  }, []);

  const homeProducts = popularProducts.map((product) => {
    return {
      ...product,
      isLiked: items.includes(product._id),
      isActivation: !!accessToken,
    };
  });

  useEffect(() => {
    setLoading("pending");
    dispatch(
      getPopularProductsApiCall({
        limit: limit || 10,
        category: where === "private" ? category : activeCategory,
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
  }, [dispatch, limit, activeCategory, category, where]);

  useEffect(() => {
    if (where === "private") return;
    setActiveCategory(categories?.[0]?.title);
  }, [categories, where]);

  return {
    productRef,
    handleCategory,
    activeCategory,
    homeProducts,
    loading,
    error,
  };
};

export default usePopularProductCollection;
