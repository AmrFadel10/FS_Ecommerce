import ImageIcon from "@assets/svg/ImageIcon";

const LayoutSkeleton = () => {
  return (
    <div className={`h-[450px] relative w-full overflow-hidden`}>
      <div
        className={`w-full h-full bg-gray-300 flex justify-center items-center rounded-lg animate-pulse`}
      >
        <ImageIcon size={20} />
      </div>
    </div>
  );
};

export default LayoutSkeleton;
