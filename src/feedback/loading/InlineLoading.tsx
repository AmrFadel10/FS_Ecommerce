import { Spinner } from "@components/common/Spinner";

const InlineLoading = () => {
  return (
    <div className="flex justify-center items-center flex-[7] min-h-96 w-full">
      <Spinner size={40} color="#2563eb" />
    </div>
  );
};

export default InlineLoading;
