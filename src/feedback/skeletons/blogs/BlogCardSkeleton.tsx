import ImageIcon from "@assets/svg/ImageIcon";

export default function BlogCardSkeleton() {
  return (
    <div className="relative rounded-xl overflow-hidden shadow-md bg-white shrink-0">
      <div className=" flex justify-center items-center bg-gray-300 md:h-64 h-60">
        <ImageIcon size={240} />
      </div>
      <div className="md:px-4 md:py-4 p-3">
        <p className="bg-gray-300 w-1/2 p-2 rounded-lg"></p>
        <h4 className="md:my-3 my-1 p-3 rounded-lg bg-gray-300"></h4>
        <p className="bg-gray-300 w-full p-2 rounded-lg"></p>
        <p className="bg-gray-300 w-64 p-2 rounded-lg"></p>
      </div>
    </div>
  );
}
