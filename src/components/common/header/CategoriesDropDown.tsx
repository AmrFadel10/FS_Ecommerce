import type { TCategory } from "@types/common";

//type props
type PropsType = {
  setShowDropDown: React.Dispatch<React.SetStateAction<boolean>>;
  showDropDown: boolean;
  categories: TCategory[];
};

const CategoriesDropDown = ({
  setShowDropDown,
  showDropDown,
  categories,
}: PropsType) => {
  return (
    <ul
      className={`${
        showDropDown ? "max-h-[500px]" : "max-h-0"
      } absolute top-full left-0 lg:w-60 w-36 divide-y transition-all duration-500 divide-[#3b4149] bg-[#131921]  rounded-b-lg overflow-hidden select-none`}
    >
      {categories?.map((item, index) => {
        return (
          <div
            key={index}
            className="pl-3 py-4 text-sm block font-normal capitalize text-slate-200  hover:pl-[18px] transition-all hover:text-orange-300 cursor-pointer"
            onClick={() => setShowDropDown(false)}
          >
            {item?.title}
          </div>
        );
      })}
    </ul>
  );
};

export default CategoriesDropDown;
