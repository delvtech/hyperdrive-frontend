import { useQuery } from "@tanstack/react-query";
import type { TokenList } from "@uniswap/token-lists";

const TOKEN_LIST_URL = "https://ipfs.io/ipns/tokens.uniswap.org";

export function useTokenList({
  chainId,
  enabled,
}: {
  chainId?: number;
  enabled: boolean;
}): {
  tokenList: TokenList["tokens"] | undefined;
  isLoading: boolean;
} {
  const { data: tokenList, isLoading } = useQuery({
    queryKey: ["tokenList", chainId],
    enabled,
    staleTime: Infinity,
    retry: 6,
    queryFn: () => fetch(TOKEN_LIST_URL).then((res) => res.json()),
  });

  return {
    tokenList: tokenList?.tokens,
    isLoading,
  };
}
