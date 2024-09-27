import { useQuery } from "@tanstack/react-query";
import type { TokenInfo } from "@uniswap/token-lists";

type TokenListByAddress = Record<string, TokenInfo>;

export function useTokenList({
  chainId,
  enabled,
}: {
  chainId: number | undefined;
  enabled: boolean;
}): {
  data: TokenListByAddress;
  isLoading: boolean;
} {
  const { data: result, error } = useQuery({
    queryKey: ["tokenList", chainId],
    enabled,
    staleTime: Infinity,
    retry: 6,
    queryFn: () =>
      fetch("https://ipfs.io/ipns/tokens.uniswap.org").then((res) =>
        res.json()
      ),
  });

  return {
    data: result,
    isLoading: !result,
  };
}
