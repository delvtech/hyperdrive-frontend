import { MockERC4626 } from "@hyperdrive/artifacts/MockERC4626";
import { useQuery } from "@tanstack/react-query";
import { formatRate } from "src/base/formatRate";
import { makeQueryKey } from "src/base/makeQueryKey";
import { Address } from "viem";
import { usePublicClient } from "wagmi";

interface UseVaultRateOptions {
  vaultAddress: Address | undefined;
}

export function useMockYieldSourceRate({ vaultAddress }: UseVaultRateOptions): {
  vaultRate: { vaultRate: bigint; formatted: string } | undefined;
  vaultRateStatus: "error" | "success" | "loading";
} {
  const publicClient = usePublicClient();

  const queryEnabled = !!vaultAddress && !!publicClient;
  const { data: vaultRate, status: vaultRateStatus } = useQuery({
    queryKey: makeQueryKey("vaultRate", {
      vaultAddress,
    }),
    queryFn: queryEnabled
      ? async () => {
          const rate = await publicClient.readContract({
            address: vaultAddress,
            // Both MockLido and MockERC4626 contain the getRate method, so this
            // abi can be used for both
            abi: MockERC4626.abi,
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
