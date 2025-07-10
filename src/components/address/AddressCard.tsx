import { Spinner } from "@components/common/Spinner";
import type { TAddress } from "@customeTypes/address";
import { deleteteAddressApiCall } from "@redux/address/apiCalls/deleteAddressApiCall";
import { useAppDispatch } from "@redux/hooks";
import { addToast } from "@redux/toast/slices/ToastSlice";
import { useState } from "react";
import { MdDelete, MdEdit, MdLocationOn } from "react-icons/md";
import { useLocation } from "react-router-dom";

const AddressCard = ({
  address,
  handleOpenFormForUpdate,
  handleSelectAddress,
  selectAddress,
}: {
  address: TAddress;
  handleOpenFormForUpdate?: (address: TAddress) => void;
  handleSelectAddress?: (address: TAddress) => void;
  selectAddress?: TAddress | null;
}) => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  const handleDeleteAddress = () => {
    setLoading(true);
    dispatch(deleteteAddressApiCall(address._id!))
      .unwrap()
      .then(() => {
        setLoading(false);
        addToast({ type: "success", comment: "Address was deleted!" });
      })
      .catch((err) => {
        setLoading(false);
        addToast({ type: "error", comment: err });
      });
  };

  return (
    <article
      key={address._id}
      className={`${
        selectAddress?._id === address._id
          ? " border-blue-700 "
          : " border-blue-200 "
      } border bg-white rounded-xl p-5 shadow hover:shadow-md transition-all  relative cursor-pointer`}
      onClick={() => {
        if (!handleSelectAddress) return;
        handleSelectAddress(address);
      }}
    >
      {location.pathname === "/profile/address" && handleOpenFormForUpdate && (
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 text-blue-600">
            <MdLocationOn size={22} />
            <h4 className="text-lg font-semibold">Address</h4>
          </div>
          <div className=" flex items-center gap-2">
            <button
              className="text-blue-600 hover:text-blue-700 cursor-pointer"
              onClick={() => handleOpenFormForUpdate(address)}
            >
              <MdEdit size={20} />
            </button>
            <button
              className="text-red-500 hover:text-red-600 cursor-pointer"
              onClick={handleDeleteAddress}
            >
              {loading ? <Spinner size={15} /> : <MdDelete size={20} />}
            </button>
          </div>
        </div>
      )}
      <div className="text-sm font-medium text-slate-500 space-y-1">
        <p className="text-sm font-medium">{address.addressLine}</p>
        <p className="text-sm font-medium">
          {address.city}, {address.state}, {address.country}
        </p>
        <p className="text-sm font-medium">ZIP Code: {address.zipCode}</p>
      </div>
    </article>
  );
};

export default AddressCard;
