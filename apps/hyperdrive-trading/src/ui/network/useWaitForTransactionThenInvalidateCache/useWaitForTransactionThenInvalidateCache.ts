import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useRef } from "react";
import { Hash } from "viem";
import { useWaitForTransactionReceipt } from "wagmi";

// This is a wrapper around wagmi's useWaitForTransaction that will also
// invalidate wagmi's cache once the tx is confirmed. This makes it so
// useContractRead callers (for things like balances, reserves, allowances,
// etc..) will refetch after a tx is confirmed.
/**
 * @deprecated use an async onSuccess callback and invalidateQueries directly
 */
export function useWaitForTransactionThenInvalidateCache({
  hash,
}: {
  hash: Hash | undefined;
}): { status: "error" | "pending" | "success" } {
  const { status } = useWaitForTransactionReceipt({
    hash,
  });

  const queryClient = useQueryClient();
  // This ref allows us to track and make sure we only bust the cache once after
  // the tx is confirmed.
  const isCacheInvalidated = useRef(false);
  useEffect(() => {
    if (status === "success" && !isCacheInvalidated.current) {
      queryClient.invalidateQueries();
      isCacheInvalidated.current = true;
    }
  }, [queryClient, status]);

  return { status };
}
