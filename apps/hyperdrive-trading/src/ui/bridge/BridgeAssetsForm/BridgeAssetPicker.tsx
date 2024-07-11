import { EntityNetwork } from "@delvtech/gopher";
import { Dispatch, ReactElement, SetStateAction, useEffect } from "react";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useChainsByChainId } from "src/ui/bridge/hooks/useChainsByChainId";
import { useTokenBalances } from "src/ui/bridge/hooks/useTokenBalances";
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
  const { balances } = useTokenBalances(account.address, [tokenSymbol]);
  const { chains, status: chainsStatus } = useChainsByChainId();
  const activeChainId = useChainId();

  useInitializeItems(chainsStatus, setActiveBridgeChains, chains);

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
                    chainBalance.balance!,
                    chainBalance.tokenDecimals!,
                  ),
                  decimals: chainBalance.tokenDecimals!,
                })}
              </td>
              <td>
                <input
                  type="checkbox"
                  checked={activeBridgeChains[String(chainBalance.chainId!)]}
                  onChange={(e) => {
                    const value = e.target.checked;
                    setActiveBridgeChains((prevActivated) => {
                      return {
                        ...prevActivated,
                        [chainBalance.chainId!]: value,
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
function useInitializeItems(
  chainsStatus: string,
  setActiveBridgeChains: Dispatch<SetStateAction<Record<string, boolean>>>,
  chains: Record<string, EntityNetwork> | undefined,
) {
  useEffect(() => {
    if (chainsStatus === "success") {
      setActiveBridgeChains(() => {
        const defaultState: Record<string, boolean> = {};
        Object.keys(chains || {}).forEach((chainId) => {
          defaultState[chainId] = true;
        });
        return defaultState;
      });
    }
    // We only want this to run once, when the chain data is available.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chainsStatus]);
}
