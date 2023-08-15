import { getVaultRateQuery } from "@hyperdrive/queries";
import { useQuery } from "@tanstack/react-query";
import { Address } from "viem";
import { usePublicClient } from "wagmi";

interface UseVaultRateOptions {
  vaultAddress: Address | undefined;
}

export function useVaultRate({ vaultAddress }: UseVaultRateOptions): {
  vaultRate: { vaultRate: bigint; formatted: string } | undefined;
  vaultRateStatus: "error" | "success" | "loading";
} {
  const publicClient = usePublicClient();

  const { data: vaultRate, status: vaultRateStatus } = useQuery(
    getVaultRateQuery({
      publicClient,
      vaultAddress,
    }),
  );

  return { vaultRate, vaultRateStatus };
}
