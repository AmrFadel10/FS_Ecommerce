import { Outlet } from "react-router-dom";

const ProfileLayoutSkeleton = () => {
  return (
    <section className="flex py-12 animate-pulse">
      <div className="flex-1 lg:min-w-60 flex flex-col border-r border-blue-200  p-2  font-medium text-sm change-color gap-y-3">
        <div className={" py-3 rounded-md bg-gray-300 "}></div>
        <div className={" py-3 rounded-md bg-gray-300 "}></div>
        <div className={" py-3 rounded-md bg-gray-300 "}></div>
      </div>
      <Outlet />
    </section>
  );
};

export default ProfileLayoutSkeleton;
