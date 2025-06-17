import { Link } from "react-router-dom";

//Icons
import { FaCheck } from "react-icons/fa6";
import { AiFillHeart, AiOutlineEye, AiOutlineHeart } from "react-icons/ai";
import type { TProduct } from "@customeTypes/products";
import { useState } from "react";
import { IoIosShuffle } from "react-icons/io";

const ProductCard = ({ product }: { product: TProduct }) => {
  const [heart, setHeart] = useState(false);
  const [inCompare, setinCompare] = useState(false);
  return (
    <div
      className={`rounded-2xl overflow-hidden group shadow-lg bg-white py-2`}
    >
      <div className=" relative overflow-hidden">
        <div className="overflow-auto w-full md:h-64 h-36 inline-block ">
          <img
            src={product.images[0].url}
            alt="music"
            className=" w-full h-full object-contain "
          />
        </div>
        <div className=" transition-all duration-500  rounded-full p-[4px] absolute top-[2%] right-3 hover:bg-orange-300">
          {heart ? (
            <AiFillHeart
              className="transition-all  rounded-full "
              size={20}
              color="#000"
              title="Remove from wishlist"
            />
          ) : (
            <AiOutlineHeart
              className="transition-all  rounded-full "
              size={20}
              color="#333"
              title="Add to wishlist"
            />
          )}
        </div>

        <div className="absolute top-[14%] -right-6 flex gap-2 flex-col group-hover:right-3 transition-all  text-lg">
          <div className=" transition-all  rounded-full p-[4px] hover:bg-orange-300 duration-500">
            {!inCompare ? (
              <FaCheck size={18} color="#333" title="Compare between" />
            ) : (
              <IoIosShuffle size={20} color="#333" title="Compare between" />
            )}
          </div>
          <div className=" transition-all  rounded-full p-1 flex justify-center items-center hover:bg-orange-300 duration-300">
            <AiOutlineEye
              // onClick={() => navigate("/product" + product?._id.toString())}
              size={20}
              color="#333"
              title="Quick view"
            />
          </div>
        </div>
      </div>
      <div className="px-4 py-4">
        <h3 className="hover:text-orange-800 font-medium text-xs md:text-sm capitalize text-orange-700">
          {product.brand}
        </h3>
        <Link
          to={`/product/${product._id}`}
          className="my-4 md:text-base text-sm  text-slate-800 font-medium line-clamp-2 hover:underline"
        >
          {product.title}
        </Link>
        <div className="mt-2 flex  justify-between">
          <div className="flex gap-4">
            <div className="font-semibold md:text-base text-sm">
              {product.price}$
            </div>
          </div>
          <div className="text-orange-700 font-medium md:text-sm text-xs">
            {product.sold} Sold
          </div>
        </div>
      </div>
      {/* {open ? (
        <FeatureDetailsCard
          setOpen={setOpen}
          inWishList={inWishList}
          inCompareList={inCompareList}
          images={images}
          title={title}
          description={description}
          price={price}
          sold={sold}
          addToWishList={addToWishList}
        />
      ) : null} */}
    </div>
  );
};

export default ProductCard;
