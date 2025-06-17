import type { TProduct } from "@customeTypes/products";
import { Link } from "react-router-dom";
import DropDownInfo from "./DropDownInfoProductPage";
import ProductForm from "./ProductForm";

const RightSideProductPage = ({
  _id,
  title,
  color,
  brand,
  category,
  price,
}: TProduct) => {
  return (
    <div className="flex-1 flex-col bg-white p-8 shadow-md rounded-xl">
      <h2 className="font-semibold  pb-2 text-slate-800 md:text-xl text-md">
        {title}
      </h2>
      <div className="flex gap-x-2">
        <span className="font-semibold text-base">Price: </span>

        <span className="font-semibold text-gray-800 text-base">$ {price}</span>
      </div>
      <div className="flex gap-3 mt-4 items-center">
        <span className="font-semibold text-base">Type:</span>
        <Link to={"#"} className="text-sm  text-gray-500 hover:text-gray-900">
          Watch
        </Link>
      </div>
      <div className="flex gap-3 mt-4 items-center">
        <span className="font-semibold text-base">Brand:</span>
        <Link to={"#"} className="text-sm  text-gray-500 hover:text-gray-900">
          {brand}
        </Link>
      </div>
      <div className="flex gap-3 mt-4 items-center">
        <span className="font-semibold text-base">Category:</span>
        <Link to={"#"} className="text-sm  text-gray-500 hover:text-gray-900">
          {category}
        </Link>
      </div>
      <div className="flex gap-3 mt-4 items-center">
        <span className="font-semibold text-base">Tags:</span>
        <Link to={"#"} className="text-sm  text-gray-500 hover:text-gray-900">
          Popular
        </Link>
      </div>
      <div className="flex gap-3 my-4 items-center">
        <span className="font-semibold text-base">Availablity:</span>
        <Link to={"#"} className="text-sm  text-gray-500 hover:text-gray-900">
          In stock
        </Link>
      </div>
      <ProductForm _id={_id} color={color} />
      <DropDownInfo />
    </div>
  );
};

export default RightSideProductPage;
