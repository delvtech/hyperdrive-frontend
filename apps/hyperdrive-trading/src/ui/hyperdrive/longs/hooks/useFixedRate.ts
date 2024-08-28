import { getHprFromApr } from "@delvtech/hyperdrive-viem";
import { findHyperdriveConfig } from "@hyperdrive/appconfig";
import { useQuery } from "@tanstack/react-query";

import { formatRate } from "src/base/formatRate";
import { makeQueryKey } from "src/base/makeQueryKey";
import { QueryStatusWithIdle, getStatus } from "src/base/queryStatus";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import { Address } from "viem";

export function useFixedRate({
  chainId,
  hyperdriveAddress,
  blockNumber,
}: {
  chainId: number;
  hyperdriveAddress: Address;
  blockNumber?: bigint;
}): {
  fixedApr: { apr: bigint; formatted: string } | undefined;
  fixedRoi: { roi: bigint; formatted: string } | undefined;
  fixedRateStatus: QueryStatusWithIdle;
} {
  const { hyperdrives } = useAppConfig();
  const hyperdrive = findHyperdriveConfig({
    hyperdriveChainId: chainId,
    hyperdrives,
    hyperdriveAddress,
  });
  const readHyperdrive = useReadHyperdrive({
    chainId,
    address: hyperdriveAddress,
  });

  const queryEnabled = !!readHyperdrive;
  const { data, status, fetchStatus } = useQuery({
    queryKey: makeQueryKey("fixedApr", { address: hyperdriveAddress }),
    queryFn: queryEnabled
      ? async () => {
          const fixedApr = await readHyperdrive.getFixedApr({ blockNumber });
          const fixedRoi = getHprFromApr(
            fixedApr,
            hyperdrive.poolConfig.positionDuration,
          );
          return {
            fixedApr: {
              apr: fixedApr,
              formatted: formatRate(fixedApr),
            },
            fixedRoi: {
              roi: fixedRoi,
              formatted: formatRate(fixedRoi),
            },
          };
        }
      : undefined,
    enabled: queryEnabled,
  });

  return {
    fixedApr: data?.fixedApr,
    fixedRoi: data?.fixedRoi,
    fixedRateStatus: getStatus(status, fetchStatus),
  };
}
