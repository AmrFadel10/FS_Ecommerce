import ImageProductPage from "./ImagesProductPageSkeleton";
import RightSideProductPageSkeleton from "./RightSideProductPageSkeleton";

const AProductPageSkeleton = () => {
  return (
    <section className="mb-16 animate-pulse min-h-screen">
      <div className="flex my-8 gap-x-8 flex-col md:flex-row ">
        <ImageProductPage />
        <RightSideProductPageSkeleton />
      </div>
    </section>
  );
};

export default AProductPageSkeleton;
