import type { TProduct } from "@customeTypes/products";
import { useState, type ChangeEvent } from "react";
import { Link } from "react-router-dom";
import DropDownInfo from "./DropDownInfoProductPage";

const RightSideProductPage = ({
  title,
  color,
  brand,
  category,
  price,
}: TProduct) => {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  return (
    <div className="flex-1 flex-col bg-white p-8 shadow-md rounded-xl">
      <h2 className="font-semibold  pb-2 text-slate-800 md:text-xl text-md">
        {title}
      </h2>
      <div className="flex gap-3 flex-col border-y border-slate-300  pt-2 pb-4">
        <span className="font-semibold text-base">${price}</span>
        <div className="flex gap-1 items-center"></div>
        <Link to={"#"} className="text-sm text-gray-400">
          Write a review
        </Link>
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
      <div className="flex mt-4  gap-4">
        <span className="font-semibold text-base">Color:</span>
        <ul className="flex gap-2 flex-row">
          {color.map((productColor, index) => {
            return (
              <li
                key={index}
                style={{ backgroundColor: productColor.title }}
                className={`${
                  selectedColor === productColor._id
                    ? "ring-4 ring-slate-800 outline outline-slate-50"
                    : "hover:opacity-80"
                }  transition-all f  h-7 w-7 rounded-full cursor-pointer`}
                onClick={() => setSelectedColor(productColor._id)}
              ></li>
            );
          })}
        </ul>
      </div>
      <div className="flex py-6 items-center gap-6">
        <span className="font-semibold text-base">Quantity:</span>
        <div className="flex gap-3 items-center ">
          <input
            type="number"
            className="focus:outline-none w-14 text-gray-500 border border-slate-300  p-2"
            value={quantity}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setQuantity(+e.target.value)
            }
          />
          <button
            type="submit"
            className="hover:bg-orange-300 hover:text-slate-800 bg-slate-800 text-slate-200 px-8 py-3  rounded-full w-fit transition-all"
            onClick={() => {}}
          >
            Add to cart
          </button>
        </div>
      </div>
      <DropDownInfo />
    </div>
  );
};

export default RightSideProductPage;
