import { Link } from "react-router-dom";
//Redux
import { useAppSelector } from "@redux/hooks";
import { countProductCart } from "@redux/cart/slices/cartSlice";
//Icons
import { GiShoppingCart } from "react-icons/gi";
import { useEffect, useState } from "react";
//Style
import style from "./style.module.css";

const { animate_cart } = style;

const CartIcon = () => {
  const productCounter = useAppSelector(countProductCart);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (productCounter <= 0) return;
    setAnimate(true);

    const debounce = setTimeout(() => {
      setAnimate(false);
    }, 400);
    return () => {
      clearTimeout(debounce);
    };
  }, [productCounter]);

  return (
    <Link
      to="/cart"
      className="flex items-center  gap-1 hover:text-slate-50 group relative"
    >
      <GiShoppingCart
        size={30}
        className="text-orange-300 group-hover:rotate-y-360 transition-all duration-700"
      />
      <span
        className={`w-5 h-5 flex justify-center items-center text-xs font-bold rounded-full bg-slate-50 text-slate-700 absolute -top-2 -right-1 ${
          !!animate && animate_cart
        }`}
      >
        {productCounter}
      </span>
    </Link>
  );
};

export default CartIcon;
