//React & Redux
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAppDispatch } from "@redux/hooks";
import { Spinner } from "../Spinner";
import { addToast } from "@redux/toast/slices/ToastSlice";
//Icons
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
//Types
import type { TProduct } from "@customeTypes/products";
//APIS
import { toggleWishlistApiCall } from "@redux/wishlist/apicalls/toggleWishlistApiCall";
//Component
import ProductRating from "@components/rating/ProductRating";

const ProductCard = ({
  images,
  brand,
  _id,
  title,
  price,
  quantity,
  isLiked,
  isActivation,
  totalrating,
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
    <article
      className={`${
        where === "public"
          ? "rounded-xl overflow-hidden group shadow-md bg-white lg:min-w-[23%] xl:min-w-[18%] min-w-[47%]"
          : ""
      } rounded-2xl overflow-hidden group shadow-md bg-white p-2 `}
    >
      <div className=" relative overflow-hidden">
        <div className="overflow-auto w-full md:h-52 h-36">
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
              size={18}
              className={`w-full h-full ${
                loading && "bg-blue-500"
              } rounded-full`}
            />
          ) : isLiked ? (
            <AiFillHeart
              className="transition-all  rounded-full "
              size={20}
              color="red"
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
      </div>
      <div className="px-4 py-2">
        <h3 className="font-medium text-xs capitalize text-blue-600 cursor-default">
          {brand}
        </h3>
        <Link
          to={`/product/${_id}`}
          className="my-2 md:text-sm text-xs text-gray-600 font-medium line-clamp-2 hover:underline min-h-8 max-w-52"
        >
          {title}
        </Link>
        <ProductRating totalrating={totalrating || 0} />

        <div className="mt-2 flex  justify-between items-center">
          <div className="flex gap-4">
            <div className="font-medium md:text-sm text-xs">
              {price.toFixed(2)}$
            </div>
          </div>
          <div className="text-blue-500 font-medium md:text-sm text-xs">
            {quantity} items
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
