import { getHyperdriveConfig } from "@delvtech/hyperdrive-appconfig";
import { getHprFromApr } from "@delvtech/hyperdrive-js";
import { useQuery } from "@tanstack/react-query";
import { formatRate } from "src/base/formatRate";
import { makeQueryKey } from "src/base/makeQueryKey";
import { getStatus } from "src/base/queryStatus";
import { useAppConfigForConnectedChain } from "src/ui/appconfig/useAppConfigForConnectedChain";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import { Address } from "viem";

/**
 * Returns the list of shorts that the account currently has open.
 */
export function useShortRate({
  bondAmount,
  timestamp,
  variableApy,
  hyperdriveAddress,
  chainId,
}: {
  hyperdriveAddress: Address | undefined;
  chainId: number;
  bondAmount: bigint | undefined;
  timestamp: bigint | undefined;
  variableApy: bigint | undefined;
}): {
  shortApr: { apr: bigint; formatted: string } | undefined;
  shortRoi: { roi: bigint; formatted: string } | undefined;
  shortRateStatus: "loading" | "error" | "success" | "idle";
} {
  const appConfig = useAppConfigForConnectedChain();
  const readHyperdrive = useReadHyperdrive({
    chainId,
    address: hyperdriveAddress,
  });
  const queryEnabled =
    !!hyperdriveAddress &&
    !!readHyperdrive &&
    bondAmount !== undefined &&
    timestamp !== undefined &&
    variableApy !== undefined;

  const {
    data,
    status,
    // If the query is disabled and does not have cached data, then the query
    // will start in the status === 'loading' and fetchStatus === 'idle' state.
    // This is needed to avoid showing infinite skeletons when the query is
    // disabled and not fetching.
    // See: https://tanstack.com/query/v4/docs/framework/react/guides/disabling-queries#:~:text=When%20enabled%20is%20false%3A,not%20automatically%20fetch%20on%20mount.
    fetchStatus,
  } = useQuery({
    queryKey: makeQueryKey("shortRate", {
      chainId,
      hyperdriveAddress,
      bondAmount: bondAmount?.toString(),
      timestamp: timestamp?.toString(),
      variableApy: variableApy?.toString(),
    }),
    enabled: queryEnabled,
    queryFn: queryEnabled
      ? async () => {
          const hyperdrive = getHyperdriveConfig({
            hyperdriveChainId: chainId,
            hyperdriveAddress,
            appConfig,
          });
          const shortApr = await readHyperdrive.getImpliedRate({
            bondAmount,
            timestamp,
            variableApy,
          });
          const shortRoi = getHprFromApr(
            shortApr,
            hyperdrive.poolConfig.positionDuration,
          );
          return {
            shortApr: {
              apr: shortApr,
              formatted: formatRate({ rate: shortApr }),
            },
            shortRoi: {
              roi: shortRoi,
              formatted: formatRate({ rate: shortRoi }),
            },
          };
        }
      : undefined,
  });

  return {
    shortApr: data?.shortApr,
    shortRoi: data?.shortRoi,
    shortRateStatus: getStatus(status, fetchStatus),
  };
}
