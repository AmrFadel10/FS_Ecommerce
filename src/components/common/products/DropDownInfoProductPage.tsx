import { useState } from "react";
//Icons
import { CiDeliveryTruck } from "react-icons/ci";
import { IoIosArrowUp } from "react-icons/io";
import { SiMaterialdesignicons } from "react-icons/si";
import { CiHeart } from "react-icons/ci";

const DropDownInfo = () => {
  const [open, setOpen] = useState<number>(0);

  const dropDownHandle = (num: number) => {
    if (num == open) {
      setOpen(0);
    } else {
      setOpen(num);
    }
  };

  return (
    <div>
      <div className="mt-6">
        <div className="py-3 border-b border-slate-300">
          <div
            className="flex justify-between cursor-pointer"
            onClick={() => dropDownHandle(1)}
          >
            <span className="flex gap-x-3 items-center text-sm">
              <CiDeliveryTruck size={20} />
              Shipping & Returns
            </span>
            <IoIosArrowUp
              className={`${
                open === 1 ? "rotate-180" : "rotate-0"
              } transition-all`}
            />
          </div>
          {open === 1 && (
            <div className={`pl-2 block mt-2 text-gray-500 text-xs `}>
              Free shipping and returns available on all orders! <br />
              We ship all US domestic orders within{" "}
              <span className="text-gray-800 font-semibold">
                5-10 business days!
              </span>
            </div>
          )}
        </div>
        <div className="py-3 border-b border-slate-300">
          <div
            className="flex justify-between cursor-pointer"
            onClick={() => dropDownHandle(2)}
          >
            <span className="flex gap-x-4 items-center text-sm">
              <SiMaterialdesignicons size={15} />
              Materials
            </span>
            <IoIosArrowUp
              className={`${
                open === 2 ? "rotate-180" : "rotate-0"
              } transition-all`}
            />
          </div>
          {open === 2 && (
            <div className={`pl-2 block mt-2 text-gray-500 text-xs `}>
              Running Shoes cushions your stride with soft foam to keep you
              running in comfort. Lightweight knit material wraps your foot in
              breathable support, while a minimalist design fits in just about
              anywhere your day takes you.
            </div>
          )}
        </div>
        <div className="py-3 border-b border-slate-300">
          <div
            className="flex justify-between cursor-pointer"
            onClick={() => dropDownHandle(3)}
          >
            <span className="flex gap-x-3 items-center text-sm">
              <CiHeart size={20} />
              Care Instructions
            </span>
            <IoIosArrowUp
              className={`${
                open === 3 ? "rotate-180" : "rotate-0"
              } transition-all`}
            />
          </div>
          {open === 3 && (
            <div className={`pl-2 block mt-2 text-gray-500 text-xs `}>
              Use a soft damp cloth and a drop of mild soap to remove any haze.
              Air dry.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DropDownInfo;
