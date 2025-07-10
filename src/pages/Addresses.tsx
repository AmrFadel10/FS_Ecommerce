import { useCallback, useEffect, useState } from "react";
import { MdAdd } from "react-icons/md";
import { useAppDispatch } from "@redux/hooks";
import { getAddressesApiCall } from "@redux/address/apiCalls/getAddressesApiCall";
import { cleanUpAddresses } from "@redux/address/slices/AddressesSlice";
import AddressForm from "@components/address/AddressForm";
import type { TAddress } from "@customeTypes/address";
import { cleanUpAddress } from "@redux/address/slices/AnAddressSlice";
import AddressList from "@components/address/AddressList";

const Addresses = () => {
  const [addAddress, setAddAddress] = useState(false);
  const dispatch = useAppDispatch();
  const [addressForUpdate, setAddressForUpdate] = useState<TAddress | null>(
    null
  );

  const handleCloseForm = useCallback(() => {
    setAddressForUpdate(null);
    setAddAddress(false);
  }, []);

  const handleOpenFormForUpdate = useCallback((address: TAddress) => {
    setAddAddress(true);
    setAddressForUpdate(address);
  }, []);

  useEffect(() => {
    dispatch(getAddressesApiCall());
    return () => {
      dispatch(cleanUpAddresses());
      dispatch(cleanUpAddress());
    };
  }, [dispatch]);

  return (
    <section className="flex-[7] min-h-[600px] pl-8 py-6 bg-gray-50">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">My Addresses</h2>
        <button
          onClick={() => setAddAddress(true)}
          className="bg-slate-800 hover:bg-slate-950 text-white text-sm px-3 py-2 rounded-md flex items-center gap-2 shadow-md cursor-pointer"
        >
          <MdAdd size={22} />
          Add New Address
        </button>
      </div>

      {/* Address List */}

      <AddressList handleOpenFormForUpdate={handleOpenFormForUpdate} />

      {/* Address Form */}
      {addAddress ? (
        <div className="mt-10">
          <AddressForm
            handleCloseForm={handleCloseForm}
            addressForUpdate={addressForUpdate}
          />
        </div>
      ) : null}
    </section>
  );
};

export default Addresses;
