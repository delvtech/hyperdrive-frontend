import { fixed } from "@delvtech/fixed-point-wasm";
import { adjustAmountByPercentage } from "@delvtech/hyperdrive-js-core";
import {
  appConfig,
  findBaseToken,
  findToken,
  HyperdriveConfig,
} from "@hyperdrive/appconfig";
import { MouseEvent, ReactElement } from "react";
import { isTestnetChain } from "src/chains/isTestnetChain";
import { getIsValidTradeSize } from "src/hyperdrive/getIsValidTradeSize";
import { getHasEnoughAllowance } from "src/token/getHasEnoughAllowance";
import { getHasEnoughBalance } from "src/token/getHasEnoughBalance";
import { ConnectWalletButton } from "src/ui/base/components/ConnectWallet";
import { LoadingButton } from "src/ui/base/components/LoadingButton";
import { useFeatureFlag } from "src/ui/base/featureFlags/featureFlags";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useNumericInput } from "src/ui/base/hooks/useNumericInput";
import { SwitchNetworksButton } from "src/ui/chains/SwitchChainButton/SwitchChainButton";
import { useMarketState } from "src/ui/hyperdrive/hooks/useMarketState";
import { usePoolInfo } from "src/ui/hyperdrive/hooks/usePoolInfo";
import { useTokenList } from "src/ui/hyperdrive/hooks/useTokenList";
import { InvalidTransactionButton } from "src/ui/hyperdrive/InvalidTransactionButton";
import { useMaxLong } from "src/ui/hyperdrive/longs/hooks/useMaxLong";
import { useOpenLong } from "src/ui/hyperdrive/longs/hooks/useOpenLong";
import { usePreviewOpenLong } from "src/ui/hyperdrive/longs/hooks/usePreviewOpenLong";
import { OpenLongPreview } from "src/ui/hyperdrive/longs/OpenLongPreview/OpenLongPreview";
import { OpenLongStats } from "src/ui/hyperdrive/longs/OpenLongPreview/OpenLongStats";
import { TransactionView } from "src/ui/hyperdrive/TransactionView";
import { PositionPicker } from "src/ui/markets/PositionPicker";
import { ApproveTokenChoices } from "src/ui/token/ApproveTokenChoices";
import { useActiveToken } from "src/ui/token/hooks/useActiveToken";
import { useSlippageSettings } from "src/ui/token/hooks/useSlippageSettings";
import { useTokenAllowance } from "src/ui/token/hooks/useTokenAllowance";
import { useTokenBalance } from "src/ui/token/hooks/useTokenBalance";
import { useTokenFiatPrice } from "src/ui/token/hooks/useTokenFiatPrice";
import { SlippageSettingsTwo } from "src/ui/token/SlippageSettingsTwo";
import { TokenInputTwo } from "src/ui/token/TokenInputTwo";
import {
  TokenChoice,
  TokenPickerTwo,
  ZapsTokenPicker,
} from "src/ui/token/TokenPickerTwo";
import { Address, formatUnits } from "viem";
import { useAccount, useChainId } from "wagmi";

interface OpenLongFormProps {
  hyperdrive: HyperdriveConfig;
  onOpenLong?: (e: MouseEvent<HTMLButtonElement>) => void;
}

