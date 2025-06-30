import ImageIcon from "@assets/svg/ImageIcon";

const SponsoredFeatureSkeleton = () => {
  return (
    <section className={`bg-white py-6 px-4  rounded-xl  shadow-sm`}>
      <div className="justify-between items-center w-full  flex gap-8">
        <div className="flex-1 items-center justify-center h-28 object-cover flex bg-gray-300 animate-pulse rounded-xl">
          <ImageIcon size={12} />
        </div>

        <div className="flex-1 items-center justify-center h-28 object-cover flex bg-gray-300 animate-pulse rounded-xl">
          <ImageIcon size={12} />
        </div>

        <div className="flex-1 items-center justify-center h-28 object-cover flex bg-gray-300 animate-pulse rounded-xl">
          <ImageIcon size={12} />
        </div>

        <div className="flex-1 items-center justify-center h-28 object-cover flex bg-gray-300 animate-pulse rounded-xl">
          <ImageIcon size={12} />
        </div>
        <div className="flex-1 items-center justify-center h-28 object-cover flex bg-gray-300 animate-pulse rounded-xl">
          <ImageIcon size={12} />
        </div>
        <div className="flex-1 items-center justify-center h-28 object-cover flex bg-gray-300 animate-pulse rounded-xl">
          <ImageIcon size={12} />
        </div>
        <div className="flex-1 items-center justify-center h-28 object-cover flex bg-gray-300 animate-pulse rounded-xl">
          <ImageIcon size={12} />
        </div>
        <div className="flex-1 items-center justify-center h-28 object-cover flex bg-gray-300 animate-pulse rounded-xl">
          <ImageIcon size={12} />
        </div>
      </div>
    </section>
  );
};

export default SponsoredFeatureSkeleton;
