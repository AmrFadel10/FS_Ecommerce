import { LuBadgePercent, LuHeadphones } from "react-icons/lu";
import { GoGift } from "react-icons/go";
import { BsTruck } from "react-icons/bs";
import { CiCreditCard1 } from "react-icons/ci";

const StoreInfoFeatures = () => {
  return (
    <section className="overflow-x-auto lg:overflow-x-visible hide-scrollbar">
      <div className="py-2 flex flex-nowrap lg:flex-wrap flex-row  gap-4 mx-auto xl:grid-cols-5  ">
        <div className="flex  cats-center gap-6  rounded-xl shadow-sm bg-gray-50 p-4 mx-auto w-fit">
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
        <div className="flex cats-center gap-6 rounded-xl shadow-sm bg-gray-50 p-4 mx-auto w-fit">
          <GoGift size={33} color="#2563EB" />
          <div>
            <h6 className="text-sm font-semibold whitespace-nowrap">
              Daily Surprise Offers
            </h6>
            <p className="text-gray-500 text-xs whitespace-nowrap">
              Save up to 25% off
            </p>
          </div>
        </div>
        <div className="flex cats-center gap-6 rounded-xl shadow-sm bg-gray-50 p-4 mx-auto w-fit">
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
        <div className="flex cats-center gap-6 rounded-xl shadow-sm bg-gray-50 p-4 mx-auto w-fit">
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
        <div className="flex cats-center gap-6 rounded-xl shadow-sm bg-gray-50 p-4 mx-auto w-fit">
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
