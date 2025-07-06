import { useAppSelector } from "@redux/hooks";

export default function SearchByCategory({
  handleQueryLinks,
}: {
  handleQueryLinks: (key: string, value: string) => void;
}) {
  const { categories } = useAppSelector((state) => state.categories);
  return (
    <div className="shadow-md rounded-xl bg-white p-4 w-full">
      <h4 className="mb-4 font-semibold">Shop By Categories:</h4>
      <ul className="flex flex-col gap-2">
        <li
          className="text-xs md:text-sm text-gray-500 hover:text-gray-700 font-medium cursor-pointer capitalize"
          onClick={() => handleQueryLinks("category", "")}
        >
          All
        </li>
        {categories.map((category, index) => {
          return (
            <li
              className="text-xs md:text-sm text-gray-500 hover:text-gray-700 font-medium cursor-pointer capitalize"
              key={index}
              onClick={() => handleQueryLinks("category", category.title)}
            >
              {category.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
