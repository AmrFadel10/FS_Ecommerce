/* eslint-disable @typescript-eslint/no-explicit-any */

import { useAppDispatch, useAppSelector } from "@redux/hooks";
import type { RootState } from "@redux/store";
import { useEffect } from "react";

interface UseLoadDataParams {
  cleanUpAction: () => any;
  getDataAction: () => any;
  stateName: string;
  id?: string;
  userId?: string;
}
const useLoadDataWithCleanup = ({
  cleanUpAction,
  getDataAction,
  stateName,
  id,
  userId,
}: UseLoadDataParams) => {
  const dispatch = useAppDispatch();
  const { data, loading, error } = useAppSelector(
    (state) => state[stateName as keyof RootState]
  ) as { data: any; loading: any; error: any };

  useEffect(() => {
    const promise = dispatch(getDataAction());
    return () => {
      promise.abort();
      dispatch(cleanUpAction());
    };
  }, [dispatch, id]);

  return { data, loading, error, userId };
};

export default useLoadDataWithCleanup;
