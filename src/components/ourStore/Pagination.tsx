import { useAppSelector } from "@redux/hooks";
import { useSearchParams } from "react-router-dom";

const Pagination = ({ variable }: { variable: "products" | "orders" }) => {
  const { count } = useAppSelector((state) => state[variable]);
  const lastPage = Math.ceil(count! / 8);
  const [query, setQuery] = useSearchParams();
  const page = query.get("page") || 1;
  const nums = Array(lastPage).fill(1);

  return (
    <section className="w-full flex gap-x-2 justify-center my-8 text-sm font-medium">
      <button
        className={`${
          page == 1
            ? "cursor-no-drop opacity-65"
            : "hover:bg-blue-700 hover:text-gray-50 cursor-pointer"
        } border border-gray-400 rounded-md py-[2px] px-3  bg-white transition`}
        onClick={() => {
          if (page && !isNaN(+page)) {
            if (+page <= 1) {
              return;
            } else {
              query.set("page", `${+page - 1}`);
            }
            setQuery(query);
          }
        }}
      >
        Prev
      </button>
      {nums.map((_, index) => {
        return (
          <button
            key={index}
            className={`${
              page == index + 1
                ? "bg-blue-600 text-gray-50"
                : "hover:bg-blue-700 hover:text-gray-50 bg-white"
            } border border-gray-400 rounded-md py-[2px] px-3   transition hover:cursor-pointer`}
            onClick={() => {
              query.set("page", `${index + 1}`);
              setQuery(query);
            }}
          >
            {index + 1}
          </button>
        );
      })}

      <button
        className={`${
          +page == lastPage
            ? "cursor-no-drop opacity-65"
            : "hover:bg-blue-700 hover:text-gray-50 cursor-pointer"
        } border border-gray-400 rounded-md py-[2px] px-3  bg-white transition `}
        onClick={() => {
          if (page && !isNaN(+page)) {
            if (+page >= lastPage) {
              return;
            } else {
              query.set("page", `${+page + 1}`);
            }
            setQuery(query);
          }
        }}
      >
        Next
      </button>
    </section>
  );
};

export default Pagination;
