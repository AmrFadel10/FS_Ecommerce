//Icons
import { LuBadgePercent, LuHeadphones } from "react-icons/lu";
import { BsTruck } from "react-icons/bs";
import { CiCreditCard1 } from "react-icons/ci";
import { GoGift } from "react-icons/go";

const StoreInfoFeatures = () => {
  return (
    <section className="overflow-x-auto  hide-scrollbar ">
      <div className="py-2 flex flex-nowrap justify-start flex-row  gap-4 mx-auto w-full items-start ">
        <div className="flex  cats-center gap-6  rounded-xl shadow-sm bg-gray-50 p-4 mx-auto ">
          <BsTruck size={33} color="#2563EB" />
          <div>
            <h6 className="text-sm font-semibold whitespace-nowrap">
              Free Shipping
            </h6>
            <p className="text-gray-500 text-xs whitespace-nowrap">
              From all orders over $100
            </p>
          </div>
        </div>

        <div className="flex cats-center gap-6 rounded-xl shadow-sm bg-gray-50 p-4 mx-auto ">
          <LuHeadphones size={33} color="#2563EB" />
          <div>
            <h6 className="text-sm font-semibold whitespace-nowrap">
              Support 24/7
            </h6>
            <p className="text-gray-500 text-xs whitespace-nowrap">
              Shop with an expert
            </p>
          </div>
        </div>
        <div className="flex cats-center gap-6 rounded-xl shadow-sm bg-gray-50 p-4 mx-auto ">
          <LuBadgePercent size={33} color="#2563EB" />
          <div>
            <h6 className="text-sm font-semibold whitespace-nowrap">
              Affordable Prices
            </h6>
            <p className="text-gray-500 text-xs whitespace-nowrap">
              Get Factory direct price
            </p>
          </div>
        </div>
        <div className="flex cats-center gap-6 rounded-xl shadow-sm bg-gray-50 p-4 mx-auto ">
          <GoGift size={35} color="#2563EB" />
          <div>
            <h6 className="text-sm font-semibold whitespace-nowrap">
              Daily Surprise Offers
            </h6>
            <p className="text-gray-500 text-xs whitespace-nowrap">
              Save up to 25% off
            </p>
          </div>
        </div>
        <div className="flex cats-center gap-6 rounded-xl shadow-sm bg-gray-50 p-4 mx-auto ">
          <CiCreditCard1 size={35} color="#2563EB" />
          <div>
            <h6 className="text-sm font-semibold whitespace-nowrap">
              Secure Payments
            </h6>
            <p className="text-gray-500 text-xs whitespace-nowrap">
              100% Protected Payments
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoreInfoFeatures;
