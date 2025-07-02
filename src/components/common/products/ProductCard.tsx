import { Link } from "react-router-dom";

//Icons
import { FaCheck } from "react-icons/fa6";
import { AiFillHeart, AiOutlineEye, AiOutlineHeart } from "react-icons/ai";
import type { TProduct } from "@customeTypes/products";
import { useState } from "react";
import { IoIosShuffle } from "react-icons/io";
import { useAppDispatch } from "@redux/hooks";
import { toggleWishlistApiCall } from "@redux/wishlist/apicalls/toggleWishlistApiCall";
import { Spinner } from "../Spinner";

const ProductCard = ({
  images,
  brand,
  _id,
  title,
  price,
  sold,
  isLiked,
  isActivation,
}: TProduct & { isLiked: boolean; isActivation: boolean }) => {
  const [inCompare, setinCompare] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  console.log(isActivation);
  const handleToggleWishlist = () => {
    if (isActivation) {
      if (loading) return;
      setLoading(true);
      dispatch(toggleWishlistApiCall(_id))
        .unwrap()
        .then(() => setLoading(false))
        .catch(() => setLoading(false));
    } else {
      alert("Please, login first!");
    }
  };
  return (
    <div
      className={`rounded-2xl overflow-hidden group shadow-md bg-white py-2`}
    >
      <div className=" relative overflow-hidden">
        <div className="overflow-auto w-full md:h-64 h-36 inline-block ">
          <img
            src={images[0].url}
            alt="music"
            className=" w-full h-full object-contain "
          />
        </div>
        <div
          className=" transition-all duration-300  rounded-full p-[4px] absolute top-[2%] right-3 hover:bg-orange-300 flex justify-center items-center w-7 h-7"
          onClick={handleToggleWishlist}
        >
          {loading ? (
            <Spinner
              size={15}
              color="black"
              className={`w-full h-full ${
                loading && "bg-orange-300"
              } rounded-full`}
            />
          ) : isLiked ? (
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
          <div className=" transition-all  rounded-full  hover:bg-orange-300 duration-300 flex justify-center items-center w-7 h-7">
            {!inCompare ? (
              <FaCheck size={18} color="#333" title="Compare between" />
            ) : (
              <IoIosShuffle size={20} color="#333" title="Compare between" />
            )}
          </div>
          <div className=" transition-all  rounded-full flex justify-center items-center hover:bg-orange-300 duration-300 w-7 h-7">
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
          {brand}
        </h3>
        <Link
          to={`/product/${_id}`}
          className="my-4 md:text-base text-sm  text-slate-800 font-medium line-clamp-2 hover:underline"
        >
          {title}
        </Link>
        <div className="mt-2 flex  justify-between">
          <div className="flex gap-4">
            <div className="font-semibold md:text-base text-sm">{price}$</div>
          </div>
          <div className="text-orange-700 font-medium md:text-sm text-xs">
            {sold} Sold
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
