import ImageIcon from "@assets/svg/ImageIcon";

export default function BlogCardSkeleton() {
  return (
    <div className="relative rounded-xl overflow-hidden shadow-md bg-white">
      <div className="h-80 w-full flex justify-center items-center bg-gray-300">
        <ImageIcon size={20} />
      </div>
      <div className="md:px-4 md:py-4 p-3">
        <p className="bg-gray-300 w-1/2 p-2 rounded-lg"></p>
        <h4 className="md:my-3 my-1 p-3 rounded-lg bg-gray-300"></h4>
        <p className="bg-gray-300 w-full p-2 rounded-lg"></p>
        <p className="bg-gray-300 w-full p-2 rounded-lg"></p>
      </div>
    </div>
  );
}
