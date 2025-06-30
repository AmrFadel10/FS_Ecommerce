const SideBarStoreSkeleton = () => {
  return (
    <div className="flex-1 flex gap-4 flex-col">
      <div className="shadow-md rounded-xl bg-white p-4 w-full ">
        <div className=" bg-white p-4 w-full">
          <h4 className="mb-4 p-2 w-3/4 bg-gray-300 rounded-lg"></h4>
          <ul className="flex  gap-5 mb-4 flex-col">
            <li className="p-1 bg-gray-300 rounded-lg w-1/3"></li>
            <li className="p-1 bg-gray-300 rounded-lg w-1/3"></li>
            <li className="p-1 bg-gray-300 rounded-lg w-1/3"></li>
          </ul>
        </div>
      </div>
      <div className="shadow-md rounded-xl bg-white p-4 w-full">
        <div className=" bg-white p-4 w-full">
          <h4 className="mb-4 p-2 w-3/4 bg-gray-300 rounded-lg"></h4>
          <ul className="flex  gap-5 mb-4 flex-col">
            <li className="p-1 bg-gray-300 rounded-lg w-1/3"></li>
            <li className="p-1 bg-gray-300 rounded-lg w-1/3"></li>
            <li className="p-1 bg-gray-300 rounded-lg w-1/3"></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBarStoreSkeleton;
