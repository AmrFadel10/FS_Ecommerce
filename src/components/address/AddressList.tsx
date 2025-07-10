import AddressCard from "./AddressCard";
import type { TAddress } from "@customeTypes/address";
import Empty from "@components/common/Empty";
import { useAppSelector } from "@redux/hooks";

const AddressList = ({
  handleOpenFormForUpdate,
  handleSelectAddress,
  selectAddress,
}: {
  handleSelectAddress?: (address: TAddress) => void;
  handleOpenFormForUpdate?: (address: TAddress) => void;
  selectAddress?: TAddress | null;
}) => {
  const { addresses } = useAppSelector((state) => state.addresses);

  return (
    <section className="overflow-y-auto max-h-[400px]">
      {addresses.length > 0 ? (
        <div className={`flex flex-col gap-4 lg:min-h-[450px] min-h-[300px]`}>
          {addresses.map((address) => (
            <AddressCard
              key={address._id}
              address={address}
              handleOpenFormForUpdate={handleOpenFormForUpdate}
              handleSelectAddress={handleSelectAddress}
              selectAddress={selectAddress}
            />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center lg:min-h-[450px] min-h-[300px] ">
          <Empty />
        </div>
      )}
    </section>
  );
};

export default AddressList;
