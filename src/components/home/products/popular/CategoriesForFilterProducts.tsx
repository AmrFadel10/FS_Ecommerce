import { useAppSelector } from "@redux/hooks";
import { memo } from "react";

const CategoriesForFilterProducts = memo(
  ({
    handleCategory,
    activeCategory,
  }: {
    handleCategory: (title: string) => void;
    activeCategory: string | null;
  }) => {
    const { categories } = useAppSelector((state) => state.categories);

    return (
      <>
        {categories.length > 0 && (
          <ul className="flex xl:gap-x-8 md:gap-x-5 gap-x-2 w-fit  md:justify-end ">
            {categories.map((category) => {
              return (
                <li
                  key={category._id}
                  className={`${
                    activeCategory === category.title ? "active" : ""
                  } popular-category-liks lg:uppercase capitalize relative md:py-2 py-1 font-medium cursor-pointer md:text-sm text-xs`}
                  onClick={() => handleCategory(category.title)}
                >
                  {category.title}
                </li>
              );
            })}
          </ul>
        )}
      </>
    );
  }
);

export default CategoriesForFilterProducts;
