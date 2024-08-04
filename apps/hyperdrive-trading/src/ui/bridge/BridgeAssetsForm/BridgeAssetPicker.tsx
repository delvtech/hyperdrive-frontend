import type { Dispatch, ReactElement, SetStateAction } from "react";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useBridgeChainsByChainId } from "src/ui/bridge/hooks/useBridgeChainsByChainId";
import { useBridgeTokenBalances } from "src/ui/bridge/hooks/useBridgeTokenBalances";
import { parseUnits } from "viem";
import { useAccount, useChainId } from "wagmi";

interface BridgeAssetsPickerProps {
  tokenSymbol: string;
  activeBridgeChains: Record<string, boolean>;
  setActiveBridgeChains: Dispatch<SetStateAction<Record<string, boolean>>>;
}

export function BridgeAssetsPicker({
  tokenSymbol,
  activeBridgeChains,
  setActiveBridgeChains,
}: BridgeAssetsPickerProps): ReactElement {
  const account = useAccount();
  const { balances } = useBridgeTokenBalances(account.address, [tokenSymbol]);
  const { chains } = useBridgeChainsByChainId();
  const activeChainId = useChainId();

  const filteredBalances =
    balances?.[0]?.filter(
      (chainBalance) =>
        Number(chainBalance.balance) > 0 &&
        chainBalance.chainId !== activeChainId,
    ) || [];

  return (
    <table className="daisy-table">
      <thead>
        <tr>
          <th>Chain</th>
          <th>Balance</th>
          <th>Use</th>
        </tr>
      </thead>
      <tbody>
        {filteredBalances.map((chainBalance) => {
          return (
            <tr className="daisy-table-row" key={chainBalance.chainId}>
              <td>{chains?.[String(chainBalance.chainId)]?.name}</td>
              <td>
                {formatBalance({
                  balance: parseUnits(
                    chainBalance.balance,
                    chainBalance.tokenDecimals,
                  ),
                  decimals: chainBalance.tokenDecimals,
                })}
              </td>
              <td>
                <input
                  type="checkbox"
                  checked={
                    activeBridgeChains[String(chainBalance.chainId)] ?? true
                  }
                  onChange={(e) => {
                    const value = e.target.checked;
                    setActiveBridgeChains((prevActivated) => {
                      return {
                        ...prevActivated,
                        [chainBalance.chainId]: value,
                      };
                    });
                  }}
                  className="daisy-toggle"
                ></input>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
