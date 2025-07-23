import ImageIcon from "@assets/svg/ImageIcon";

const LayoutSkeleton = () => {
  return (
    <div className={`relative w-full md:h-[350px] lg:h-[400px] h-64`}>
      <div
        className={`w-full h-full bg-gray-300 flex justify-center items-center rounded-lg animate-pulse`}
      >
        <ImageIcon size={20} />
      </div>
    </div>
  );
};

export default LayoutSkeleton;
