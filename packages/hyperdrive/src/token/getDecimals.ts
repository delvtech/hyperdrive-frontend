import { QueryObserverOptions } from "@tanstack/query-core";
import { ERC20MintableABI } from "src/abis/ERC20Mintable";
import { makeQueryKey } from "src/makeQueryKey";
import { Address, PublicClient } from "viem";

interface GetDecimalsOptions {
  tokenAddress: Address;
  publicClient: PublicClient;
}

export async function getDecimals({
  tokenAddress,
  publicClient,
}: GetDecimalsOptions): Promise<number> {
  return publicClient.readContract({
    address: tokenAddress,
    abi: ERC20MintableABI,
    functionName: "decimals",
  });
}

export function getDecimalsQuery({
  tokenAddress,
  publicClient,
}: GetDecimalsOptions): QueryObserverOptions<
  Awaited<ReturnType<typeof getDecimals>>
> {
  const queryEnabled = !!publicClient && !!tokenAddress;

  return {
    enabled: queryEnabled,
    queryKey: makeQueryKey("getDecimals", { tokenAddress }),
    queryFn: queryEnabled
      ? () =>
          getDecimals({
            publicClient,
            tokenAddress,
          })
      : undefined,
    // Decimals will never change, so it can be cached forever
    staleTime: Infinity,
  };
}
