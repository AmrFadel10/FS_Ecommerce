import AddressCardSkeleton from "@components/address/AddressCardSkeleton";

const AddressesSkeleton = () => {
  return (
    <section className="flex-[7] min-h-[600px] pl-8 animate-pulse">
      <div className="flex justify-between items-center mb-8">
        <h2 className="bg-gray-300 w-48 py-5 rounded-md"></h2>
        <div className="bg-gray-300 text-white text-sm w-48 py-5 rounded-md shadow-md "></div>
      </div>
      <div className={`flex flex-col gap-4 lg:min-h-[450px] min-h-[300px]`}>
        <AddressCardSkeleton />
        <AddressCardSkeleton />
      </div>
    </section>
  );
};

export default AddressesSkeleton;
