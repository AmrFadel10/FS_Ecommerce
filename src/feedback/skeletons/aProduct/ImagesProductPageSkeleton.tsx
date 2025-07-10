import ImageIcon from "@assets/svg/ImageIcon";

const ImageProductPage = () => {
  return (
    <div className="flex-1 flex flex-col gap-4 bg-white p-8 shadow-md rounded-xl animate-pulse">
      <div className=" h-[600px] w-full">
        <div className="w-full object-contain h-full border border-blue-200 bg-gray-300 flex justify-center items-center">
          <ImageIcon size={25} />
        </div>
      </div>
      <div className="w-full h-[300px] flex gap-2">
        <div className="flex-1 object-contain border border-blue-200 w-1/2 h-full bg-gray-300 flex justify-center items-center">
          <ImageIcon size={25} />
        </div>
        <div className="flex-1 object-contain border border-blue-200 w-1/2 h-full bg-gray-300 flex justify-center items-center">
          <ImageIcon size={25} />
        </div>
      </div>
    </div>
  );
};

export default ImageProductPage;
