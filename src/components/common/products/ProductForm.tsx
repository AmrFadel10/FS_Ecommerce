import type { TColor } from "@customeTypes/common";
import { addToCart } from "@redux/cart/slices/cartSlice";
import { useAppDispatch } from "@redux/hooks";
import { useState, type ChangeEvent } from "react";

const ProductForm = ({ color, _id }: { color: TColor[]; _id: string }) => {
  const dispatch = useAppDispatch();
  const [selectedColor, setSelectedColor] = useState(color[0].title);
  const [quantity, setQuantity] = useState<number>(1);

  const handleSubmit = () => {
    if (!!(quantity > 0) && !!selectedColor) {
      dispatch(addToCart({ id: _id, color: selectedColor, count: +quantity }));
    }
  };

  return (
    <>
      <div className="flex mt-4  gap-4">
        <span className="font-semibold text-base">Select color:</span>
        <ul className="flex gap-2 flex-row">
          {color.map((productColor, index) => {
            return (
              <li
                key={index}
                style={{ backgroundColor: productColor.title }}
                className={`${
                  selectedColor === productColor.title
                    ? "ring-4 ring-slate-950  outline-slate-50 outline-3"
                    : "hover:opacity-80"
                }  transition-all f  h-8 w-8 rounded-full cursor-pointer`}
                onClick={() => setSelectedColor(productColor.title)}
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
            min={1}
            max={10}
            value={quantity}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setQuantity(+e.target.value)
            }
          />
          <button
            type="submit"
            className={`${
              !selectedColor || !(+quantity > 0)
                ? "cursor-no-drop bg-gray-300"
                : "hover:bg-blue-600  cursor-pointer bg-blue-600 text-gray-50"
            }  px-4 py-2  rounded-full w-fit transition-all text-sm`}
            onClick={handleSubmit}
            disabled={!selectedColor || !(+quantity > 0)}
          >
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductForm;
