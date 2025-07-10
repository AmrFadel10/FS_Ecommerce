//React & Redux
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { logout } from "@redux/auth/slices/AuthSlice";

//Icons
import { BiUser } from "react-icons/bi";
import { CgLogOut } from "react-icons/cg";
import { FaRegUser } from "react-icons/fa6";
import { LuUserRound } from "react-icons/lu";
import { TbListCheck } from "react-icons/tb";
import { IoLocationOutline } from "react-icons/io5";

const UserIcon = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { user } = useAppSelector((state) => state.auth);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  //Log out
  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);
  return (
    <>
      {user ? (
        <div
          className="flex items-center  gap-1 group cursor-pointer relative"
          onClick={() => setOpen((pre) => !pre)}
        >
          <div
            className={` rounded-md flex justify-center items-center gap-x-2`}
          >
            <span className="group-hover:opacity-90 transition-all text-blue-600">
              <BiUser size={25} />
            </span>
            <span className="capitalize text-gray-600 text-sm font-medium">
              {user.fullName}
            </span>
          </div>
          <ul
            className={`${
              open ? "max-h-60" : "max-h-0"
            } user-icons transition-all  duration-500   absolute left-1 top-[calc(100%+10px)] w-[180px]  bg-white rounded-sm text-slate-800 flex  flex-col  overflow-hidden text-sm font-medium`}
          >
            <NavLink
              to={"/profile"}
              end
              className=" px-3 py-2  hover:pl-4  transition-all w-full text-left cursor-pointer flex gap-x-2"
              onClick={() => setOpen(false)}
            >
              <FaRegUser size={18} color="#2563EB" />
              Profile
            </NavLink>
            <NavLink
              to={"/profile/address"}
              end
              className=" px-3 py-2  hover:pl-4  transition-all w-full text-left cursor-pointer flex gap-x-2"
              onClick={() => setOpen(false)}
            >
              <IoLocationOutline size={18} color="#2563EB" /> Address
            </NavLink>
            <NavLink
              to={"/profile/orders"}
              end
              className=" px-3 py-2  hover:pl-4  transition-all w-full text-left cursor-pointer flex gap-x-2"
              onClick={() => setOpen(false)}
            >
              <TbListCheck size={18} color="#2563EB" />
              Orders
            </NavLink>
            <button
              onClick={handleLogout}
              className=" px-3 py-2  hover:pl-4  transition-all text-left border-t-slate-300 cursor-pointer border-t flex gap-x-2"
            >
              <CgLogOut size={18} color="#2563EB" />
              Logout
            </button>
          </ul>
        </div>
      ) : (
        <Link
          to="/login"
          className="flex items-center  gap-x-2  group text-gray-700 font-medium justify-center"
        >
          <LuUserRound
            size={25}
            className="group-hover:rotate-y-360 transition-all duration-700"
            color="#2563EB"
          />
          <div className=" text-xs lg:block hidden">Sign In / Sign Up</div>
        </Link>
      )}
    </>
  );
};

export default UserIcon;
