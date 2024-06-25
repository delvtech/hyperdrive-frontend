import { ServerChainBalance } from "@delvtech/gopher";
import { QueryStatus, useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { gopher } from "src/ui/bridge/api";

export const useTokenBalances = (
  account: string,
  tokenSymbols: string[],
): {
  balances: ServerChainBalance[][] | undefined;
  status: QueryStatus;
} => {
  const { data = [], status } = useQuery({
    queryKey: makeQueryKey("gopher", {
      route: "accounts/assetsFungibleDetail",
      account,
      tokenSymbols,
    }),
    queryFn: async () => {
      const responses = await Promise.all(
        tokenSymbols.map((tokenSymbol) =>
          gopher.accounts.assetsFungibleDetail(tokenSymbol, account),
        ),
      );
      const data = await Promise.all(
        responses.map((response) => response.data.data),
      );
      return data.filter((list) => list !== undefined);
    },
  });

  // turbo typecheck is failing here, so we typecast.
  return { balances: data as ServerChainBalance[][], status };
};
