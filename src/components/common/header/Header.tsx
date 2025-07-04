// React redux
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState, type MouseEvent } from "react";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { logout } from "@redux/auth/slices/AuthSlice";
import { cleanUpWishlist } from "@redux/wishlist/slices/wishlistSlice";

//APIS
import { getWishlistProductsApiCall } from "@redux/wishlist/apicalls/getWishlistProductsApiCall";

//icons
import { CiSearch } from "react-icons/ci";
import { SlRefresh } from "react-icons/sl";
import { PiHeartStraightLight } from "react-icons/pi";
import { CiUser } from "react-icons/ci";
import CartIcon from "./cartIcon/CartIcon";

//Components
import Navigation from "./Navigation";
import { addToast } from "@redux/toast/slices/ToastSlice";

export default function Header() {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const naviaget = useNavigate();
  const { user, accessToken } = useAppSelector((state) => state.auth);
  const [open, setOpen] = useState(false);
  const handleLogout = () => {
    dispatch(logout());
    naviaget("/");
  };

  useEffect(() => {
    if (accessToken) {
      const wishlistApi = dispatch(getWishlistProductsApiCall());
      return () => {
        wishlistApi.abort();
        dispatch(cleanUpWishlist());
      };
    }
  }, [dispatch]);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);
  return (
    <>
      <header className="relative z-[23] change-color">
        <div className="bg-slate-950 text-slate-100">
          <div className="mx-auto container text-slate-300 lg:px-0 px-2">
            <div className="flex justify-between items-center py-4 lg:flex-nowrap flex-wrap gap-4">
              <div className="hidden sm:block">
                <Link
                  to="/"
                  className=" md:w-10 w-8 md:h-10 h-8 rounded-full overflow-hidden block"
                >
                  <img
                    src="/logo.png"
                    alt=""
                    className="object-cover w-full h-full "
                  />
                </Link>
              </div>
              <div className="flex items-center order-4 lg:order-2 w-full lg:min-w-[500px] xl:min-w-[600px] relative lg:max-w-[400px]">
                <input
                  type="text"
                  placeholder="Search Product Here ..."
                  className="py-2 px-4 rounded-md rounded-r-none text-slate-800 bg-gray-50 ml-12 focus:outline-none w-full text-sm font-semibold h-9"
                />
                <span className="bg-orange-400 h-9 w-14 flex justify-center items-center rounded-r-md hover:bg-orange-300 cursor-pointer">
                  <CiSearch className="!text-slate-800 text-lg" />
                </span>
              </div>
              <div className="flex lg:gap-4  gap-1 order-2 lg:order-3 ">
                <Link
                  to={"/compare"}
                  className="flex items-center  gap-1 hover:text-slate-50 group"
                >
                  <SlRefresh
                    size={28}
                    className="group-hover:rotate-y-360 transition-all duration-700"
                  />
                  <div className="font-light lg:font-normal text-xs lg:block hidden">
                    Compare
                    <br />
                    Products
                  </div>
                </Link>
                <Link
                  to="/wishlist"
                  className="flex items-center  gap-1 hover:text-slate-50 group"
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
                  <div className="font-light lg:font-normal text-xs lg:block hidden">
                    Favourite
                    <br />
                    Wishlist
                  </div>
                </Link>
                {user ? (
                  <div
                    className="flex items-center  gap-1 hover:text-slate-200 text-slate-50 group cursor-pointer relative"
                    onClick={() => setOpen((pre) => !pre)}
                  >
                    <div className="w-8 h-8 rounded-md">
                      <img
                        src={user.avatar?.url}
                        className="group-hover:opacity-90 transition-all  rounded-md h-full w-full object-cover"
                      />
                    </div>
                    <div className="font-normal text-sm lg:block hidden">
                      Welcome
                      <br />
                      <span className="capitalize">{user.fullName}</span>
                    </div>
                    <ul
                      className={`${
                        open ? "max-h-60" : "max-h-0"
                      } transition-all  duration-500  absolute left-1 top-[calc(100%+10px)] w-[180px]  bg-slate-950 rounded-sm text-slate-50 flex  flex-col  overflow-hidden text-sm font-medium`}
                    >
                      <li className="text-xs px-2 py-3 border-b border-b-slate-800 font-medium cursor-not-allowed text-orange-400">
                        {user.email}
                      </li>
                      <NavLink
                        to={"/profile"}
                        end
                        className=" px-3 py-2  hover:pl-4 hover:text-orange-300 transition-all w-full text-left cursor-pointer"
                        onClick={() => setOpen(false)}
                      >
                        Profile
                      </NavLink>
                      <NavLink
                        to={"/profile/orders"}
                        end
                        className=" px-3 py-2  hover:pl-4 hover:text-orange-300 transition-all w-full text-left cursor-pointer"
                        onClick={() => setOpen(false)}
                      >
                        Orders
                      </NavLink>
                      <button
                        onClick={handleLogout}
                        className=" px-3 py-2  hover:pl-4 hover:text-orange-300 transition-all text-left border-t-slate-800  cursor-pointer border-t"
                      >
                        Logout
                      </button>
                    </ul>
                  </div>
                ) : (
                  <Link
                    to="/login"
                    className="flex items-center  gap-1 hover:text-slate-50 group"
                  >
                    <CiUser
                      size={32}
                      className="group-hover:rotate-y-360 transition-all duration-700"
                    />
                    <div className="font-normal text-xs lg:block hidden">
                      Login
                      <br />
                      Account
                    </div>
                  </Link>
                )}
                {/* Cart icon*/}
                <CartIcon />
              </div>
            </div>
          </div>
        </div>
      </header>
      <Navigation />
    </>
  );
}
