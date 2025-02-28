import { useQuery } from "@tanstack/react-query";
import { formatRate } from "src/base/formatRate";
import { makeQueryKey2 } from "src/base/makeQueryKey";
import { getYieldSourceRate } from "src/rewards/getYieldSourceRate";
import { useAppConfigForConnectedChain } from "src/ui/appconfig/useAppConfigForConnectedChain";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import { Address } from "viem";

export function useYieldSourceRate({
  chainId,
  hyperdriveAddress,
  excludeBigShortEnergy = false,
}: {
  chainId: number;
  excludeBigShortEnergy?: boolean;
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
  const appConfig = useAppConfigForConnectedChain();
  const queryEnabled = !!hyperdriveAddress && !!readHyperdrive;
  const { data, status: vaultRateStatus } = useQuery({
    queryKey: makeQueryKey2({
      namespace: "vaults",
      queryId: "vaultRate",
      params: { chainId, hyperdriveAddress, excludeBigShortEnergy },
    }),
    enabled: queryEnabled,
    queryFn: queryEnabled
      ? async () => {
          const { rate, ratePeriodDays, netRate } = await getYieldSourceRate({
            readHyperdrive,
            appConfig,
            excludeBigShortEnergy,
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
