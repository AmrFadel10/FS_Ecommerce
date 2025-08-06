//React
import { useState } from "react";
import { useAppSelector } from "@redux/hooks";

//Types
import type { TAddress } from "@customeTypes/address";

//Components
import CashOnDeliveryBtn from "./CashOnDeliveryBtn";
import AddressList from "@components/address/AddressList";

//ICONS
import { MdAdd } from "react-icons/md";
import Loading from "@feedback/loading/Loading";

const CheckoutInfo = ({ handleOpenForm }: { handleOpenForm: () => void }) => {
  const [selectAddress, setSelectAddress] = useState<TAddress | null>(null);
  const { error, loading } = useAppSelector((state) => state.addresses);
  const handleSelectAddress = (address: TAddress) => {
    setSelectAddress(address);
  };

  return (
    <Loading error={error} status={loading} type="commonLoading">
      <div className="flex-[3.5] py-12 px-12 bg-white rounded-xl shadow order-2 lg:order-1">
        <ul className="flex items-center text-gray-400 font-semibold gap-2 ">
          <li>Cart</li>&nbsp;{">"}&nbsp;
          <li className="text-gray-900">information & Shipping</li>&nbsp;
          {">"}&nbsp;
          <li>Payment</li>&nbsp;
        </ul>
        <div className={`flex justify-between items-center`}>
          <h2 className="my-8 font-semibold  w-fit ">Shipping / Information</h2>
          <button
            onClick={handleOpenForm}
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm lg:px-3 lg:py-2 p-1 rounded-md flex items-center gap-2 shadow-md cursor-pointer"
          >
            <MdAdd size={22} />
            <span className="lg:inline-block hidden">Add New Address</span>
          </button>
        </div>

        <AddressList
          handleSelectAddress={handleSelectAddress}
          selectAddress={selectAddress}
        />

        <CashOnDeliveryBtn selectAddress={selectAddress} />
      </div>
    </Loading>
  );
};

export default CheckoutInfo;
