import { TokenConfig } from "@delvtech/hyperdrive-appconfig";
import { useQuery } from "@tanstack/react-query";
import { TokenList } from "@uniswap/token-lists";
import { isForkChain } from "src/chains/isForkChain";
import { Address } from "viem";
import { mainnet } from "viem/chains";
const TOKEN_LIST_URL = "https://ipfs.io/ipns/tokens.uniswap.org";

export function useTokenList({
  chainId,
  enabled = true,
}: {
  chainId?: number;
  enabled: boolean;
}): {
  tokenList: TokenConfig[];
  isLoading: boolean;
} {
  const queryEnabled = !!chainId && enabled;
  const { data: tokenList, isLoading } = useQuery({
    queryKey: ["tokenList", chainId],
    enabled: queryEnabled,
    staleTime: Infinity,
    retry: 6,
    queryFn: queryEnabled
      ? (): Promise<TokenList> =>
          fetch(TOKEN_LIST_URL).then((res) => res.json())
      : undefined,

    select: (data: TokenList) => ({
      ...data,
      tokens: data.tokens
        // filter tokens from tokenlist that match the provided chainId
        .filter((token) => {
          return isForkChain(chainId!)
            ? token.chainId === mainnet.id
            : token.chainId === chainId;
        })
        .map((token) => {
          if (isForkChain(chainId!)) {
            return {
              ...token,
              chainId,
            };
          }
          return token;
        }),
    }),
  });

  const formattedTokenList: TokenConfig[] =
    tokenList?.tokens?.map((token) => ({
      ...token,
      chainId: chainId!,
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
