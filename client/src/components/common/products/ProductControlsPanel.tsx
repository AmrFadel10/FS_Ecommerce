//React & Redux
import { memo, type ChangeEvent } from "react";
import { Link } from "react-router-dom";
//Icons
import { MdOutlineClear } from "react-icons/md";

const ProductControlsPanel = memo(
  ({
    handleSort,
    isFiltered,
  }: {
    handleSort?: (e: ChangeEvent<HTMLSelectElement>) => void;
    isFiltered?: boolean;
  }) => {
    return (
      <div
        className={`${
          isFiltered && "justify-between w-full"
        } flex items-center  ml-auto  rounded-lg  text-sm `}
      >
        {isFiltered && (
          <Link
            className="flex gap-x-1 items-center hover:text-slate-950 text-slate-600 hover:cursor-pointer text-xs font-medium"
            to={"/products?page=1"}
          >
            <MdOutlineClear size={22} />
            Clear filter
          </Link>
        )}
        <select
          name="sort"
          className=" md:p-2 p-1 bg-white rounded-lg focus:outline-none text-gray-400"
          id="SortBy"
          onChange={handleSort}
        >
          <option value="">Sort By</option>
          <option value="-sold">Best selling</option>
          <option value="title">Alphabetically, A-Z</option>
          <option value="-title">Alphabetically, Z-A</option>
          <option value="price">Price, low to high</option>
          <option value="-price">Price, high to low</option>
          <option value="createdAt">Date, old to new</option>
          <option value="-createdAt">Date, new to old</option>
        </select>
      </div>
    );
  }
);

export default ProductControlsPanel;
