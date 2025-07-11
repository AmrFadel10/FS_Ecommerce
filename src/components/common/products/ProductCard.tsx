import { Link } from "react-router-dom";

//Icons
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import type { TProduct } from "@customeTypes/products";
import { useState } from "react";
import { useAppDispatch } from "@redux/hooks";
import { toggleWishlistApiCall } from "@redux/wishlist/apicalls/toggleWishlistApiCall";
import { Spinner } from "../Spinner";
import { addToast } from "@redux/toast/slices/ToastSlice";
import { MdZoomOutMap } from "react-icons/md";

const ProductCard = ({
  images,
  brand,
  _id,
  title,
  price,
  sold,
  isLiked,
  isActivation,
  where,
}: TProduct & { isLiked: boolean; isActivation: boolean; where?: string }) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const handleToggleWishlist = () => {
    if (isActivation) {
      if (loading) return;
      setLoading(true);
      dispatch(toggleWishlistApiCall(_id))
        .unwrap()
        .then(() => {
          setLoading(false);
          if (!isLiked) {
            dispatch(
              addToast({
                title: "add to wishlist",
                comment: `${title.slice(0, 40)} is now in your wishlist`,
                type: "success",
              })
            );
          }
        })
        .catch((error) => {
          setLoading(false);
          dispatch(
            addToast({
              comment: `${error}`,
              type: "error",
            })
          );
        });
    } else {
      dispatch(
        addToast({
          comment: `Please log in first`,
          type: "info",
        })
      );
    }
  };
  return (
    <div
      className={`${
        where === "public"
          ? "max-w-[97] sm:max-w-[47%] md:max-w-[31%] lg:max-w-[23%] xl:max-w-[18%] shrink-0 "
          : ""
      } rounded-2xl overflow-hidden group shadow-md bg-white p-2 `}
    >
      <div className=" relative overflow-hidden">
        <div className="overflow-auto w-full md:h-52 h-36 inline-block ">
          <img
            src={images[0].url}
            alt="music"
            className=" w-full h-full object-contain "
          />
        </div>
        <div
          className=" transition-all duration-300  rounded-full p-1 absolute top-[2%] right-0 flex justify-center items-center w-7 h-7"
          onClick={handleToggleWishlist}
        >
          {loading ? (
            <Spinner
              size={15}
              className={`w-full h-full ${
                loading && "bg-blue-500"
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

        <div className="absolute top-[14%] -right-12 flex gap-2 flex-col group-hover:right-0 transition-all  text-lg">
          <div className=" transition-all  rounded-full flex justify-center items-center duration-300 w-7 h-7">
            <MdZoomOutMap size={20} color="#333" title="Quick view" />
          </div>
        </div>
      </div>
      <div className="px-4 py-2">
        <h3 className="font-medium text-xs capitalize text-blue-600 cursor-default">
          {brand}
        </h3>
        <Link
          to={`/product/${_id}`}
          className="my-2 text-sm  text-gray-600 font-medium line-clamp-2 hover:underline min-h-8 max-w-52"
        >
          {title}
        </Link>
        <div className="mt-2 flex  justify-between">
          <div className="flex gap-4">
            <div className="font-semibold md:text-base text-sm">{price}$</div>
          </div>
          <div className="text-blue-500 font-medium md:text-sm text-xs">
            {sold} Sold
          </div>
        </div>
      </div>
      {/* {open ? (
        <FeatureDetailsCard
          setOpen={setOpen}
          inWishList={inWishList}
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
