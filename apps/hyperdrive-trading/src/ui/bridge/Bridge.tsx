import { ServerChainBalance } from "@delvtech/gopher";
import { ReactElement } from "react";
import { BridgeAssetsForm } from "src/ui/bridge/BridgeAssetsForm/BridgeAssetsForm";
import { useBridgeChainsByChainId } from "src/ui/bridge/hooks/useBridgeChainsByChainId";
import { useBridgeTokenBalances } from "src/ui/bridge/hooks/useBridgeTokenBalances";
import { useBridgeTokens } from "src/ui/bridge/hooks/useBridgeTokens";
import { Route } from "src/ui/routes/bridge";
import { useAccount } from "wagmi";

export function Bridge(): ReactElement {
  const { token, destination } = Route.useSearch();
  const { chains } = useBridgeChainsByChainId();
  const { address: accountAddress } = useAccount();
  const { tokens } = useBridgeTokens();
  const { balances = [[]] } = useBridgeTokenBalances(
    accountAddress,
    tokens?.map((t) => t.symbol) || [],
  );

  const balancesByTokens: Record<string, ServerChainBalance[]> = {};
  tokens?.forEach((token, index) => {
    balancesByTokens[token.symbol] = balances[index];
  });

  // Double check the default token has a balance.
  const tokenWithBalance = tokens?.find((t, index) => {
    return (
      t.symbol === token &&
      balances[index]?.some((balance) => Number(balance.balance) > 0)
    );
  });

  if (!tokenWithBalance) {
    return <div>No token balances to bridge</div>;
  }

  return (
    <div className="m-6 flex flex-col space-y-6">
      <div>{`Destination Chain: ${chains?.[destination]?.name}`}</div>
      <BridgeAssetsForm
        destinationChainId={destination}
        token={tokenWithBalance}
      />
    </div>
  );
}

export default Bridge;
