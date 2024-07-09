import {
  EntityFungibleToken,
  EntityTokenTransferQuote,
  ServerChainBalance,
} from "@delvtech/gopher";

import { ReactElement } from "react";

import { useChainsByChainId } from "src/ui/bridge/hooks/useChainsByChainId";
import { formatUnits, parseUnits } from "viem";
import { useChainId } from "wagmi";

interface BridgePreviewProps {
  token: EntityFungibleToken;
  solution: EntityTokenTransferQuote[] | undefined;
  solutionStatus: string | undefined;
  balances: ServerChainBalance[] | undefined;
}

export function BridgePreview({
  token,
  solution,
  solutionStatus,
  balances,
}: BridgePreviewProps): ReactElement {
  const chainId = useChainId();
  const { chains } = useChainsByChainId();

  let destinationBalance = 0n;
  balances?.forEach((balance) => {
    if (balance.chainId === chainId) {
      destinationBalance = parseUnits(balance.balance!, token.decimals!) || 0n;
    }
  });
  let destinationBalanceAfter = destinationBalance;
  solution?.forEach((quote) => {
    destinationBalanceAfter += parseUnits(quote.amount!, token.decimals!);
  });

  if (solutionStatus === "success" && !!solution) {
    return (
      <table className="daisy-table">
        <tr>
          <td>Mainnet Balance</td>
          <td>{formatUnits(destinationBalance, token.decimals!)}</td>
          <td>{"-->"}</td>
          <td className="text-success">
            {formatUnits(destinationBalanceAfter, token.decimals!)}
          </td>
        </tr>
        {solution.map((quote) => {
          const chainBalance = balances?.find(
            (b) => b.chainId === quote.sourceChain,
          );
          const chainBalanceBefore = parseUnits(
            chainBalance?.balance || "0",
            token.decimals!,
          );
          const chainBalanceAfter =
            chainBalanceBefore - parseUnits(quote.amount!, token.decimals!);

          return (
            <tr key={quote.sourceChain}>
              <td>{chains?.[String(quote.sourceChain)]?.name} Balance</td>
              <td>{formatUnits(chainBalanceBefore || 0n, token.decimals!)}</td>
              <td>{"-->"}</td>
              <td className="text-error">
                {formatUnits(chainBalanceAfter || 0n, token.decimals!)}
              </td>
            </tr>
          );
        })}
      </table>
    );
  } else if (solutionStatus === "loading") {
    return <div>Loading...</div>;
  } else {
    return <div>Something went wrong</div>;
  }
}
