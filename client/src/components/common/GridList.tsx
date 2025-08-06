import type { TLoading } from "@customeTypes/common";
import { type ComponentType } from "react";
import Empty from "./Empty";

const GridList = <T,>({
  items,
  where,
  Component,
  loading,
}: {
  items: T[];
  where?: string;
  Component: ComponentType<T>;
  loading: TLoading;
}) => {
  return (
    <div
      className={`${
        where === "public"
          ? "flex flex-nowrap min-h-[350px] items-start"
          : where === "blog"
          ? "grid  xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 min-h-[650px] items-start"
          : where === "wishlist"
          ? "grid  xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 min-h-[650px] items-start"
          : items.length
          ? "grid  xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 grid-cols-2 sm:grid-cols-3 min-h-[650px] items-start"
          : ""
      } gap-4 my-6`}
    >
      {items?.length > 0 && loading === "succeeded" ? (
        <>
          {items.map((item: T, index) => (
            <Component {...item} key={index} where={where} />
          ))}
        </>
      ) : (
        <Empty />
      )}
    </div>
  );
};

export default GridList;
