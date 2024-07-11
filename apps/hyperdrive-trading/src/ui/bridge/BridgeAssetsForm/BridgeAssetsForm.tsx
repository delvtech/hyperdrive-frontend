import { EntityFungibleToken, ServerChainBalance } from "@delvtech/gopher";
import { MouseEvent, ReactElement, useEffect, useState } from "react";
import { useNumericInput } from "src/ui/base/hooks/useNumericInput";
import { BridgeAssetsPicker } from "src/ui/bridge/BridgeAssetsForm/BridgeAssetPicker";
import { BridgeAssetsActionButtons } from "src/ui/bridge/BridgeAssetsForm/BridgeAssetsActionButtons";
import { BridgePreview } from "src/ui/bridge/BridgeAssetsForm/BridgePreview";
import { useAggregationSolution } from "src/ui/bridge/hooks/useAggregationSolution";
import { useChainsByChainId } from "src/ui/bridge/hooks/useChainsByChainId";
import { useTokenBalances } from "src/ui/bridge/hooks/useTokenBalances";
import { TransactionView } from "src/ui/hyperdrive/TransactionView";
import { TokenInput } from "src/ui/token/TokenInput";
import { Address, formatUnits, parseUnits } from "viem";
import { useAccount, useChainId } from "wagmi";

interface BridgeAssetsFormProps {
  token: EntityFungibleToken;
  onCloseBridgeUI?: (e: MouseEvent<HTMLButtonElement>) => void;
}

export function BridgeAssetsForm({
  token,
  onCloseBridgeUI,
}: BridgeAssetsFormProps): ReactElement {
  const { address: account } = useAccount();
  const { chains = {} } = useChainsByChainId();
  const activeChainId = useChainId();
  const { balances } = useTokenBalances(account, [token.symbol]);

  // Keep track of the value from TokenInput.
  const { amount: bridgeAmount, setAmount } = useNumericInput({
    decimals: token.decimals || 0,
  });

  // Keep track of activated chains from BridgeAssetsPicker.
  const [activeBridgeChains, setActiveBridgeChains] = useState<
    Record<string, boolean>
  >(() => {
    const defaultState: Record<string, boolean> = {};
    Object.keys(chains).forEach((chainId) => {
      defaultState[chainId] = true;
    });
    return defaultState;
  });

  // Calculates the sum of balances for the active chains.
  const maxButtonValue = calculateMaxButtonValue(
    activeChainId,
    balances,
    activeBridgeChains,
  );

  // Fetch a quote based on the user's input.
  const { solution, status: quoteStatus } = useQuote({
    account,
    token: token.symbol,
    amount: bridgeAmount || "",
    activated: activeBridgeChains,
  });

  // Keep track of whether we're showing the preview and bridge buttons.
  const [showPreview, setShowPreview] = useState(false);

  // Hide preview when we fetch a new quote.
  useEffect(() => {
    setShowPreview(false);
  }, [quoteStatus]);

  return (
    <TransactionView
      tokenInput={
        <div className="flex">
          <TokenInput
            settings={
              <BridgeAssetsPicker
                activeBridgeChains={activeBridgeChains}
                setActiveBridgeChains={setActiveBridgeChains}
                tokenSymbol={token.symbol}
              />
            }
            name={token.symbol}
            token={
              <div className="daisy-join-item flex h-12 shrink-0 items-center gap-1.5 border border-neutral-content/30 bg-base-100 px-4">
                <img src={token?.logoURI} className="h-5 " />{" "}
                <span className="text-sm font-semibold">{token.symbol}</span>
              </div>
            }
            value={bridgeAmount ?? ""}
            maxValue={formatUnits(maxButtonValue, token.decimals)}
            inputLabel="Amount to bridge"
            onChange={(newAmount) => setAmount(newAmount)}
          />
        </div>
      }
      setting={
        <button
          type="button"
          onClick={() => {
            setShowPreview(true);
          }}
          className="daisy-btn daisy-btn-circle daisy-btn-primary w-full disabled:bg-primary disabled:text-base-100 disabled:opacity-30"
        >
          Get Quote
        </button>
      }
      transactionPreview={
        showPreview ? (
          <BridgePreview
            token={token}
            solution={solution}
            solutionStatus={quoteStatus}
            balances={balances?.[0]}
          />
        ) : undefined
      }
      disclaimer={
        <button onClick={onCloseBridgeUI}>{"<-- Complete Transaction"}</button>
      }
      actionButton={
        showPreview ? (
          <BridgeAssetsActionButtons
            solution={solution}
            balances={balances?.[0]}
            account={account}
            token={token}
          />
        ) : undefined
      }
    />
  );
}

function useQuote(params: {
  account: Address | undefined;
  token: string;
  amount: string;
  activated: Record<string, boolean>;
}) {
  const { account, token, amount, activated } = params;
  const activatedChainIds: string[] = [];
  Object.entries(activated).forEach(([chainId, isActive]) => {
    if (isActive) {
      activatedChainIds.push(chainId);
    }
  });
  const whitelistedSourceChains = activatedChainIds.join(",");

  const chainId = useChainId();
  const { solution, status } = useAggregationSolution({
    account,
    token,
    amount,
    destination: chainId,
    whitelistedSourceChains,
  });

  return { solution, status };
}

function calculateMaxButtonValue(
  chainId: number,
  balances: ServerChainBalance[][] | undefined,
  activated: Record<string, boolean>,
) {
  let maxButtonValue = 0n;
  const chainBalances =
    balances?.[0]?.filter(
      (chainBalance) =>
        Number(chainBalance.balance) > 0 && chainBalance.chainId !== chainId,
    ) || [];
  chainBalances.forEach(({ balance, tokenDecimals, chainId }) => {
    const isActive = activated[String(chainId)] ?? true;
    if (balance && tokenDecimals && isActive) {
      maxButtonValue += parseUnits(balance, tokenDecimals);
    }
  });

  return maxButtonValue;
}
