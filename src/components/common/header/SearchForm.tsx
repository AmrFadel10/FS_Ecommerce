//React
import { useEffect, useState, type FormEvent } from "react";
import { useLocation, useNavigate } from "react-router-dom";
//ICONS
import { CiSearch } from "react-icons/ci";

const SearchForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [search, setSearch] = useState<string>("");

  const handleSearchForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!search.trim()) return;
    navigate(`/products?sr=${search}`);
  };

  useEffect(() => {
    if (location.pathname !== "/products") {
      setSearch("");
    }
  }, [location.pathname]);

  return (
    <form
      className="flex items-center order-4 lg:order-2 w-full lg:min-w-[500px] xl:min-w-[600px] relative lg:max-w-[400px]"
      onSubmit={handleSearchForm}
    >
      <input
        type="text"
        placeholder="Search Product Here ..."
        value={search}
        className="py-2 px-4 rounded-md rounded-r-none text-slate-800 bg-gray-50 ml-12 focus:outline-none w-full text-sm font-semibold h-9"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="bg-orange-400 h-9 w-14 flex justify-center items-center rounded-r-md hover:bg-orange-300 cursor-pointer">
        <CiSearch className="!text-slate-800 text-lg" />
      </button>
    </form>
  );
};

export default SearchForm;
