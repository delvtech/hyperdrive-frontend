import { useQuery } from "@tanstack/react-query";
import { formatRate } from "src/base/formatRate";
import { makeQueryKey } from "src/base/makeQueryKey";
import { getYieldSourceRate } from "src/hyperdrive/getYieldSourceRate";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import { Address } from "viem";

interface UseVaultRateOptions {
  hyperdriveAddress: Address | undefined;
}

export function useYieldSourceRate({
  hyperdriveAddress,
}: UseVaultRateOptions): {
  vaultRate: { vaultRate: bigint; formatted: string } | undefined;
  vaultRateStatus: "error" | "success" | "loading";
} {
  const readHyperdrive = useReadHyperdrive(hyperdriveAddress);
  const queryEnabled = !!hyperdriveAddress && !!readHyperdrive;
  const { data: vaultRate, status: vaultRateStatus } = useQuery({
    enabled: queryEnabled,
    queryKey: makeQueryKey("vaultRate", {
      hyperdriveAddress,
    }),
    queryFn: queryEnabled
      ? async () => {
          const rate = await getYieldSourceRate(readHyperdrive);
          return {
            vaultRate: rate,
            formatted: formatRate(rate),
          };
        }
      : undefined,
  });

  return { vaultRate, vaultRateStatus };
}
