import { useQuery } from "@tanstack/react-query";
import type { TokenList } from "@uniswap/token-lists";

export function useTokenList({
  chainId,
  enabled,
}: {
  chainId: number | undefined;
  enabled: boolean;
}): {
  tokenList: TokenList["tokens"] | undefined;
  isLoading: boolean;
} {
  const { data: result } = useQuery({
    queryKey: ["tokenList", chainId],
    enabled,
    staleTime: Infinity,
    retry: 6,
    queryFn: () =>
      fetch("https://ipfs.io/ipns/tokens.uniswap.org").then((res) =>
        res.json(),
      ),
  });

  return {
    tokenList: result?.tokens,
    isLoading: !result,
  };
}
