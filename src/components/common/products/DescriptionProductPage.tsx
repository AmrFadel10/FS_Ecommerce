import { memo } from "react";

const DescriptionProductPage = memo(
  ({ description }: { description: string }) => {
    return (
      <div className="my-12 ">
        <h3 className="font-semibold mb-4 text-2xl text-slate-700">
          Description
        </h3>
        <div
          className="shadow-md bg-white p-6  text-sm rounded-lg leading-6"
          dangerouslySetInnerHTML={{ __html: description }}
        ></div>
      </div>
    );
  }
);

export default DescriptionProductPage;
