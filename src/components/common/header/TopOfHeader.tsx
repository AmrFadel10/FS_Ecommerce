//Icons
import { HiOutlineTruck } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import { VscError } from "react-icons/vsc";

const TopOfHeader = () => {
  return (
    <div className=" text-gray-500 font-light bg-gray-100 py-3">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-xs">Welcome to worldwide Mega!</p>
        <div className="flex gap-x-2 items-center divide-x divide-gray-300">
          <div className="flex gap-x-1 items-center text-xs px-2">
            <IoLocationOutline size={14} color="#2563EB" />
            <span className="mt-[2px]">Deliver to 423651</span>
          </div>
          <div className="flex gap-x-1 items-center text-xs px-2">
            <HiOutlineTruck size={14} color="#2563EB" />
            <span className="mt-[2px]">Track your order</span>
          </div>
          <div className="flex gap-x-1 items-center text-xs px-2">
            <VscError size={14} color="#2563EB" />
            <span className="mt-[2px]">All Offers</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopOfHeader;
