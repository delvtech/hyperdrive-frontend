import { ServerChainBalance } from "@delvtech/gopher";
import { QueryStatus, useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { gopher } from "src/bridge/api";
import { Address } from "viem";

export function useBridgeTokenBalances(
  account: Address | undefined,
  tokenSymbols: string[],
): {
  balances: ServerChainBalance[][] | undefined;
  status: QueryStatus;
} {
  const enabled = !!account;
  const { data = [], status } = useQuery({
    queryKey: makeQueryKey("gopher", {
      route: "accounts/assetsFungibleDetail",
      account,
      tokenSymbols,
    }),
    queryFn: enabled
      ? async () => {
          const responses = await Promise.all(
            tokenSymbols.map((tokenSymbol) =>
              gopher.accounts.assetsFungibleDetail(tokenSymbol, account),
            ),
          );
          const data = await Promise.all(
            responses.map((response) => response.data.data),
          );
          return data.filter((list) => list !== undefined);
        }
      : undefined,
    enabled,
  });

  // turbo typecheck is failing here, so we typecast.
  return { balances: data as ServerChainBalance[][], status };
}
