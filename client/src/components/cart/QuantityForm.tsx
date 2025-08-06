// React
import { useEffect, useState } from "react";
import type { TQuantityForm } from "@customeTypes/cart";
import { useAppDispatch } from "@redux/hooks";
//Redux
import { addToCart, deleteFromCart } from "@redux/cart/slices/cartSlice";
//Icons
import { AiOutlineDelete, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const QuantityForm = ({ count, _id, color }: TQuantityForm) => {
  const [isClicked, setIsClicked] = useState(false);

  const dispatch = useAppDispatch();

  const increaseQuantity = () => {
    if (count >= 10 || isClicked) return;
    dispatch(addToCart({ id: _id, count: ++count, color }));
    setIsClicked(true);
  };

  const decreaseQuantity = () => {
    if (count <= 1 || isClicked) return;
    dispatch(addToCart({ id: _id, count: --count, color }));
    setIsClicked(true);
  };

  const removeProductFromCart = () => {
    if (isClicked) return;
    dispatch(deleteFromCart({ id: _id, color }));
    setIsClicked(true);
  };

  useEffect(() => {
    if (!isClicked) return;

    const debounce = setTimeout(() => {
      setIsClicked(false);
    }, 400);

    return () => {
      clearTimeout(debounce);
    };
  }, [isClicked]);

  return (
    <td className="gap-4 flex  items-center  p-4 flex-1 min-w-36">
      <div className="flex gap-2 items-center">
        <span className="w-10 h-8   border-gray-300 border  text-sm font-bold  flex  items-center justify-center">
          {count}
        </span>
        <div className="flex gap-y-1 flex-col">
          <AiOutlinePlus
            size={4}
            className={`w-5 h-5 lg:w-4 lg:h-4 text-center border-gray-400 border ${
              count >= 10 || isClicked
                ? " bg-blue-50"
                : "cursor-pointer hover:bg-gray-300 bg-gray-200"
            } `}
            onClick={increaseQuantity}
          />
          <AiOutlineMinus
            size={4}
            className={`w-5 h-5 lg:w-4 lg:h-4 text-center   border-gray-400 border ${
              count <= 0 || isClicked
                ? " bg-blue-50"
                : "cursor-pointer hover:bg-gray-300 bg-gray-200"
            }`}
            onClick={decreaseQuantity}
          />
        </div>
      </div>
      <div>
        <span
          className={` ${isClicked ? " " : "cursor-pointer"}`}
          onClick={removeProductFromCart}
        >
          <AiOutlineDelete size={22} />
        </span>
      </div>
    </td>
  );
};

export default QuantityForm;
