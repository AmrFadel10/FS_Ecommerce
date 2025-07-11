const AddressCardSkeleton = () => {
  return (
    <article className="bg-white rounded-xl p-5 shadow relative animate-pulse">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2 text-blue-600 rounded-lg">
          <h4 className="w-32 bg-gray-300 py-3 rounded-lg"></h4>
        </div>
        <div className=" flex items-center gap-2">
          <div className="w-4 py-2 bg-gray-300 rounded-md"></div>
          <div className="w-4 py-2 bg-gray-300 rounded-md"></div>
        </div>
      </div>
      <div className="space-y-1">
        <p className="bg-gray-300 w-40 py-2 rounded-md"></p>
        <p className="bg-gray-300 w-48 py-2 rounded-md"></p>
        <p className="bg-gray-300 w-40 py-2 rounded-md"></p>
      </div>
    </article>
  );
};

export default AddressCardSkeleton;
