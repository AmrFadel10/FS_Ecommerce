import { useAppSelector } from "@redux/hooks";

const SearchByBrand = ({
  handleQueryLinks,
}: {
  handleQueryLinks: (key: string, value: string) => void;
}) => {
  const { brands } = useAppSelector((state) => state.brands);
  return (
    <div className=" bg-white p-4 w-full shadow-md rounded-xl">
      <h4 className="mb-4 font-semibold">Brands:</h4>
      <ul className="flex  gap-2 mb-4 flex-wrap">
        <li
          className="px-2 py-1 hover:bg-gray-300 bg-gray-200 rounded-md text-gray-500 hover:text-gray-800 capitalize text-xs cursor-pointer"
          onClick={() => handleQueryLinks("brand", "")}
        >
          All
        </li>
        {brands.map((brand, index) => {
          return (
            <li
              className="px-2 py-1 hover:bg-gray-300 bg-gray-200 rounded-md text-gray-500 hover:text-gray-800 capitalize text-xs cursor-pointer"
              key={index}
              onClick={() => handleQueryLinks("brand", brand.title)}
            >
              {brand.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SearchByBrand;
