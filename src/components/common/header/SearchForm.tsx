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
        className="py-2 px-4 rounded-md rounded-r-none text-gray-500 bg-blue-50 ml-12 focus:outline-none w-full text-sm h-9"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="bg-blue-50 !text-blue-500 hover:text-blue-600 h-9 w-14 flex justify-center items-center rounded-r-md  cursor-pointer">
        <CiSearch className="" size={23} />
      </button>
    </form>
  );
};

export default SearchForm;
