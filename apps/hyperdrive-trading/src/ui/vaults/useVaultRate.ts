import { mockErc4626Abi } from "@hyperdrive/sdk";
import { useQuery } from "@tanstack/react-query";
import { formatRate } from "src/base/formatRate";
import { makeQueryKey } from "src/base/makeQueryKey";
import { Address } from "viem";
import { usePublicClient } from "wagmi";

interface UseVaultRateOptions {
  vaultAddress: Address | undefined;
}

export function useVaultRate({ vaultAddress }: UseVaultRateOptions): {
  vaultRate: { vaultRate: bigint; formatted: string } | undefined;
  vaultRateStatus: "error" | "success" | "pending";
} {
  const publicClient = usePublicClient();

  const queryEnabled = !!vaultAddress;
  const { data: vaultRate, status: vaultRateStatus } = useQuery({
    queryKey: makeQueryKey("vaultRate", { vaultAddress }),
    queryFn: queryEnabled
      ? async () => {
          const rate = await publicClient.readContract({
            address: vaultAddress,
            abi: mockErc4626Abi,
            functionName: "getRate",
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
