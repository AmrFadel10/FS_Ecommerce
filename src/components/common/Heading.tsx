import { memo } from "react";

const Heading = memo(({ title }: { title: string }) => {
  return (
    <h3 className="font-semibold mb-4 text-gray-800 text-sm md:text-base whitespace-nowrap">
      {title}:
    </h3>
  );
});

export default Heading;
