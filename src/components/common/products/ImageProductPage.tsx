import { memo } from "react";
import type { TImage } from "@customeTypes/common";

const ImageProductPage = memo(({ images }: { images: TImage[] }) => {
  return (
    <div className="flex-1 flex items-center justify-center bg-white p-4 shadow-md rounded-xl">
      <div className=" min-h-[500px]  lg:min-w-[450px] min-w-[350px]">
        <img src={images[0].url} alt="img" className="w-full h-full " />
      </div>
    </div>
  );
});

export default ImageProductPage;
