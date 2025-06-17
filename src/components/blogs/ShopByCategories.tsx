import { useAppSelector } from "@redux/hooks";

export default function ShopByCategories() {
  const { categories } = useAppSelector((state) => state.categories);

  return (
    <div className="shadow rounded-xl bg-white p-4 w-full">
      <h4 className="md:mb-8 mb-2 text-sm md:text-lg font-semibold">
        Shop By Categories
      </h4>
      <ul className="flex flex-col gap-2">
        {categories?.map((item) => {
          return (
            <li
              key={item._id}
              className="text-xs md:text-sm text-gray-500 hover:text-gray-700 font-medium cursor-pointer"
            >
              {item.title}
            </li>
          );
        })}

        {/* <Link
					to={"#"}
					className="text-sm text-gray-500 hover:text-gray-700 font-medium"
				>
					Tv
				</Link>
				<Link
					to={"#"}
					className="text-sm text-gray-500 hover:text-gray-700 font-medium"
				>
					Camera
				</Link>
				<Link
					to={"#"}
					className="text-sm text-gray-500 hover:text-gray-700 font-medium"
				>
					Laptop
				</Link> */}
      </ul>
    </div>
  );
}
