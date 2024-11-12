import { BlockTag } from "@delvtech/drift";
import { appConfig, getHyperdriveConfig } from "@delvtech/hyperdrive-appconfig";
import { getHprFromApr } from "@delvtech/hyperdrive-js";
import { useQuery } from "@tanstack/react-query";

import { formatRate } from "src/base/formatRate";
import { makeQueryKey } from "src/base/makeQueryKey";
import { QueryStatusWithIdle, getStatus } from "src/base/queryStatus";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import { Address } from "viem";

export function useFixedRate({
  chainId,
  hyperdriveAddress,
  block,
}: {
  chainId: number;
  hyperdriveAddress: Address;
  block?: BlockTag | bigint;
}): {
  fixedApr: { apr: bigint; formatted: string } | undefined;
  fixedRoi: { roi: bigint; formatted: string } | undefined;
  fixedRateStatus: QueryStatusWithIdle;
} {
  const hyperdrive = getHyperdriveConfig({
    hyperdriveChainId: chainId,
    hyperdriveAddress,
    appConfig,
  });
  const readHyperdrive = useReadHyperdrive({
    chainId,
    address: hyperdriveAddress,
  });

  const queryEnabled = !!readHyperdrive;
  const { data, status, fetchStatus } = useQuery({
    queryKey: makeQueryKey("fixedApr", { chainId, address: hyperdriveAddress }),
    queryFn: queryEnabled
      ? async () => {
          const fixedApr = await readHyperdrive.getFixedApr({ block });
          const fixedRoi = getHprFromApr(
            fixedApr,
            hyperdrive.poolConfig.positionDuration,
          );
          return {
            fixedApr: {
              apr: fixedApr,
              formatted: formatRate({ rate: fixedApr }),
            },
            fixedRoi: {
              roi: fixedRoi,
              formatted: formatRate({ rate: fixedRoi }),
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
