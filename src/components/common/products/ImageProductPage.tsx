import type { TImage } from "@customeTypes/common";

const ImageProductPage = ({ images }: { images: TImage[] }) => {
  return (
    <div className="flex-1 flex flex-col gap-4 bg-white p-8 shadow-md rounded-xl">
      <div className=" h-[600px] w-full">
        <img
          src={images[0].url}
          alt="img"
          className="w-full object-contain h-full border border-gray-200"
        />
      </div>
      <div className="w-full h-[300px] flex gap-2">
        <img
          src={images.length == 2 ? images[1].url : images[0].url}
          alt="img"
          className="flex-1 object-contain border border-gray-200 w-1/2 h-full"
        />
        <img
          src={images.length === 3 ? images[2].url : images[0].url}
          alt="img"
          className="flex-1 object-contain border border-gray-200 w-1/2 h-full"
        />
      </div>
    </div>
  );
};

export default ImageProductPage;
