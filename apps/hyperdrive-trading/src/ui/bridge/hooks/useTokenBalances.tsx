import { ServerAccountFungibleBalanceHandlerResponse } from "@delvtech/gopher";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { gopher } from "src/ui/bridge/api";

export const useTokenBalances = (
  account: string,
  tokenSymbols: string[],
): UseQueryResult<ServerAccountFungibleBalanceHandlerResponse[]> => {
  const result = useQuery({
    queryKey: ["gopher", "tokenBalance", account, tokenSymbols],
    queryFn: async () => {
      const responses = await Promise.all(
        tokenSymbols.map((tokenSymbol) =>
          gopher.accounts.assetsFungibleDetail(tokenSymbol, account),
        ),
      );
      const data = await Promise.all(
        responses.map((response) => response.data),
      );
      return data;
    },
  });

  return result;
};
