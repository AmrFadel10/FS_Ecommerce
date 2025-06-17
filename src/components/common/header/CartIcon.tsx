import { Link } from "react-router-dom";
//Redux
import { useAppSelector } from "@redux/hooks";
import { countProductCart } from "@redux/cart/slices/cartSlice";
//Icons
import { GiShoppingCart } from "react-icons/gi";

const CartIcon = () => {
  const productCounter = useAppSelector(countProductCart);

  console.log("cart1111 ");
  return (
    <Link
      to="/cart"
      className="flex items-center  gap-1 hover:text-slate-50 group relative"
    >
      <GiShoppingCart
        size={30}
        className="text-orange-300 group-hover:rotate-y-360 transition-all duration-700"
      />
      <span className="w-4 h-4 flex justify-center items-center text-xs font-semibold rounded-full bg-slate-50 text-slate-700 absolute -top-1 -right-1">
        {productCounter}
      </span>
    </Link>
  );
};

export default CartIcon;
