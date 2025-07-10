//React & Redux
import { memo, type ChangeEvent } from "react";

//Icons
import { BsList } from "react-icons/bs";
import { IoMdMenu } from "react-icons/io";
import { LuEqual } from "react-icons/lu";
import { MdOutlineClear } from "react-icons/md";
import { RxColumns } from "react-icons/rx";
import { Link } from "react-router-dom";

const ProductControlsPanel = memo(
  ({
    handleSort,
    isFiltered,
  }: {
    handleSort?: (e: ChangeEvent<HTMLSelectElement>) => void;
    isFiltered?: boolean;
  }) => {
    return (
      <div className="flex justify-between bg-white py-2 px-4 rounded-xl text-sm shadow w-full">
        <div className="flex items-center gap-4">
          <p>Sort By:</p>
          <select
            name="sort"
            className="bg-blue-50 md:p-2 p-1 rounded-lg focus:outline-none text-gray-400"
            id="SortBy"
            onChange={handleSort}
          >
            <option value="">Featured</option>
            <option value="-sold">Best selling</option>
            <option value="title">Alphabetically, A-Z</option>
            <option value="-title">Alphabetically, Z-A</option>
            <option value="price">Price, low to high</option>
            <option value="-price">Price, high to low</option>
            <option value="createdAt">Date, old to new</option>
            <option value="-createdAt">Date, new to old</option>
          </select>
          {isFiltered && (
            <Link
              className="flex gap-x-1 items-center hover:text-slate-950 text-slate-600 hover:cursor-pointer text-sm font-medium"
              to={"/products?page=1"}
            >
              <MdOutlineClear size={22} />
              Clear filter
            </Link>
          )}
        </div>
        <div className="flex items-center gap-3">
          <div className="md:flex gap-2 items-center hidden">
            <div className=" text-xl p-2 rounded-md bg-blue-50 cursor-pointer font-bold">
              <RxColumns />
            </div>
            <div className="rotate-90 text-xl p-2 rounded-md bg-blue-50 cursor-pointer font-bold">
              <BsList />
            </div>
            <div className="rotate-90 text-xl p-2 rounded-md bg-blue-50 cursor-pointer font-bold">
              <LuEqual />
            </div>
            <div className=" text-xl p-2 rounded-md bg-blue-50 cursor-pointer font-bold">
              <IoMdMenu />
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default ProductControlsPanel;
