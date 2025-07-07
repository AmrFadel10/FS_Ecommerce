//React
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { cleanUpCategories } from "@redux/categories/slices/categoriesSlice";
import { useAppDispatch, useAppSelector } from "@redux/hooks";

//APIS
import getCategoriesApiCall from "@redux/categories/apiCalls/categoriesApiCall";

//Components
import DropDownCategories from "./DropDownCategories";

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
    <nav className="bg-slate-900 text-slate-300 sticky left-0 top-0 z-[21] transition-all">
      <div className="container flex mx-auto px-2 lg:px-0">
        <DropDownCategories categories={categories} />
        <ul className="flex lg:gap-6 md:gap-3 gap-1 ml-4 sm:text-base text-[12px]">
          {navigationData.map((nav, index) => {
            return (
              <Link
                to={nav.path}
                key={index}
                className="pl-3 py-3  hover:text-orange-300 transition-all block"
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
                className="pl-3 py-3  hover:text-orange-300 transition-all capitalize"
              >
                {category.title}
              </Link>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
