import ImageIcon from "@assets/svg/ImageIcon";

const ImageProductPage = () => {
  return (
    <div className="flex-1 flex flex-col gap-4 bg-white p-8 shadow-md rounded-xl animate-pulse">
      <div className=" h-full w-full flex items-center justify-center">
        <div className="w-full object-contain min-h-[400px]  bg-gray-300 flex justify-center items-center">
          <ImageIcon size={25} />
        </div>
      </div>
    </div>
  );
};

export default ImageProductPage;
