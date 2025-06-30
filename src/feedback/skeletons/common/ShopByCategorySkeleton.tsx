const ShopByCategorySkeleton = () => {
  return (
    <div className="mt-10 shadow rounded-xl bg-white p-4 w-full animate-pulse">
      <h3 className="md:mb-8 mb-2 bg-gray-300 p-2 w-3/4 rounded-lg"></h3>
      <ul className="flex flex-col gap-3">
        {Array(6)
          .fill(1)
          .map((_, idx) => {
            return (
              <li key={idx} className="p-1 w-1/2 rounded-lg bg-gray-300"></li>
            );
          })}
      </ul>
    </div>
  );
};

export default ShopByCategorySkeleton;
