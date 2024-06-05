import { getHprFromApr } from "@delvtech/hyperdrive-viem";
import { findHyperdriveConfig } from "@hyperdrive/appconfig";
import { useQuery } from "@tanstack/react-query";

import { formatRate } from "src/base/formatRate";
import { makeQueryKey } from "src/base/makeQueryKey";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import { Address } from "viem";

export function useCurrentFixedRate(hyperdriveAddress: Address): {
  fixedApr: { apr: bigint; formatted: string } | undefined;
  fixedRoi: { roi: bigint; formatted: string } | undefined;
  fixedAprStatus: "loading" | "error" | "success";
} {
  const { hyperdrives } = useAppConfig();
  const readHyperdrive = useReadHyperdrive(hyperdriveAddress);
  const hyperdrive = findHyperdriveConfig({ hyperdrives, hyperdriveAddress });

  const queryEnabled = !!readHyperdrive;
  const { data, status } = useQuery({
    queryKey: makeQueryKey("fixedApr", { address: hyperdriveAddress }),
    queryFn: queryEnabled
      ? async () => {
          const fixedApr = await readHyperdrive.getFixedApr();
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
    fixedAprStatus: status,
  };
}