const AccountInfoSkeleton = () => {
  return (
    <form className="flex-[5] px-6 flex flex-col gap-y-8 min-h-[500px] animate-pulse">
      <h2 className=" bg-gray-300 rounded-md py-4 w-48"></h2>
      <div className="flex flex-col gap-y-1  max-w-[400px] w-full mx-auto">
        <div className="py-2 bg-gray-300 rounded-md w-10"></div>
        <div className="rounded-md px-3 w-full py-5 bg-gray-300 "></div>
      </div>
      <div className="flex flex-col gap-y-1  max-w-[400px] w-full mx-auto">
        <div className="py-2 bg-gray-300 rounded-md w-10"></div>
        <div className="rounded-md px-3 w-full py-5 bg-gray-300 "></div>
      </div>
      <div className="flex flex-col gap-y-1 mx-auto  max-w-[400px] w-full ">
        <div className="py-2 bg-gray-300 rounded-md w-10"></div>
        <div className="rounded-md px-3 w-full py-5 bg-gray-300 "></div>
      </div>
      <div className="flex flex-col gap-y-1  max-w-[400px] w-full mx-auto">
        <div className="py-2 bg-gray-300 rounded-md w-10"></div>
        <div className="rounded-md px-3 w-full py-5 bg-gray-300 "></div>
      </div>
      <div
        className={`max-w-[400px] w-full mx-auto h-[40px] rounded-md py-4 bg-gray-300`}
      ></div>
    </form>
  );
};

export default AccountInfoSkeleton;
