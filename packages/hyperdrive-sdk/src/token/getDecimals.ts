import { ERC20MintableABI } from "@hyperdrive/core";
import { QueryObserverOptions } from "@tanstack/query-core";
import { makeQueryKey } from "src/makeQueryKey";
import { Address, PublicClient } from "viem";

interface GetDecimalsOptions {
  tokenAddress: Address;
  publicClient: PublicClient;
}

export function getDecimalsQuery({
  tokenAddress,
  publicClient,
}: GetDecimalsOptions): QueryObserverOptions<number> {
  const queryEnabled = !!publicClient && !!tokenAddress;

  return {
    enabled: queryEnabled,
    queryKey: makeQueryKey("getDecimals", { tokenAddress }),
    queryFn: queryEnabled
      ? () =>
          publicClient.readContract({
            address: tokenAddress,
            abi: ERC20MintableABI,
            functionName: "decimals",
          })
      : undefined,
    // Decimals will never change, so it can be cached forever
    staleTime: Infinity,
  };
}
