import { Link } from "react-router-dom";

//icons
import { CiSearch } from "react-icons/ci";
import { SlRefresh } from "react-icons/sl";
import { PiHeartStraightLight } from "react-icons/pi";
import { CiUser } from "react-icons/ci";
import { GiShoppingCart } from "react-icons/gi";

//Components
import Navigation from "./Navigation";

export default function Header() {
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
              <div className="flex lg:gap-4 md:gap-2 gap-1 order-2 lg:order-3 ">
                <Link
                  to={"/compare"}
                  className="flex items-center md:gap-2 gap-1 hover:text-slate-50"
                >
                  <SlRefresh size={25} />
                  <div className="font-light lg:font-normal text-xs">
                    Compare
                    <br />
                    Products
                  </div>
                </Link>
                <Link
                  to="/wishlist"
                  className="flex items-center md:gap-2 gap-1 hover:text-slate-50"
                >
                  <PiHeartStraightLight size={25} />
                  <div className="font-light lg:font-normal text-xs">
                    Favourite
                    <br />
                    Wishlist
                  </div>
                </Link>

                <Link
                  to="/login"
                  className="flex items-center md:gap-2 gap-1 hover:text-slate-50"
                >
                  <CiUser className="text-3xl font-light lg:font-normal" />
                  <div className="font-normal text-xs">
                    Login
                    <br />
                    Account
                  </div>
                </Link>
                <Link
                  to="/cart"
                  className="flex items-center md:gap-2 gap-1 hover:text-slate-50"
                >
                  <GiShoppingCart size={30} className="text-orange-300" />
                  <div className="md:text-sm text-xs font-medium">
                    <span className="px-[6px] rounded-full bg-slate-100 text-slate-950 ">
                      0
                    </span>
                    <br /> 0 $
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Navigation />
    </>
  );
}
