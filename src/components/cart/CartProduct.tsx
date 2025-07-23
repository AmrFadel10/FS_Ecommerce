//types
import type { TProductCart } from "@customeTypes/cart";
import { memo } from "react";
import { Link } from "react-router-dom";
import QuantityForm from "./QuantityForm";

const CartProduct = ({
  images,
  _id,
  title,
  color,
  quantity,
  brand,
  price,
}: TProductCart) => {
  const productPrice = quantity * price;
  return (
    <tr className="flex">
      <td className=" flex flex-[3] items-center p-4 gap-4 min-w-96">
        <div className="flex-1 h-36 min-w-28">
          <img
            src={images[0].url}
            loading="lazy"
            alt="music"
            className="h-full w-full object-contain"
          />
        </div>
        <div className="flex-[2] ">
          <Link
            to={`/product/${_id}`}
            className={`text-sm font-medium text-gray-700 line-clamp-2 hover:underline text-wrap`}
          >
            {title}
          </Link>
          <div className="flex gap-2 mt-3">
            <span className="font-semibold text-sm text-gray-700">Brand :</span>{" "}
            <span className="text-sm font-semibold text-gray-700 capitalize">
              {brand}
            </span>
          </div>
          <div className="flex gap-2 mt-3">
            <span className="font-semibold text-base text-gray-700">
              Color :
            </span>{" "}
            <span
              className="  rounded-full  block w-6 h-6 ring-2"
              style={{ backgroundColor: `${color}` }}
            ></span>
          </div>
        </div>
      </td>
      <td className="text-lg font-medium p-4 flex-1 flex items-center text-gray-600 min-w-36">
        ${price}
      </td>
      <QuantityForm _id={_id} color={color} count={quantity} />
      <td className="flex  items-center text-lg font-medium p-4 flex-1 text-gray-600 min-w-36">
        {productPrice}$
      </td>
    </tr>
  );
};

export default memo(CartProduct);
