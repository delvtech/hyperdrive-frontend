import { useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { isTestnetChain } from "src/chains/isTestnetChain";
import { getTokenFiatPrice } from "src/token/getTokenFietPrice";
import { Address } from "viem";

export function useTokenFiatPrice({
  tokenAddress,
  chainId,
}: {
  tokenAddress: Address | undefined;
  chainId: number;
}): {
  fiatPrice: bigint | undefined;
} {
  const queryEnabled = !isTestnetChain(chainId) && !!tokenAddress;

  const { data } = useQuery({
    queryKey: makeQueryKey("tokenFiatPrice", { chainId, tokenAddress }),
    enabled: queryEnabled,
    queryFn: queryEnabled
      ? async () =>
          getTokenFiatPrice({
            tokenAddress,
            chainId,
          })
      : undefined,
  });
  return { fiatPrice: data };
}
