// React & Redux
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { cleanUpProducts } from "@redux/products/slices/productsSlice";
import { cleanUpWishlist } from "@redux/wishlist/slices/wishlistSlice";

//API
import getproductsApiCall from "@redux/products/apiCalls/productsApiCall";
import { getWishlistProductsApiCall } from "@redux/wishlist/apicalls/getWishlistProductsApiCall";

//Icons
import { RxColumns } from "react-icons/rx";
import { IoMdMenu } from "react-icons/io";
import { BsList } from "react-icons/bs";
import { LuEqual } from "react-icons/lu";

//Components
import SideBarStore from "@components/ourStore/SidebarStore";
import ProductsList from "@components/home/products/ProductsList";

export default function OurStore() {
  const dispatch = useAppDispatch();
  const { products } = useAppSelector((state) => state.products);
  const { items } = useAppSelector((state) => state.wishlist);

  const ourStoreProducts = products.map((product) => {
    return { ...product, isLiked: items.includes(product._id) };
  });

  useEffect(() => {
    const productsApi = dispatch(getproductsApiCall({ limit: 8 }));
    const wishlistApi = dispatch(getWishlistProductsApiCall());

    return () => {
      productsApi.abort();
      wishlistApi.abort();
      dispatch(cleanUpProducts());
      dispatch(cleanUpWishlist());
    };
  }, [dispatch]);

  return (
    <section className="mb-16">
      <div className="container mx-auto mt-8 flex gap-8">
        <SideBarStore />
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
          <ProductsList products={ourStoreProducts} />
        </div>
      </div>
    </section>
  );
}
