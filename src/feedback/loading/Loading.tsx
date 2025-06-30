import type { TLoading } from "@customeTypes/common";
import type { ReactNode } from "react";

const Loading = ({
  status,
  error,
  children,
}: {
  status: TLoading;
  error: string | null;
  children: ReactNode;
}) => {
  if (status === "pending") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>{error}</div>;
  }

  return <>{children}</>;
};

export default Loading;
