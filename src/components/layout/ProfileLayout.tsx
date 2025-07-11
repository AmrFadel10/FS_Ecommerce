import { FaRegUser } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { TbListCheck } from "react-icons/tb";
import { NavLink, Outlet } from "react-router-dom";

const ProfileLayout = () => {
  return (
    <section className="flex py-12 ">
      <div className="flex-1 lg:min-w-60 flex flex-col border-r border-blue-200  p-2  font-medium text-sm change-color max-w-16">
        <NavLink
          to={"/profile"}
          end
          className={
            "flex gap-x-2 px-4 py-2 rounded-md hover:text-blue-600 transition-all"
          }
        >
          <FaRegUser size={18} />
          <span className="hidden lg:block">Update info</span>
        </NavLink>
        <NavLink
          to={"/profile/address"}
          end
          className={
            "flex gap-x-2 px-4 py-2 rounded-md hover:text-blue-600 transition-all"
          }
        >
          <IoLocationOutline size={18} />
          <span className="hidden lg:block">Addresses</span>
        </NavLink>
        <NavLink
          to={"/profile/orders?page=1"}
          end
          className={
            "flex gap-x-2 px-4 py-2 rounded-md hover:text-blue-600 transition-all"
          }
        >
          <TbListCheck size={18} />
          <span className="hidden lg:block">Orders info</span>
        </NavLink>
      </div>
      <Outlet />
    </section>
  );
};

export default ProfileLayout;
