// React && Redux
import { memo, useState } from "react";

//Components
import CategoriesDropDown from "./CategoriesDropDown";

//Icons
import type { TCategory } from "@customeTypes/categories";
import { CiMenuFries } from "react-icons/ci";

const DropDownCategories = ({ categories }: { categories: TCategory[] }) => {
  const [showDropDown, setShowDropDown] = useState(false);

  return (
    <div className="relative select-none">
      <div
        className="flex gap-2 items-center cursor-pointer w-10 h-10  justify-center   bg-blue-50 rounded-md"
        onClick={() => setShowDropDown((pre) => !pre)}
      >
        <CiMenuFries size={23} color="#2563EB" />
      </div>
      <CategoriesDropDown
        setShowDropDown={setShowDropDown}
        showDropDown={showDropDown}
        categories={categories}
      />
    </div>
  );
};

export default memo(DropDownCategories);
