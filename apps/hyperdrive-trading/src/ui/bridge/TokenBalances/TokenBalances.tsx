import { ReactNode } from "react";
import { Well } from "src/ui/base/components/Well/Well";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useChainsByChainId } from "src/ui/bridge/hooks/useChainsByChainId";
import { useTokenBalances } from "src/ui/bridge/hooks/useTokenBalances";
import { useAccount } from "wagmi";

function TokenBalances(): ReactNode {
  const { address } = useAccount();
  const tokenSymbols = ["USDT", "USDC", "DAI"];
  const { balances } = useTokenBalances(address || "", tokenSymbols);
  const { chains } = useChainsByChainId();

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
          chainBalances?.reduce((total, token) => {
            return total + BigInt(token.balance || "0");
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
                    <td>{chains[token.chainId!].name}</td>
                    <td>
                      {(
                        parseFloat(token?.balance || "0") /
                        Math.pow(10, token?.tokenDecimals || 18)
                      ).toFixed(2)}
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
