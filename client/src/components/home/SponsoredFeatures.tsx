const SponsoredFeatures = () => {
  return (
    <section className={`bg-white py-6  rounded-xl  shadow-sm `}>
      <div className="justify-between items-center w-full  flex gap-8  overflow-x-auto hide-scrollbar">
        <img
          loading="lazy"
          src="/assets/images/sponsored/canon.webp"
          alt="img"
          className="flex-1 h-28 object-cover flex"
        />

        <img
          loading="lazy"
          src="/assets/images/sponsored/lg.webp"
          className="flex-1 h-28 object-cover flex"
          alt="img"
        />

        <img
          loading="lazy"
          src="/assets/images/sponsored/samsung.avif"
          className="flex-1 h-20 object-cover"
          alt="img"
        />

        <img
          loading="lazy"
          src="/assets/images/sponsored/intel.avif"
          className="flex-1 h-28 object-cover flex"
          alt="img"
        />
        <img
          loading="lazy"
          src="/assets/images/sponsored/sony.webp"
          className="flex-1 h-28 object-cover flex"
          alt="img"
        />
        <img
          loading="lazy"
          src="/assets/images/sponsored/apple.webp"
          className="flex-1 h-28 object-cover flex"
          alt="img"
        />
        <img
          loading="lazy"
          src="/assets/images/sponsored/sandisk.webp"
          className="flex-1 h-28 object-cover flex"
          alt="img"
        />
        <img
          loading="lazy"
          src="/assets/images/sponsored/dell.webp"
          className="flex-1 h-28 object-cover flex"
          alt="img"
        />
      </div>
    </section>
  );
};

export default SponsoredFeatures;