export function OpenLongForm({
  hyperdrive: hyperdrive,
  onOpenLong,
}: OpenLongFormProps): ReactElement {
  const { address: account } = useAccount();
  const connectedChainId = useChainId();
  const { marketState } = useMarketState({
    hyperdriveAddress: hyperdrive.address,
    chainId: hyperdrive.chainId,
  });

  const { isFlagEnabled: isZapsEnabled } = useFeatureFlag("zaps");

  const { tokenList } = useTokenList({
    chainId: hyperdrive.chainId,
    enabled: isZapsEnabled,
  });

  const { poolInfo } = usePoolInfo({
    hyperdriveAddress: hyperdrive.address,
    chainId: hyperdrive.chainId,
  });
  const baseToken = findBaseToken({
    hyperdriveChainId: hyperdrive.chainId,
    hyperdriveAddress: hyperdrive.address,
    appConfig,
  });

  const { balance: baseTokenBalance } = useTokenBalance({
    account,
    tokenAddress: baseToken.address,
    decimals: baseToken.decimals,
  });

  const { balance: sharesTokenBalance } = useTokenBalance({
    account,
    tokenAddress: hyperdrive.poolConfig.vaultSharesToken,
    decimals: hyperdrive.decimals,
  });

  const tokenChoices: TokenChoice[] = [];
  if (baseToken && hyperdrive.depositOptions.isBaseTokenDepositEnabled) {
    tokenChoices.push({
      tokenConfig: baseToken,
      tokenBalance: baseTokenBalance?.value,
    });
  }

  const sharesToken = findToken({
    chainId: hyperdrive.chainId,
    tokens: appConfig.tokens,
    tokenAddress: hyperdrive.poolConfig.vaultSharesToken,
  });

  if (sharesToken && hyperdrive.depositOptions.isShareTokenDepositsEnabled) {
    tokenChoices.push({
      tokenConfig: sharesToken,
      tokenBalance: sharesTokenBalance?.value,
    });
  }

  if (isZapsEnabled) {
    tokenList
      ?.filter(
        (tokenFromTokenList) =>
          tokenFromTokenList.address !== baseToken.address &&
          tokenFromTokenList.address !== sharesToken?.address,
      )
      .map((tokenFromTokenList) => {
        tokenChoices.push({
          tokenConfig: {
            ...tokenFromTokenList,
            iconUrl: tokenFromTokenList.logoURI ?? "",
            address: tokenFromTokenList.address as Address,
            places: 4,
            tags: ["zap"],
          },
        });
      });
  }

  const { activeToken, activeTokenBalance, setActiveToken, isActiveTokenEth } =
    useActiveToken({
      account,
      defaultActiveToken: hyperdrive.depositOptions.isBaseTokenDepositEnabled
        ? baseToken.address
        : hyperdrive.poolConfig.vaultSharesToken,
      tokens: tokenChoices.map((token) => token.tokenConfig),
    });
  const { fiatPrice: activeTokenPrice } = useTokenFiatPrice({
    tokenAddress: activeToken.address,
    chainId: activeToken.chainId,
  });
  // All tokens besides ETH require an allowance to spend it on hyperdrive
  const requiresAllowance = !isActiveTokenEth;
  const { tokenAllowance: activeTokenAllowance } = useTokenAllowance({
    account,
    enabled: requiresAllowance,
    spender: hyperdrive.address,
    tokenAddress: activeToken.address,
    tokenChainId: activeToken.chainId,
  });

  const {
    amount: depositAmount,
    amountAsBigInt: depositAmountAsBigInt,
    setAmount,
  } = useNumericInput({
    decimals: activeToken.decimals,
  });

  const hasEnoughAllowance = getHasEnoughAllowance({
    requiresAllowance,
    allowance: activeTokenAllowance,
    amount: depositAmountAsBigInt,
  });
  const hasEnoughBalance = getHasEnoughBalance({
    balance: activeTokenBalance?.value,
    amount: depositAmountAsBigInt,
  });

  const { maxBaseIn, maxSharesIn, maxBondsOut } = useMaxLong({
    hyperdriveAddress: hyperdrive.address,
    chainId: hyperdrive.chainId,
  });
  const activeTokenMaxTradeSize =
    activeToken.address === baseToken.address ? maxBaseIn : maxSharesIn;

  const hasEnoughLiquidity = getIsValidTradeSize({
    tradeAmount: depositAmountAsBigInt,
    maxTradeSize: activeTokenMaxTradeSize,
  });

  const {
    bondsReceived,
    spotRateAfterOpen,
    curveFee,
    status: openLongPreviewStatus,
  } = usePreviewOpenLong({
    chainId: hyperdrive.chainId,
    hyperdriveAddress: hyperdrive.address,
    amountIn: depositAmountAsBigInt,
    asBase: activeToken.address === baseToken.address,
  });

  const {
    setSlippage,
    slippage,
    slippageAsBigInt,
    activeOption: activeSlippageOption,
    setActiveOption: setActiveSlippageOption,
  } = useSlippageSettings({ decimals: activeToken.decimals });

  const bondsReceivedAfterSlippage =
    bondsReceived &&
    adjustAmountByPercentage({
      amount: bondsReceived,
      percentage: slippageAsBigInt,
      decimals: activeToken.decimals,
      direction: "down",
    });

  const { openLong, openLongStatus } = useOpenLong({
    chainId: hyperdrive.chainId,
    hyperdriveAddress: hyperdrive.address,
    asBase: activeToken.address === baseToken.address,
    amount: depositAmountAsBigInt,
    ethValue: isActiveTokenEth ? depositAmountAsBigInt : undefined,
    minBondsOut: bondsReceivedAfterSlippage,
    minSharePrice: poolInfo?.vaultSharePrice,
    destination: account,
    enabled: openLongPreviewStatus === "success" && hasEnoughAllowance,
    onSubmitted: () => {
      (document.getElementById("open-long") as HTMLDialogElement)?.close();
    },
    onExecuted: () => {
      setAmount("");
    },
  });

  // Max button is wired up to the user's balance, or the pool's max long.
  // Whichever is smallest.
  let maxButtonValue = "0";
  if (activeTokenBalance && activeTokenMaxTradeSize) {
    maxButtonValue = formatUnits(
      activeTokenBalance.value > activeTokenMaxTradeSize
        ? activeTokenMaxTradeSize
        : activeTokenBalance?.value,
      activeToken.decimals,
    );
  }

  return (
    <TransactionView
      tokenInput={
        <TokenInputTwo
          variant="lighter"
          settings={
            <div className="mb-3 flex w-full items-center justify-between">
              <PositionPicker hyperdrive={hyperdrive} />
              <SlippageSettingsTwo
                onSlippageChange={setSlippage}
                slippage={slippage}
                activeOption={activeSlippageOption}
                onActiveOptionChange={setActiveSlippageOption}
                tooltip="Your transaction will revert if the price changes unfavorably by more than this percentage."
              />
            </div>
          }
          name={activeToken.symbol}
          token={
            isZapsEnabled ? (
              <ZapsTokenPicker
                tokens={tokenChoices.filter(
                  (token) => token.tokenConfig.chainId === hyperdrive.chainId,
                )}
                activeTokenAddress={activeToken.address}
                onChange={(tokenAddress) => {
                  setActiveToken(tokenAddress);
                  setAmount("0");
                }}
              />
            ) : (
              <TokenPickerTwo
                tokens={tokenChoices.filter(
                  (token) => token.tokenConfig.chainId === hyperdrive.chainId,
                )}
                activeTokenAddress={activeToken.address}
                onChange={(tokenAddress) => {
                  setActiveToken(tokenAddress);
                  setAmount("0");
                }}
              />
            )
          }
          value={depositAmount ?? ""}
          maxValue={maxButtonValue}
          inputLabel="You spend"
          bottomLeftElement={
            // Defillama fetches the token price via {chain}:{tokenAddress}.
            // Since the token address differs on testnet, price display is
            // disabled there.
            !isTestnetChain(hyperdrive.chainId) ? (
              <label className="text-sm text-neutral-content">
                {`$${formatBalance({
                  balance:
                    activeTokenPrice && depositAmountAsBigInt
                      ? fixed(depositAmountAsBigInt, activeToken.decimals).mul(
                          activeTokenPrice,
                          18, // prices are always in 18 decimals
                        ).bigint
                      : 0n,
                  decimals: activeToken.decimals,
                  places: 2,
                })}`}
              </label>
            ) : null
          }
          bottomRightElement={
            <div className="flex flex-col gap-1 text-sm text-neutral-content">
              <span>
                {activeTokenBalance
                  ? `Balance: ${formatBalance({
                      balance: activeTokenBalance?.value,
                      decimals: activeToken.decimals,
                      places: activeToken.places,
                    })}`
                  : undefined}
              </span>
            </div>
          }
          onChange={(newAmount) => setAmount(newAmount)}
        />
      }
      primaryStats={
        <OpenLongStats
          hyperdrive={hyperdrive}
          activeToken={activeToken}
          amountPaid={depositAmountAsBigInt || 0n}
          bondAmount={bondsReceived || 0n}
          openLongPreviewStatus={openLongPreviewStatus}
          asBase={activeToken.address === baseToken.address}
          vaultSharePrice={poolInfo?.vaultSharePrice}
        />
      }
      transactionPreview={
        depositAmountAsBigInt ? (
          <OpenLongPreview
            hyperdrive={hyperdrive}
            spotRateAfterOpen={spotRateAfterOpen}
            curveFee={curveFee}
            activeToken={activeToken}
            amountPaid={depositAmountAsBigInt || 0n}
            bondAmount={bondsReceived || 0n}
            openLongPreviewStatus={openLongPreviewStatus}
            asBase={activeToken.address === baseToken.address}
            vaultSharePrice={poolInfo?.vaultSharePrice}
          />
        ) : null
      }
      actionButton={(() => {
        if (marketState?.isPaused) {
          return (
            <InvalidTransactionButton wide>
              This market is paused
            </InvalidTransactionButton>
          );
        }

        if (!account) {
          return <ConnectWalletButton wide />;
        }

        if (connectedChainId !== hyperdrive.chainId) {
          return (
            <SwitchNetworksButton
              targetChainId={hyperdrive.chainId}
              targetChainName={appConfig.chains[hyperdrive.chainId].name}
            />
          );
        }

        if (!!depositAmountAsBigInt && !hasEnoughLiquidity) {
          return (
            <InvalidTransactionButton wide>
              Pool limit exceeded. Max long is{" "}
              {formatBalance({
                balance: maxBondsOut || 0n,
                decimals: baseToken.decimals,
                places: baseToken.places,
              })}{" "}
              hy{baseToken.symbol}
            </InvalidTransactionButton>
          );
        }
        if (!!depositAmountAsBigInt && !hasEnoughBalance) {
          return (
            <InvalidTransactionButton wide>
              Insufficient balance
            </InvalidTransactionButton>
          );
        }

        if (!hasEnoughAllowance) {
          return (
            <ApproveTokenChoices
              spender={hyperdrive.address}
              token={activeToken}
              amountAsBigInt={depositAmountAsBigInt}
              amount={depositAmount}
            />
          );
        }

        if (openLongStatus === "loading") {
          return <LoadingButton label="Opening Long" variant="primary" />;
        }

        return (
          <button
            disabled={!openLong}
            className="daisy-btn daisy-btn-circle daisy-btn-primary w-full disabled:bg-primary disabled:text-base-100 disabled:opacity-30"
            onClick={(e) => {
              openLong?.();
              onOpenLong?.(e);
            }}
          >
            Open Long
          </button>
        );
      })()}
    />
  );
}
