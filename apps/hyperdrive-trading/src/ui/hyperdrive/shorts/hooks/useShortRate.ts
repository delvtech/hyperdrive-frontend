import { FetchStatus, useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import { Address } from "viem";
interface UseImpliedRateOptions {
  hyperdriveAddress: Address | undefined;
  bondAmount: bigint | undefined;
  timestamp: bigint | undefined;
  variableApy: bigint | undefined;
}

/**
 * Returns the list of shorts that the account currently has open.
 */
export function useShortRate({
  bondAmount,
  timestamp,
  variableApy,
  hyperdriveAddress,
}: UseImpliedRateOptions): {
  impliedRate: bigint | undefined;
  impliedRateStatus: "error" | "success" | "loading";
  impliedRateFetchStatus: FetchStatus;
} {
  const readHyperdrive = useReadHyperdrive(hyperdriveAddress);
  const queryEnabled =
    !!readHyperdrive &&
    bondAmount !== undefined &&
    timestamp !== undefined &&
    variableApy !== undefined;

  const {
    data: impliedRate,
    status: impliedRateStatus,
    // If the query is disabled and does not have cached data, then the query
    // will start in the status === 'loading' and fetchStatus === 'idle' state.
    // This is needed to avoid showing infinite skeletons when the query is
    // disabled and not fetching.
    // See: https://tanstack.com/query/v4/docs/framework/react/guides/disabling-queries#:~:text=When%20enabled%20is%20false%3A,not%20automatically%20fetch%20on%20mount.
    fetchStatus: impliedRateFetchStatus,
  } = useQuery({
    queryKey: makeQueryKey("impliedRate", {
      hyperdriveAddress,
      bondAmount: bondAmount?.toString(),
      timestamp: timestamp?.toString(),
      variableApy: variableApy?.toString(),
    }),
    enabled: queryEnabled,
    queryFn: queryEnabled
      ? async () => {
          const result = await readHyperdrive.getImpliedRate({
            bondAmount,
            timestamp,
            variableApy,
          });
          return result;
        }
      : undefined,
  });

  return {
    impliedRate,
    impliedRateStatus,
    impliedRateFetchStatus,
  };
}
