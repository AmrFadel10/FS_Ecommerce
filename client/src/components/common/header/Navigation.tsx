//React
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { cleanUpCategories } from "@redux/categories/slices/categoriesSlice";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
//APIS
import getCategoriesApiCall from "@redux/categories/apiCalls/categoriesApiCall";
//Data
import { navigationData } from "@utils/data";

const Navigation = () => {
  const dispatch = useAppDispatch();
  const { categories } = useAppSelector((state) => state.categories);

  useEffect(() => {
    if (categories.length) return;
    dispatch(getCategoriesApiCall());
    return () => {
      dispatch(cleanUpCategories());
    };
  }, [dispatch]);

  return (
    <nav className="bg-gray-50 transition-all border-y border-blue-200 py-3 px-4 overflow-x-auto hide-scrollbar w-full ">
      <ul className="container  mx-auto flex lg:gap-x-6 md:gap-x-3 gap-x-1  items-center justify-start w-full text-sm ">
        {navigationData.map((nav, index) => {
          return (
            <Link
              to={nav.path}
              key={index}
              className="px-5 py-2 font-medium hover:text-gray-50 text-gray-600 bg-blue-50 rounded-full hover:bg-blue-600 text-s transition-all  block"
            >
              {nav.title}
            </Link>
          );
        })}
        {categories.slice(0, 8).map((category, index) => {
          return (
            <Link
              to={`/products?category=${category.title}`}
              key={index}
              className="px-5 py-2 font-medium hover:text-gray-50 text-gray-600 bg-blue-50 rounded-full hover:bg-blue-600 md:text-sm text-xs transition-all capitalize block"
            >
              {category.title}
            </Link>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
