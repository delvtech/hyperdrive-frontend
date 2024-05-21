import { useQuery } from "@tanstack/react-query";
import { formatRate } from "src/base/formatRate";
import { makeQueryKey } from "src/base/makeQueryKey";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import { Address } from "viem";
import { usePublicClient } from "wagmi";

interface UseVaultRateOptions {
  hyperdriveAddress: Address | undefined;
}

export function useYieldSourceRate({
  hyperdriveAddress,
}: UseVaultRateOptions): {
  vaultRate: { vaultRate: bigint; formatted: string } | undefined;
  vaultRateStatus: "error" | "success" | "loading";
} {
  const publicClient = usePublicClient();
  const readHyperdrive = useReadHyperdrive(hyperdriveAddress);
  const queryEnabled =
    !!hyperdriveAddress && !!publicClient && !!readHyperdrive;
  const { data: vaultRate, status: vaultRateStatus } = useQuery({
    enabled: queryEnabled,
    queryKey: makeQueryKey("vaultRate", {
      hyperdriveAddress,
    }),
    queryFn: queryEnabled
      ? async () => {
          const rate = await readHyperdrive.getYieldSourceRate({
            // timeRange: 604_800n, // 1 week in seconds
            timeRange: 172_800n, // 2 days in seconds
          });
          return {
            vaultRate: rate,
            formatted: formatRate(rate),
          };
        }
      : undefined,
  });

  return { vaultRate, vaultRateStatus };
}
