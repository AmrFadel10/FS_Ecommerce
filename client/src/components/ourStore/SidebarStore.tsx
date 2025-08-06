import SearchByCategory from "./SearchByCategory";
import SearchByBrand from "./SearchByBrand";
import SearchFromTo from "./SearchFromTo";
import { memo, type ChangeEvent } from "react";

export default memo(function SideBarStore({
  handleLowerAndGreaterthan,
  handleQueryLinks,
  gte,
  lte,
}: {
  handleLowerAndGreaterthan: (e: ChangeEvent<HTMLInputElement>) => void;
  handleQueryLinks: (key: string, value: string) => void;
  gte: string | null;
  lte: string | null;
}) {
  return (
    <div className="lg:flex flex-col gap-3 hidden">
      <SearchByCategory handleQueryLinks={handleQueryLinks} />
      <SearchByBrand handleQueryLinks={handleQueryLinks} />
      <SearchFromTo
        handleLowerAndGreaterthan={handleLowerAndGreaterthan}
        gte={gte}
        lte={lte}
      />
    </div>
  );
});
