import { Link } from "react-router-dom";

//icons
import { CiSearch } from "react-icons/ci";
import { SlRefresh } from "react-icons/sl";
import { PiHeartStraightLight } from "react-icons/pi";
import { CiUser } from "react-icons/ci";

//Components
import Navigation from "./Navigation";
import CartIcon from "./CartIcon";

export default function Header() {
  console.log("header");
  return (
    <>
      <header className="relative z-[23]">
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
