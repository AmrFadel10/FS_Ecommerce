//React
import { useState } from "react";

//Types
import type { TAddress } from "@customeTypes/address";

//Components
import CashOnDeliveryBtn from "./CashOnDeliveryBtn";
import AddressList from "@components/address/AddressList";

//ICONS
import { MdAdd } from "react-icons/md";

const CheckoutInfo = ({ handleOpenForm }: { handleOpenForm: () => void }) => {
  const [selectAddress, setSelectAddress] = useState<TAddress | null>(null);
  const handleSelectAddress = (address: TAddress) => {
    setSelectAddress(address);
  };

  return (
    <div className="flex-[3.5] py-12 px-12 bg-white rounded-xl shadow">
      <ul className="flex  text-gray-400 font-semibold gap-2 ">
        <li>Cart</li>&nbsp;{">"}&nbsp;
        <li className="text-gray-900">information & Shipping</li>&nbsp;
        {">"}&nbsp;
        <li>Payment</li>&nbsp;
      </ul>
      <div className={`flex justify-between items-center`}>
        <h2 className="text-xl my-8 font-semibold  w-fit">
          Shipping / Information
        </h2>
        <button
          onClick={handleOpenForm}
          className="bg-slate-800 hover:bg-slate-950 text-white text-sm px-3 py-2 rounded-md flex items-center gap-2 shadow-md cursor-pointer"
        >
          <MdAdd size={22} />
          Add New Address
        </button>
      </div>

      <AddressList
        handleSelectAddress={handleSelectAddress}
        selectAddress={selectAddress}
      />

      <CashOnDeliveryBtn selectAddress={selectAddress} />
    </div>
  );
};

export default CheckoutInfo;
