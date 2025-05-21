// import SideBarStore from "../components/SideBarStore";

//Icons
import { RxColumns } from "react-icons/rx";
import { IoMdMenu } from "react-icons/io";
import { BsList } from "react-icons/bs";
import { LuEqual } from "react-icons/lu";

//Components
import ProductCard from "@components/common/products/ProductCard";

export default function OurStore() {
  return (
    <section className="mb-16">
      <div className="container mx-auto mt-8 flex gap-8">
        {/* <SideBarStore
          searchParams={searchParams}
          setSearchParams={setSearchParams}
          products={products}
        /> */}
        <div className="flex-[4] rounded-lg ">
          <div className="flex justify-between bg-white p-4 rounded-xl">
            <div className="flex items-center gap-4">
              <p>Sort By:</p>
              <select
                name="sort_by"
                className="bg-gray-50 md:p-3 p-1 rounded-lg focus:outline-none text-gray-400"
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
          <div className={`grid md:grid-cols-4 gap-6 py-6 grid-cols-1`}>
            <ProductCard />
          </div>
        </div>
      </div>
    </section>
  );
}
