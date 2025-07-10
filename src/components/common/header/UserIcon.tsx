import { logout } from "@redux/auth/slices/AuthSlice";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { useEffect, useState } from "react";
import { CgLogOut } from "react-icons/cg";
import { CiUser } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa6";
import { MdLocationOn } from "react-icons/md";
import { TbListCheck } from "react-icons/tb";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

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
            <span className="capitalize">{user.fullName}</span>
            <br />
            <span className="text-xs px-2 py-3 border-b border-b-slate-800 font-medium text-slate-300">
              {user.email}
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
              className=" px-3 py-2  hover:pl-4  transition-all w-full text-left cursor-pointer flex gap-x-1"
              onClick={() => setOpen(false)}
            >
              <FaRegUser size={18} />
              Profile
            </NavLink>
            <NavLink
              to={"/profile/address"}
              end
              className=" px-3 py-2  hover:pl-4  transition-all w-full text-left cursor-pointer flex gap-x-1"
              onClick={() => setOpen(false)}
            >
              <MdLocationOn size={18} /> Address
            </NavLink>
            <NavLink
              to={"/profile/orders"}
              end
              className=" px-3 py-2  hover:pl-4  transition-all w-full text-left cursor-pointer flex gap-x-1"
              onClick={() => setOpen(false)}
            >
              <TbListCheck size={18} />
              Orders
            </NavLink>
            <button
              onClick={handleLogout}
              className=" px-3 py-2  hover:pl-4  transition-all text-left border-t-slate-300 cursor-pointer border-t flex gap-x-1"
            >
              <CgLogOut size={18} />
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
    </>
  );
};

export default UserIcon;
