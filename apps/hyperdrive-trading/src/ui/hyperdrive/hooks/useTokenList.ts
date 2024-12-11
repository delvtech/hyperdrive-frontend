import { TokenConfig } from "@delvtech/hyperdrive-appconfig";
import { useQuery } from "@tanstack/react-query";
import { TokenList } from "@uniswap/token-lists";
import { Address } from "viem";
const TOKEN_LIST_URL = "https://ipfs.io/ipns/tokens.uniswap.org";

export function useTokenList({
  chainId,
  enabled,
}: {
  chainId?: number;
  enabled: boolean;
}): {
  tokenList: TokenConfig[];
  isLoading: boolean;
} {
  const { data: tokenList, isLoading } = useQuery<TokenList>({
    queryKey: ["tokenList", chainId],
    enabled,
    staleTime: Infinity,
    retry: 6,
    queryFn: () => fetch(TOKEN_LIST_URL).then((res) => res.json()),
  });

  const formattedTokenList: TokenConfig[] =
    tokenList?.tokens?.map((token) => ({
      ...token,
      address: token.address as Address,
      iconUrl: token.logoURI ?? "",
      places: 2,
      priceOracle: "defillama",
      tags: token.tags ?? [],
    })) ?? [];

  return {
    tokenList: formattedTokenList,
    isLoading,
  };
}
