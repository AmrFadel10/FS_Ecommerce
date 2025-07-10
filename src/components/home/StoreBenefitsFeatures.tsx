import { LuBadgePercent, LuHeadphones } from "react-icons/lu";
import { GoGift } from "react-icons/go";
import { BsTruck } from "react-icons/bs";
import { CiCreditCard1 } from "react-icons/ci";

const StoreInfoFeatures = () => {
  return (
    <section>
      <div className="px-12 py-2 grid lg:grid-cols-3 grid-cols-1 sm:grid-cols-2 gap-4 mx-auto xl:grid-cols-5">
        <div className="flex cats-center gap-6  rounded-xl shadow-sm bg-gray-50 p-4 mx-auto w-full">
          <BsTruck size={33} color="#2563EB" />
          <div>
            <h6 className="text-sm font-semibold">Free Shipping</h6>
            <p className="text-gray-500 text-xs">From all orders over $100</p>
          </div>
        </div>
        <div className="flex cats-center gap-6 rounded-xl shadow-sm bg-gray-50 p-4 mx-auto w-full">
          <GoGift size={33} color="#2563EB" />
          <div>
            <h6 className="text-sm font-semibold">Daily Surprise Offers</h6>
            <p className="text-gray-500 text-xs">Save up to 25% off</p>
          </div>
        </div>
        <div className="flex cats-center gap-6 rounded-xl shadow-sm bg-gray-50 p-4 mx-auto w-full">
          <LuHeadphones size={33} color="#2563EB" />
          <div>
            <h6 className="text-sm font-semibold">Support 24/7</h6>
            <p className="text-gray-500 text-xs">Shop with an expert</p>
          </div>
        </div>
        <div className="flex cats-center gap-6 rounded-xl shadow-sm bg-gray-50 p-4 mx-auto w-full">
          <LuBadgePercent size={33} color="#2563EB" />
          <div>
            <h6 className="text-sm font-semibold">Affordable Prices</h6>
            <p className="text-gray-500 text-xs">Get Factory direct price</p>
          </div>
        </div>
        <div className="flex cats-center gap-6 rounded-xl shadow-sm bg-gray-50 p-4 mx-auto w-full">
          <CiCreditCard1 size={35} color="#2563EB" />
          <div>
            <h6 className="text-sm font-semibold">Secure Payments</h6>
            <p className="text-gray-500 text-xs">100% Protected Payments</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoreInfoFeatures;
