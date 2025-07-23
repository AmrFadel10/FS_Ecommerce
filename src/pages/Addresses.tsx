//React && Redux
import { useCallback, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { cleanUpAddresses } from "@redux/address/slices/AddressesSlice";
import { cleanUpAddress } from "@redux/address/slices/AnAddressSlice";

//Types
import type { TAddress } from "@customeTypes/address";

//APIS
import { getAddressesApiCall } from "@redux/address/apiCalls/getAddressesApiCall";

//Icons
import { MdAdd } from "react-icons/md";

//Components
import AddressForm from "@components/address/AddressForm";
import AddressList from "@components/address/AddressList";
import Loading from "@feedback/loading/Loading";
import MetaTags from "@components/common/MetaTags";

const Addresses = () => {
  const [addAddress, setAddAddress] = useState(false);
  const dispatch = useAppDispatch();
  const [addressForUpdate, setAddressForUpdate] = useState<TAddress | null>(
    null
  );
  const { error, loading } = useAppSelector((state) => state.addresses);
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
    <Loading status={loading} error={error} type="address">
      <MetaTags title="Address" />

      <section className="flex-[7] min-h-[600px] lg:pl-8  px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="lg:text-3xl text-xl font-bold text-blue-600">
            My Addresses
          </h2>
          <button
            onClick={() => setAddAddress(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm lg:px-3 lg:py-2 p-1 rounded-md flex items-center gap-2 shadow-md cursor-pointer"
          >
            <MdAdd size={20} />
            <span className="lg:inline-block hidden">Add New Address</span>
          </button>
        </div>

        {/* Address List */}

        <AddressList handleOpenFormForUpdate={handleOpenFormForUpdate} />

        {/* Address Form */}
        {addAddress ? (
          <AddressForm
            handleCloseForm={handleCloseForm}
            addressForUpdate={addressForUpdate}
          />
        ) : null}
      </section>
    </Loading>
  );
};

export default Addresses;
