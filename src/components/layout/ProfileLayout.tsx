import { FaRegUser } from "react-icons/fa6";
import { TbListCheck } from "react-icons/tb";
import { NavLink, Outlet } from "react-router-dom";

const ProfileLayout = () => {
  return (
    <section className="flex py-12 ">
      <div className="flex-1 flex flex-col border-r border-slate-300  p-2  font-medium text-sm change-color divide-y">
        <NavLink
          to={"/profile"}
          end
          className={
            "flex gap-x-2 px-4 py-2 rounded-md hover:bg-slate-800 hover:text-slate-50 transition-all"
          }
        >
          <FaRegUser size={18} />
          Update info
        </NavLink>
        <NavLink
          to={"/profile/orders"}
          end
          className={
            "flex gap-x-2 px-4 py-2 rounded-md hover:bg-slate-800 hover:text-slate-50 transition-all"
          }
        >
          <TbListCheck size={18} />
          Orders info
        </NavLink>
      </div>
      <Outlet />
    </section>
  );
};

export default ProfileLayout;
