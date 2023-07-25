import { QueryObserverOptions } from "@tanstack/query-core";
import { mockErc4626Abi } from "src/abis/MockErc4626";
import { formatRate } from "src/base/formatRate";
import { makeQueryKey } from "src/makeQueryKey";
import { Address, PublicClient } from "viem";

async function getVaultRate({
  vaultAddress,
  publicClient,
}: {
  vaultAddress: Address;
  publicClient: PublicClient;
}): Promise<{ vaultRate: bigint; formatted: string }> {
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
interface GetVaultRateQueryOptions {
  vaultAddress: Address | undefined;
  publicClient: PublicClient;
}

export function getVaultRateQuery({
  vaultAddress,
  publicClient,
}: GetVaultRateQueryOptions): QueryObserverOptions<
  Awaited<ReturnType<typeof getVaultRate>>
> {
  const queryEnabled = !!vaultAddress;

  return {
    enabled: queryEnabled,
    queryKey: makeQueryKey("getRate", { tokenAddress: vaultAddress }),
    queryFn: queryEnabled
      ? () =>
          getVaultRate({
            publicClient,
            vaultAddress: vaultAddress,
          })
      : undefined,
  };
}
