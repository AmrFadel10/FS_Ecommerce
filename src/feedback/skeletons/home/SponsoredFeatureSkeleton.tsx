import ImageIcon from "@assets/svg/ImageIcon";

const SponsoredFeatureSkeleton = () => {
  return (
    <section
      className={`bg-white py-6 px-4  rounded-xl overflow-x-auto hide-scrollbar shadow-sm`}
    >
      <div className=" items-center flex lg:gap-8 gap-4 ">
        <div className="flex-1 items-center justify-center h-28  object-cover flex bg-gray-300 animate-pulse rounded-xl">
          <ImageIcon size={20} />
        </div>

        <div className="flex-1 items-center justify-center h-28 object-cover flex bg-gray-300 animate-pulse rounded-xl">
          <ImageIcon size={20} />
        </div>

        <div className="flex-1 items-center justify-center h-28 object-cover flex bg-gray-300 animate-pulse rounded-xl">
          <ImageIcon size={20} />
        </div>

        <div className="flex-1 items-center justify-center h-28 object-cover flex bg-gray-300 animate-pulse rounded-xl">
          <ImageIcon size={20} />
        </div>
        <div className="flex-1 items-center justify-center h-28 object-cover flex bg-gray-300 animate-pulse rounded-xl">
          <ImageIcon size={20} />
        </div>
        <div className="flex-1 items-center justify-center h-28 object-cover flex bg-gray-300 animate-pulse rounded-xl">
          <ImageIcon size={20} />
        </div>
        <div className="flex-1 items-center justify-center h-28 object-cover flex bg-gray-300 animate-pulse rounded-xl">
          <ImageIcon size={20} />
        </div>
        <div className="flex-1 items-center justify-center h-28 object-cover flex bg-gray-300 animate-pulse rounded-xl">
          <ImageIcon size={20} />
        </div>
      </div>
    </section>
  );
};

export default SponsoredFeatureSkeleton;
