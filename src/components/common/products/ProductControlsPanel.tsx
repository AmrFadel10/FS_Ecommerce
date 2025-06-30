import { memo } from "react";
import { BsList } from "react-icons/bs";
import { IoMdMenu } from "react-icons/io";
import { LuEqual } from "react-icons/lu";
import { RxColumns } from "react-icons/rx";

const ProductControlsPanel = memo(() => {
  return (
    <div className="flex justify-between bg-white py-2 px-4 rounded-xl text-sm shadow w-full">
      <div className="flex items-center gap-4">
        <p>Sort By:</p>
        <select
          name="sort_by"
          className="bg-gray-50 md:p-2 p-1 rounded-lg focus:outline-none text-gray-400"
          id="SortBy"
        >
          <option value="manual">Featured</option>
          <option value="best-selling">Best selling</option>
          <option value="title-ascending">Alphabetically, A-Z</option>
          <option value="title-descending">Alphabetically, Z-A</option>
          <option value="price-ascending">Price, low to high</option>
          <option value="price-descending">Price, high to low</option>
          <option value="created-ascending">Date, old to new</option>
          <option value="created-descending">Date, new to old</option>
        </select>
      </div>
      <div className="flex items-center gap-3">
        <div className="md:flex gap-2 items-center hidden">
          <div className=" text-xl p-2 rounded-md bg-gray-100 cursor-pointer font-bold">
            <RxColumns />
          </div>
          <div className="rotate-90 text-xl p-2 rounded-md bg-gray-100 cursor-pointer font-bold">
            <BsList />
          </div>
          <div className="rotate-90 text-xl p-2 rounded-md bg-gray-100 cursor-pointer font-bold">
            <LuEqual />
          </div>
          <div className=" text-xl p-2 rounded-md bg-gray-100 cursor-pointer font-bold">
            <IoMdMenu />
          </div>
        </div>
      </div>
    </div>
  );
});

export default ProductControlsPanel;
