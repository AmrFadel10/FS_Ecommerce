export default function SearchByCategory() {
  return (
    <div className="shadow rounded-xl bg-white p-4 w-full">
      <h4 className="md:mb-8 mb-2 text-sm md:text-lg font-semibold">
        Shop By Categories
      </h4>
      <ul className="flex flex-col gap-2">
        <li className="text-xs md:text-sm text-gray-500 hover:text-gray-700 font-medium cursor-pointer">
          one
        </li>
        <li className="text-xs md:text-sm text-gray-500 hover:text-gray-700 font-medium cursor-pointer">
          two
        </li>
      </ul>
    </div>
  );
}
