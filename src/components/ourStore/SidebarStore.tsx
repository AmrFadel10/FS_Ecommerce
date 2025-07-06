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
      {/* </div> */}
      {/**
      <div className="rounded-xl bg-white p-4 w-full">
        <h4 className="mb-8 text-lg font-semibold">Random Products</h4>
        <ul className="flex  gap-2 mb-4 flex-wrap divide-y">
          {products?.slice(0, 3).map((product, index) => {
            return (
              <li className="flex items-center p-4 gap-3" key={index}>
                <Link to={product._id}>
                  <img src={product?.images?.[0]?.url}         loading="lazy"
 alt="img" />
                </Link>
                <div>
                  <p
                    className="font-semibold line-clamp-2"
                    dangerouslySetInnerHTML={{ __html: product.description }}
                  ></p>
                  {/* <ReactStars count={5} size={24} value={3} activeColor="#ffd700" /> */}
      {/** <span className="font-semibold">{product.price}$</span>
                </div>
              </li>
            );
          })}
        </ul>
      </div> 
      */}
    </div>
  );
});
