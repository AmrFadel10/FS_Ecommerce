import { GrNext, GrPrevious } from "react-icons/gr";

const ArrowsToRightAndLeft = ({
  productRef,
  length,
}: {
  productRef: React.RefObject<HTMLDivElement | null>;
  length: number;
}) => {
  return (
    <>
      <div
        className={`${
          length > 4 ? "md:block" : ""
        } absolute hidden  md:left-2 top-1/2 -translate-y-1/2 shadow-lg z-10 cursor-pointer hover:bg-gray-200 bg-white p-3 rounded-full`}
        onClick={() => {
          productRef.current?.scrollBy({
            behavior: "smooth",
            left: -800,
          });
        }}
      >
        <GrPrevious size={26} />
      </div>
      <div
        className={`${
          length > 4 ? "md:block" : ""
        } absolute hidden   md:right-2 top-1/2 -translate-y-1/2 shadow-lg z-10 cursor-pointer hover:bg-gray-200 bg-white p-3 rounded-full`}
        onClick={() => {
          productRef.current?.scrollBy({
            behavior: "smooth",
            left: 800,
          });
        }}
      >
        <GrNext size={26} />
      </div>
    </>
  );
};

export default ArrowsToRightAndLeft;
