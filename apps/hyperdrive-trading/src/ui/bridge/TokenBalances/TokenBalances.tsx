import { fixed } from "@delvtech/fixed-point-wasm";
import type { ReactNode } from "react";
import { parseUnits } from "src/base/parseUnits";
import { Well } from "src/ui/base/components/Well/Well";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useBridgeChainsByChainId } from "src/ui/bridge/hooks/useBridgeChainsByChainId";
import { useBridgeTokenBalances } from "src/ui/bridge/hooks/useBridgeTokenBalances";
import { useAccount } from "wagmi";

function TokenBalances(): ReactNode {
  const { address } = useAccount();
  const tokenSymbols = ["USDT", "USDC", "DAI"];
  const { balances } = useBridgeTokenBalances(address, tokenSymbols);
  const { chains } = useBridgeChainsByChainId();

  if (!address) {
    return <Well>Connect your wallet</Well>;
  }
  if (!balances || !chains) {
    return <Well>Loading balances...</Well>;
  }

  return (
    <div className="flex-col-3 flex w-full space-x-6">
      {balances.map((chainBalances, index) => {
        const totalBalance =
          chainBalances?.reduce((total, { balance, tokenDecimals }) => {
            if (!balance || !tokenDecimals) {
              return total;
            }
            return total + parseUnits(balance, tokenDecimals);
          }, 0n) || 0n;

        return (
          <Well key={tokenSymbols[index]}>
            <div className="h3">{tokenSymbols[index]}</div>
            <table className="table">
              <thead>
                <tr>
                  <th>Chain</th>
                  <th>Balance</th>
                </tr>
              </thead>
              <tbody>
                {chainBalances?.map((token) => (
                  <tr key={token.chainId}>
                    <td>{chains[token.chainId!]?.name}</td>
                    <td>
                      {fixed(
                        token?.balance || 0,
                        token?.tokenDecimals || 18,
                      ).format({ decimals: 2 })}
                    </td>
                  </tr>
                ))}
                <tr>
                  <td>
                    <strong>Total</strong>
                  </td>
                  <td>
                    <strong>
                      {formatBalance({
                        balance: totalBalance,
                        decimals: chainBalances[0].tokenDecimals || 18,
                        places: 2,
                      })}
                    </strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </Well>
        );
      })}
    </div>
  );
}

export default TokenBalances;
