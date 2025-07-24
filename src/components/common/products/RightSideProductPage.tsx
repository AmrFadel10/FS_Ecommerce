import { memo } from "react";
import { Link } from "react-router-dom";

//Component
import DropDownInfo from "./DropDownInfoProductPage";
import ProductForm from "./ProductForm";
import type { TColor } from "@customeTypes/common";

type TProps = {
  _id: string;
  title: string;
  color: TColor[];
  brand: string;
  category: string;
  price: number;
  quantity: number;
};
const RightSideProductPage = memo(
  ({ _id, title, color, brand, category, price, quantity }: TProps) => {
    return (
      <div className="flex-1 flex-col bg-white p-8 shadow-md rounded-xl">
        <h2 className="font-semibold  pb-2 text-slate-800 md:text-xl text-md">
          {title}
        </h2>
        <div className="flex gap-x-2">
          <span className="font-semibold text-base">Price: </span>

          <span className="font-semibold text-gray-800 text-base">
            $ {price}
          </span>
        </div>
        <div className="flex gap-3 mt-2 items-center">
          <span className="font-semibold text-base">Type:</span>
          <Link to={"#"} className="text-sm  text-gray-500 hover:text-gray-900">
            Watch
          </Link>
        </div>
        <div className="flex gap-3 mt-2 items-center">
          <span className="font-semibold text-base">Brand:</span>
          <Link to={"#"} className="text-sm  text-gray-500 hover:text-gray-900">
            {brand}
          </Link>
        </div>
        <div className="flex gap-3 mt-2 items-center">
          <span className="font-semibold text-base">Category:</span>
          <Link
            to={`/products?category=${category}`}
            className="text-sm  text-gray-500 hover:text-gray-900"
          >
            {category}
          </Link>
        </div>
        <div className="flex gap-3 my-4 items-center">
          <span className="font-semibold text-base">Total quantity:</span>
          <span className="  text-gray-500 font-medium text-sm">
            {quantity}
          </span>
          <span className="text-sm text-gray-500">Items</span>
        </div>
        <ProductForm _id={_id} color={color} quantity={quantity} />
        <DropDownInfo />
      </div>
    );
  }
);

export default RightSideProductPage;
