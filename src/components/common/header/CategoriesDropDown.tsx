import type { TCategory } from "@customeTypes/categories";
import { useNavigate } from "react-router-dom";

//type props
type PropsType = {
  setShowDropDown: React.Dispatch<React.SetStateAction<boolean>>;
  showDropDown: boolean;
  categories: TCategory[];
};

const CategoriesDropDown = ({
  setShowDropDown,
  showDropDown,
  categories,
}: PropsType) => {
  const navigate = useNavigate();
  return (
    <ul
      className={`${
        showDropDown ? "max-h-[500px]" : "max-h-0"
      } absolute top-full left-0 lg:w-60 w-36 divide-y transition-all duration-500 divide-gray-200 bg-gray-50  rounded-b-lg overflow-hidden shadow-lg`}
    >
      {categories?.map((category, index) => {
        return (
          <div
            key={index}
            className="pl-3 py-3 text-sm block font-medium capitalize text-gray-600  hover:pl-[18px] transition-all hover:text-blue-500 cursor-pointer"
            onClick={() => {
              setShowDropDown(false);
              navigate(`/products?category=${category.title}`);
            }}
          >
            {category?.title}
          </div>
        );
      })}
    </ul>
  );
};

export default CategoriesDropDown;
