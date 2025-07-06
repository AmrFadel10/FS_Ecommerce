import type { ChangeEvent } from "react";

const SearchFromTo = ({
  handleLowerAndGreaterthan,
  gte,
  lte,
}: {
  handleLowerAndGreaterthan: (e: ChangeEvent<HTMLInputElement>) => void;
  gte: string | null;
  lte: string | null;
}) => {
  return (
    <div className=" p-4 bg-white rounded-xl shadow-md">
      <h5 className="font-medium mb-4">Price</h5>
      <div className="flex gap-2 flex-wrap  text-xs">
        <div className="flex gap-2 items-center">
          <span className="text-gray-400">$</span>
          <input
            type="number"
            className="bg-gray-200 focus:outline-none p-2 rounded-sm"
            placeholder="From"
            name="gte"
            defaultValue={gte || 0}
            min={0}
            onChange={handleLowerAndGreaterthan}
          />
        </div>
        <div className="flex gap-2 items-center">
          <span className="text-gray-400">$</span>
          <input
            type="number"
            className="bg-gray-200 focus:outline-none p-2 rounded-sm"
            placeholder="To"
            name="lte"
            defaultValue={lte || 0}
            min={0}
            onChange={handleLowerAndGreaterthan}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchFromTo;
