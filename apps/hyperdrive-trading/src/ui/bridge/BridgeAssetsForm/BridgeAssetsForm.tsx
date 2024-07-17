import { EntityFungibleToken, ServerChainBalance } from "@delvtech/gopher";
import { TokenConfig } from "@hyperdrive/appconfig";
import { MouseEvent, ReactElement, useState } from "react";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useNumericInput } from "src/ui/base/hooks/useNumericInput";
import { BridgeAssetsPicker } from "src/ui/bridge/BridgeAssetsForm/BridgeAssetPicker";
import { BridgeAssetsActionButtons } from "src/ui/bridge/BridgeAssetsForm/BridgeAssetsActionButtons";
import { BridgePreview } from "src/ui/bridge/BridgeAssetsForm/BridgePreview";
import { useAggregationSolution } from "src/ui/bridge/hooks/useAggregationSolution";
import { useBridgeChainsByChainId } from "src/ui/bridge/hooks/useBridgeChainsByChainId";
import { useBridgeTokenBalances } from "src/ui/bridge/hooks/useBridgeTokenBalances";
import { useBridgeTokens } from "src/ui/bridge/hooks/useBridgeTokens";
import { TransactionView } from "src/ui/hyperdrive/TransactionView";
import { TokenInput } from "src/ui/token/TokenInput";
import { TokenChoice, TokenPicker } from "src/ui/token/TokenPicker";
import { Address, parseUnits } from "viem";
import { useAccount, useChainId } from "wagmi";

interface BridgeAssetsFormProps {
  destinationChainId: number;
  token: EntityFungibleToken;
  onCloseBridgeUI?: (e: MouseEvent<HTMLButtonElement>) => void;
}

export function BridgeAssetsForm({
  token,
  destinationChainId,
  onCloseBridgeUI,
}: BridgeAssetsFormProps): ReactElement {
  const { address: account } = useAccount();
  const { chains = {} } = useBridgeChainsByChainId();
  const [activeToken, setActiveToken] = useState<EntityFungibleToken>(token);
  const { balances } = useBridgeTokenBalances(account, [activeToken.symbol]);

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
    destinationChainId,
    balances,
    activeBridgeChains,
  );

  console.log("maxButtonValue", maxButtonValue);
  // Fetch a quote based on the user's input.
  const { solution, status: quoteStatus } = useQuote({
    account,
    token: token.symbol,
    amount: bridgeAmount || "",
    activated: activeBridgeChains,
  });

  // Keep track of whether we're showing the preview and bridge buttons.
  const [showPreview, setShowPreview] = useState(false);

  const { tokens } = useBridgeTokens();
  const tokensWithBalances =
    tokens?.filter((token) => {
      const hasBalance = balances?.[0]?.some(
        (chainBalance) => Number(chainBalance.balance) > 0,
      );
      return hasBalance;
    }) ?? [];
  const tokenChoices: TokenChoice[] =
    tokens?.map((token) => {
      return {
        tokenConfig: {
          address: token.addresses[destinationChainId],
          name: token.name,
          symbol: token.symbol,
          decimals: token.decimals,
          places: token.decimals,
          tags: [],
          iconUrl: token.logoURI,
          extensions: {},
        } as TokenConfig,
      };
    }) || [];

  const maxValue = formatBalance({
    balance: maxButtonValue,
    decimals: token.decimals,
    places: token.decimals,
    includeCommas: false,
  });
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
              <TokenPicker
                tokens={tokenChoices}
                activeTokenAddress={
                  activeToken.addresses[destinationChainId] as Address
                }
                onChange={(tokenAddress) => {
                  const token = tokens?.find(
                    (t) => t.addresses[destinationChainId] === tokenAddress,
                  );
                  if (token) {
                    setActiveToken(token);
                  }
                }}
                joined={true}
              />
            }
            value={bridgeAmount ?? ""}
            maxValue={formatBalance({
              balance: maxButtonValue,
              decimals: token.decimals,
              includeCommas: false,
            })}
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
