import { Link } from "react-router-dom";

//Icons
import { FaCheck } from "react-icons/fa6";
import { AiFillHeart, AiOutlineEye } from "react-icons/ai";
import type { TProduct } from "@customeTypes/products";

const ProductCard = ({ product }: { product: TProduct }) => {
  return (
    <div
      className={` rounded-lg overflow-hidden group shadow-md bg-white py-4`}
    >
      <div className=" relative overflow-hidden">
        <Link
          to={`/product/${product._id}`}
          className="overflow-auto w-full md:h-64 h-36 inline-block"
        >
          <img
            src={product.images[0].url}
            alt="music"
            className=" w-full h-full object-contain "
          />
        </Link>
        <div className=" transition-all duration-300  rounded-full p-1 absolute top-[2%] right-3">
          {/* {heart ? ( */}
          <AiFillHeart
            className="transition-all  rounded-full cursor-pointer"
            size={20}
            color="red"
            title="Remove from wishlist"
          />
          {/** ) : (
            <AiOutlineHeart
              className="transition-all  rounded-full cursor-pointer"
              size={20}

              color="#333"
              title="Add to wishlist"
            />
          )}*/}
        </div>

        <div className="absolute top-[14%] -right-6 flex gap-2 flex-col group-hover:right-3 transition-all  text-lg">
          <div className=" transition-all  rounded-full p-1">
            {/* {inCompare ? ( */}
            <FaCheck
              size={20}
              className="cursor-pointer"
              color="#333"
              title="Compare between"
            />
            {/**) : (
              <IoIosShuffle
                size={20}
                className="cursor-pointer"
                color="#333"
                title="Compare between"
              />
            )}*/}
          </div>
          <div className=" transition-all  rounded-full p-1 flex justify-center items-center">
            <AiOutlineEye
              // onClick={() => navigate("/product" + product?._id.toString())}
              className="cursor-pointer"
              size={20}
              color="#333"
              title="Quick view"
            />
          </div>
        </div>
      </div>
      <div className="px-4 py-4">
        <Link
          to={"#"}
          className="text-teal-500 font-medium text-xs md:text-sm hover:text-teal-700"
        >
          {product.brand}
        </Link>
        <h5 className="my-2 md:text-md text-sm  text-slate-700 font-medium line-clamp-1">
          {product.title}
        </h5>

        <span
          className="my-4 text-gray-400 text-xs md:text-sm line-clamp-2 "
          dangerouslySetInnerHTML={{ __html: product.description }}
        ></span>
        <div className="mt-2 flex  justify-between">
          <div className="flex gap-4">
            <div className="font-semibold md:text-base text-sm">
              {product.price}$
            </div>
          </div>
          <div className="text-teal-500 font-semibold md:text-base text-sm">
            {product.sold} sold
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
