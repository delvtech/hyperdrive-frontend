import { appConfig } from "@delvtech/hyperdrive-appconfig";
import { useQuery } from "@tanstack/react-query";
import { formatRate } from "src/base/formatRate";
import { makeQueryKey2 } from "src/base/makeQueryKey";
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
    | {
        vaultRate: bigint;
        /**
         * @deprecated format just before showing to the user, don't depend on a formatted value from this hook
         */
        formatted: string;
        ratePeriodDays: number;
        netVaultRate: bigint;
      }
    | undefined;
  vaultRateStatus: "error" | "success" | "loading";
} {
  const readHyperdrive = useReadHyperdrive({
    chainId,
    address: hyperdriveAddress,
  });

  const queryEnabled = !!hyperdriveAddress && !!readHyperdrive;
  const { data, status: vaultRateStatus } = useQuery({
    queryKey: makeQueryKey2({
      namespace: "vaults",
      queryId: "vaultRate",
      params: { chainId, hyperdriveAddress },
    }),
    enabled: queryEnabled,
    queryFn: queryEnabled
      ? async () => {
          const { rate, ratePeriodDays, netRate } = await getYieldSourceRate({
            readHyperdrive,
            appConfig,
          });
          return {
            vaultRate: rate,
            netVaultRate: netRate,
            formatted: formatRate({ rate }),
            ratePeriodDays,
          };
        }
      : undefined,
  });

  return { vaultRate: data, vaultRateStatus };
}
