// React && Redux
import { memo, useState } from "react";

//Components
import CategoriesDropDown from "./CategoriesDropDown";

//Icons
import { MdKeyboardArrowDown } from "react-icons/md";
import { TfiMenu } from "react-icons/tfi";
import type { TCategory } from "@customeTypes/categories";

const DropDownCategories = ({ categories }: { categories: TCategory[] }) => {
  const [showDropDown, setShowDropDown] = useState(false);

  return (
    <div className="relative select-none">
      <div
        className="flex gap-2 items-center cursor-pointer lg:w-60 w-36 hover:text-slate-50 py-3 md:pl-2"
        onClick={() => setShowDropDown((pre) => !pre)}
      >
        <TfiMenu className="text-xl" />
        <span className="font-bold -mb-1 lg:text-base w-32">Categories</span>
        <span className="absolute top-[50%] right-0 -translate-y-1/2 text-xl border-r w-8 h-6 border-slate-400 flex justify-start items-center">
          <MdKeyboardArrowDown />
        </span>
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
