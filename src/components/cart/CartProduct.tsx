//Icons
import { MdDelete } from "react-icons/md";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

//types
import type { TProductCart } from "@customeTypes/cart";
import { useAppDispatch } from "@redux/hooks";
import { addToCart, deleteFromCart } from "@redux/cart/slices/cartSlice";
import { memo } from "react";

const CartProduct = ({
  images,
  _id,
  title,
  color,
  count,
  brand,
  price,
}: TProductCart) => {
  const dispatch = useAppDispatch();
  const productPrice = count * price;
  const increaseQuantity = () => {
    dispatch(addToCart({ id: _id, count: ++count, color }));
  };
  const decreaseQuantity = () => {
    if (count <= 1) return;
    dispatch(addToCart({ id: _id, count: --count, color }));
  };
  const removeProductFromCart = () => {
    dispatch(deleteFromCart({ id: _id, color }));
  };
  return (
    <tr className="flex ">
      <td className=" flex flex-[3] items-center p-4 gap-4 ">
        <div className="flex-[1] h-36">
          <img
            // src={"assets/images/24_150x.avif"}
            src={images[0].url}
            loading="lazy"
            alt="music"
            className="h-full w-full object-contain"
          />
        </div>
        <div className="flex-[2]">
          <p className="text-sm font-medium text-gray-850 line-clamp-2">
            {title}
          </p>
          <div className="flex gap-2 mt-3">
            <span className="font-semibold text-sm text-gray-850">Brand :</span>{" "}
            <span className="text-sm font-semibold text-gray-700">{brand}</span>
          </div>
          <div className="flex gap-2 mt-3">
            <span className="font-semibold text-base text-gray-850">
              Color :
            </span>{" "}
            <span
              className="  rounded-full  block w-6 h-6"
              style={{ backgroundColor: `${color}` }}
            ></span>
          </div>
        </div>
      </td>
      <td className="text-lg font-semibold p-4 flex-1 flex items-center text-gray-600">
        ${price}
      </td>
      <td className="gap-4 flex  items-center  p-4 flex-1">
        <div className="flex gap-2 items-center">
          <span className="w-10 h-8   border-gray-300 border  text-sm font-bold  flex  items-center justify-center">
            {count}
          </span>
          <div>
            <AiOutlinePlus
              size={4}
              className={`w-3 h-3  text-center  bg-gray-200 border-gray-400 border cursor-pointer hover:bg-gray-200 mb-1`}
              onClick={increaseQuantity}
            />
            <AiOutlineMinus
              size={4}
              className={`w-3 h-3   text-center  bg-gray-200 border-gray-400 border cursor-pointer hover:bg-gray-200 ${
                count <= 0 ? "  cursor-none" : ""
              }`}
              onClick={decreaseQuantity}
            />
          </div>
        </div>
        <div>
          <span
            className="cursor-pointer text-red-500 hover:text-red-600 "
            onClick={removeProductFromCart}
          >
            <MdDelete size={26} />
          </span>
        </div>
      </td>
      <td className="flex  items-center text-lg font-semibold p-4 flex-1 text-gray-600">
        {productPrice}$
      </td>
    </tr>
  );
};

export default memo(CartProduct);
