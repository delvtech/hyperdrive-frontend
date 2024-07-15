import { ReactElement } from "react";
import { BridgeAssetsForm } from "src/ui/bridge/BridgeAssetsForm/BridgeAssetsForm";
import { useBridgeTokenBalances } from "src/ui/bridge/hooks/useBridgeTokenBalances";
import { useBridgeTokens } from "src/ui/bridge/hooks/useBridgeTokens";
import { useAccount } from "wagmi";

export function Bridge(): ReactElement {
  const { address: accountAddress } = useAccount();
  const { tokens } = useBridgeTokens();
  const { balances = [[]] } = useBridgeTokenBalances(
    accountAddress,
    tokens?.map((t) => t.symbol) || [],
  );

  const firstTokenWithBalance = tokens?.find((token, index) => {
    return balances[index]?.some(
      (chainBalance) => Number(chainBalance.balance) > 0,
    );
  });

  if (!firstTokenWithBalance) {
    return <div>No tokens to bridge</div>;
  }

  return (
    <div className="m-6 flex flex-col space-y-6">
      {/* TODO: Remove hardcoded Sepolia chain id */}
      <div>{"Destination Chain: Sepolia"}</div>
      <BridgeAssetsForm
        destinationChainId={11155111}
        token={firstTokenWithBalance}
      />
    </div>
  );
}

export default Bridge;
