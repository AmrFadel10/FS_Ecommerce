//React & Redux
import type { MouseEvent } from "react";
import { Link } from "react-router-dom";
import { addToast } from "@redux/toast/slices/ToastSlice";
import { useAppDispatch, useAppSelector } from "@redux/hooks";

//Components
import UserIcon from "./UserIcon";
import CartIcon from "./cartIcon/CartIcon";

//Icons
import { FiHeart } from "react-icons/fi";

const RightSideForHeader = () => {
  const dispatch = useAppDispatch();
  const { accessToken } = useAppSelector((state) => state.auth);
  return (
    <div className="flex lg:gap-4  gap-1 order-2 lg:order-3 ">
      <UserIcon />
      <Link
        to="/wishlist"
        className=" group"
        onClick={(e: MouseEvent<HTMLAnchorElement>) => {
          if (!accessToken) {
            e.preventDefault();
            dispatch(
              addToast({
                comment: `Please login first`,
                type: "info",
              })
            );
          }
        }}
      >
        <FiHeart
          color="#2563EB"
          size={23}
          className="group-hover:rotate-y-360 transition-all duration-700"
        />
      </Link>
      {/* Cart icon*/}
      <CartIcon />
    </div>
  );
};

export default RightSideForHeader;
