import { addToast } from "@redux/toast/slices/ToastSlice";
import type { MouseEvent } from "react";
import UserIcon from "./UserIcon";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { PiHeartStraightLight } from "react-icons/pi";
import CartIcon from "./cartIcon/CartIcon";

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
        <PiHeartStraightLight
          size={32}
          className="group-hover:rotate-y-360 transition-all duration-700"
        />
      </Link>
      {/* Cart icon*/}
      <CartIcon />
    </div>
  );
};

export default RightSideForHeader;
