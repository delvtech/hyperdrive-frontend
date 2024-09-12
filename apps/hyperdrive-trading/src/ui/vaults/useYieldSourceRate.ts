import { appConfig } from "@hyperdrive/appconfig";
import { useQuery } from "@tanstack/react-query";
import { formatRate } from "src/base/formatRate";
import { makeQueryKey } from "src/base/makeQueryKey";
import { getYieldSourceRate } from "src/hyperdrive/getYieldSourceRate";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import { Address } from "viem";

export function useYieldSourceRate({
  chainId,
  hyperdriveAddress,
}: {
  chainId: number;
  hyperdriveAddress: Address | undefined;
}): {
  vaultRate:
    | { vaultRate: bigint; formatted: string; ratePeriodDays: number }
    | undefined;
  vaultRateStatus: "error" | "success" | "loading";
} {
  const readHyperdrive = useReadHyperdrive({
    chainId,
    address: hyperdriveAddress,
  });

  const queryEnabled = !!hyperdriveAddress && !!readHyperdrive;
  const { data, status: vaultRateStatus } = useQuery({
    enabled: queryEnabled,
    queryKey: makeQueryKey("vaultRate", {
      chainId,
      hyperdriveAddress,
    }),
    queryFn: queryEnabled
      ? async () => {
          const { rate, ratePeriodDays } = await getYieldSourceRate(
            readHyperdrive,
            appConfig,
          );
          return {
            vaultRate: rate,
            formatted: formatRate(rate),
            ratePeriodDays,
          };
        }
      : undefined,
  });

  return { vaultRate: data, vaultRateStatus };
}
