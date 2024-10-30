import { fixed } from "@delvtech/fixed-point-wasm";
import { adjustAmountByPercentage } from "@delvtech/hyperdrive-js-core";

import {
  appConfig,
  findBaseToken,
  findToken,
  HyperdriveConfig,
} from "@delvtech/hyperdrive-appconfig";
import { MouseEvent, ReactElement, useState } from "react";
import { MAX_UINT256 } from "src/base/constants";
import { formatRate } from "src/base/formatRate";
import { isTestnetChain } from "src/chains/isTestnetChain";
import { calculateMarketYieldMultiplier } from "src/hyperdrive/calculateMarketYieldMultiplier";
import { getIsValidTradeSize } from "src/hyperdrive/getIsValidTradeSize";
import { getHasEnoughAllowance } from "src/token/getHasEnoughAllowance";
import { getHasEnoughBalance } from "src/token/getHasEnoughBalance";
import { LoadingButton } from "src/ui/base/components/LoadingButton";
import { PrimaryStat } from "src/ui/base/components/PrimaryStat";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { formatDate } from "src/ui/base/formatting/formatDate";
import { useNumericInput } from "src/ui/base/hooks/useNumericInput";
import { SwitchNetworksButton } from "src/ui/chains/SwitchChainButton/SwitchChainButton";
import { ConnectWalletButton } from "src/ui/compliance/ConnectWallet";
import { InvalidTransactionButton } from "src/ui/hyperdrive/InvalidTransactionButton";
import { TransactionView } from "src/ui/hyperdrive/TransactionView";
import { useIsNewPool } from "src/ui/hyperdrive/hooks/useIsNewPool";
import { useMarketState } from "src/ui/hyperdrive/hooks/useMarketState";
import { usePoolInfo } from "src/ui/hyperdrive/hooks/usePoolInfo";
import { useCurrentLongPrice } from "src/ui/hyperdrive/longs/hooks/useCurrentLongPrice";
import { OpenShortPreview } from "src/ui/hyperdrive/shorts/OpenShortPreview/OpenShortPreview";
import { useMaxShort } from "src/ui/hyperdrive/shorts/hooks/useMaxShort";
import { useOpenShort } from "src/ui/hyperdrive/shorts/hooks/useOpenShort";
import { usePreviewOpenShort } from "src/ui/hyperdrive/shorts/hooks/usePreviewOpenShort";
import { PositionPicker } from "src/ui/markets/PositionPicker";
import { useMorphoVaultRewards } from "src/ui/rewards/useMorphoRate";
import { eligibleMarketsForMorphoVaultRewards } from "src/ui/rewards/useRewards";
import { ApproveTokenChoices } from "src/ui/token/ApproveTokenChoices";
import { SlippageSettingsTwo } from "src/ui/token/SlippageSettingsTwo";
import { TokenInputTwo } from "src/ui/token/TokenInputTwo";
import { TokenPickerTwo } from "src/ui/token/TokenPickerTwo";
import { useActiveToken } from "src/ui/token/hooks/useActiveToken";
import { useSlippageSettings } from "src/ui/token/hooks/useSlippageSettings";
import { useTokenAllowance } from "src/ui/token/hooks/useTokenAllowance";
import { useTokenBalance } from "src/ui/token/hooks/useTokenBalance";
import { useTokenFiatPrice } from "src/ui/token/hooks/useTokenFiatPrice";
import { useYieldSourceRate } from "src/ui/vaults/useYieldSourceRate";
import { formatUnits } from "viem";
import { base } from "viem/chains";
import { useAccount, useChainId } from "wagmi";

(window as any).fixed = fixed;

interface OpenShortPositionFormProps {
  hyperdrive: HyperdriveConfig;
  onOpenShort?: (e: MouseEvent<HTMLButtonElement>) => void;
}

export function OpenShortForm({
  hyperdrive,
  onOpenShort,
}: OpenShortPositionFormProps): ReactElement {
  const { address: account } = useAccount();
  const connectedChainId = useChainId();
  const { marketState } = useMarketState({
    hyperdriveAddress: hyperdrive.address,
    chainId: hyperdrive.chainId,
  });

  const { poolInfo } = usePoolInfo({
    chainId: hyperdrive.chainId,
    hyperdriveAddress: hyperdrive.address,
  });
  const baseToken = findBaseToken({
    hyperdriveChainId: hyperdrive.chainId,
    hyperdriveAddress: hyperdrive.address,
    appConfig,
  });
  const { vaultRate, vaultRateStatus } = useYieldSourceRate({
    chainId: hyperdrive.chainId,
    hyperdriveAddress: hyperdrive.address,
  });
  const isNewPool = useIsNewPool({ hyperdrive });
  const { balance: baseTokenBalance } = useTokenBalance({
    account,
    tokenAddress: baseToken.address,
    decimals: baseToken.decimals,
  });
  const { longPrice, longPriceStatus } = useCurrentLongPrice({
    chainId: hyperdrive.chainId,
    hyperdriveAddress: hyperdrive.address,
  });

  const { balance: sharesTokenBalance } = useTokenBalance({
    account,
    tokenAddress: hyperdrive.poolConfig.vaultSharesToken,
    decimals: hyperdrive.decimals,
  });

  const baseTokenDepositEnabled =
    hyperdrive.depositOptions.isBaseTokenDepositEnabled;
  const shareTokenDepositsEnabled =
    hyperdrive.depositOptions.isShareTokenDepositsEnabled;
  const tokenOptions = [];

  if (baseTokenDepositEnabled) {
    tokenOptions.push({
      tokenConfig: baseToken,
      tokenBalance: baseTokenBalance?.value,
    });
  }

  const sharesToken = findToken({
    chainId: hyperdrive.chainId,
    tokens: appConfig.tokens,
    tokenAddress: hyperdrive.poolConfig.vaultSharesToken,
  });

  if (sharesToken && shareTokenDepositsEnabled) {
    tokenOptions.push({
      tokenConfig: sharesToken,
      tokenBalance: sharesTokenBalance?.value,
    });
  }

  const { activeToken, activeTokenBalance, setActiveToken, isActiveTokenEth } =
    useActiveToken({
      account,
      defaultActiveToken: baseTokenDepositEnabled
        ? baseToken.address
        : hyperdrive.poolConfig.vaultSharesToken,
      tokens: tokenOptions.map((token) => token.tokenConfig),
    });

  const { fiatPrice: activeTokenPrice } = useTokenFiatPrice({
    tokenAddress: activeToken.address,
    chainId: activeToken.chainId,
  });
  const { fiatPrice: baseTokenPrice } = useTokenFiatPrice({
    tokenAddress: baseToken.address,
    chainId: baseToken.chainId,
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

  // TODO: Implement the two way input switch once getMaxShort is fixed on the sdk
  const [activeInput, setActiveInput] = useState<"bonds" | "budget">("bonds");

  const {
    amount: amountOfBondsToShort,
    amountAsBigInt: amountOfBondsToShortAsBigInt,
    setAmount: setShortAmount,
  } = useNumericInput({
    decimals: hyperdrive.decimals,
  });
  const {
    amount: amountToPay,
    amountAsBigInt: amountToPayAsBigInt,
    setAmount: setPaymentAmount,
  } = useNumericInput({
    decimals: hyperdrive.decimals,
  });

  const {
    traderDeposit,
    spotRateAfterOpen,
    curveFee,
    fixedRatePaid,
    status: openShortPreviewStatus,
  } = usePreviewOpenShort({
    chainId: hyperdrive.chainId,
    hyperdriveAddress: hyperdrive.address,
    amountOfBondsToShort: amountOfBondsToShortAsBigInt,
    asBase: activeToken.address === baseToken.address,
  });

  const hasEnoughBalance = getHasEnoughBalance({
    amount: traderDeposit,
    balance: activeTokenBalance?.value,
  });

  // Increase the expected trader deposit from the SDK by 1% to account for any
  // discrepancies between calling the SDK's `previewOpenShort` method and the
  // actual `openShort` method on the contract. This is only used for setting
  // allowances.
  // TODO: We can remove this once this is resolved:
  // https://github.com/delvtech/hyperdrive/issues/894
  const paddedTraderDepositForAllowance = adjustAmountByPercentage({
    amount: traderDeposit || 0n,
    decimals: activeToken.decimals,
    direction: "up",
    percentage: 1n,
  });
  const hasEnoughAllowance = getHasEnoughAllowance({
    allowance: activeTokenAllowance,
    amount: paddedTraderDepositForAllowance,
    requiresAllowance,
  });

  const { maxBondsOut } = useMaxShort({
    chainId: hyperdrive.chainId,
    hyperdriveAddress: hyperdrive.address,
    budget: MAX_UINT256,
  });

  const { maxBondsOut: maxBondsOutFromPayment } = useMaxShort({
    chainId: hyperdrive.chainId,
    hyperdriveAddress: hyperdrive.address,
    budget: amountToPayAsBigInt || 0n,
  });

  const hasEnoughLiquidity = getIsValidTradeSize({
    tradeAmount: amountOfBondsToShortAsBigInt,
    maxTradeSize: maxBondsOut,
  });

  const {
    setSlippage,
    slippage,
    slippageAsBigInt,
    activeOption: activeSlippageOption,
    setActiveOption: setActiveSlippageOption,
  } = useSlippageSettings({ decimals: activeToken.decimals });

  const maxDepositAfterSlippage =
    traderDeposit &&
    adjustAmountByPercentage({
      amount: traderDeposit,
      decimals: activeToken.decimals,
      direction: "up",
      percentage: slippageAsBigInt,
    });

  const { morphoVaultData } = useMorphoVaultRewards({
    hyperdrive,
    enabled:
      eligibleMarketsForMorphoVaultRewards[base.id]?.includes(
        hyperdrive.address,
      ) ?? false,
  });

  const { openShort, openShortStatus } = useOpenShort({
    chainId: hyperdrive.chainId,
    hyperdriveAddress: hyperdrive.address,
    amountBondShorts: amountOfBondsToShortAsBigInt,
    minVaultSharePrice: poolInfo?.vaultSharePrice,
    maxDeposit: maxDepositAfterSlippage,
    destination: account,
    enabled: openShortPreviewStatus === "success" && hasEnoughAllowance,
    asBase: activeToken.address === baseToken.address,
    // Some hyperdrives allow native eth deposits, so we must include the
    // traderDeposit as msg.value
    ethValue: isActiveTokenEth ? traderDeposit : undefined,
    onSubmitted: () => {
      (window as any)["open-short"]?.close();
    },
    onExecuted: () => {
      setShortAmount("");
      setPaymentAmount("");
    },
  });

  // Max button is wired up to the user's balance, or the pool's max long.
  // Whichever is smallest.
  let maxButtonValue = "0";
  if (activeTokenBalance && maxBondsOut) {
    maxButtonValue = formatUnits(
      activeTokenBalance.value > maxBondsOut
        ? maxBondsOut
        : activeTokenBalance?.value,
      activeToken.decimals,
    );
  }

  const exposureMultiplier =
    amountOfBondsToShortAsBigInt && traderDeposit
      ? fixed(amountOfBondsToShortAsBigInt, activeToken.decimals)
          .div(traderDeposit, activeToken.decimals)
          .format({ decimals: 2, rounding: "trunc" })
      : calculateMarketYieldMultiplier(longPrice ?? 0n).format({
          decimals: 2,
          rounding: "trunc",
        });

  const maturesOnLabel = formatDate(
    Date.now() + Number(hyperdrive.poolConfig.positionDuration * 1000n),
  );
  return (
    <TransactionView
      tokenInput={
        <div className="flex flex-col gap-3">
          <TokenInputTwo
            name={`${baseToken.symbol}-input`}
            variant="lighter"
            inputLabel="Earn yield on"
            token={
              <TokenPickerTwo
                tokens={[
                  {
                    tokenConfig: baseToken,
                    tokenBalance: baseTokenBalance?.value,
                  },
                ]}
                activeTokenAddress={activeToken.address}
                onChange={(tokenAddress) => {
                  setActiveToken(tokenAddress);

                  // TODO: Determin if there is a bug here.
                  setPaymentAmount("0");
                }}
              />
            }
            value={
              activeInput === "bonds"
                ? amountOfBondsToShort || ""
                : maxBondsOutFromPayment
                  ? formatUnits(maxBondsOutFromPayment, baseToken.decimals)
                  : ""
            }
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
            onChange={(newAmount) => {
              setShortAmount(newAmount);
              setActiveInput("bonds");
            }}
            bottomRightElement={
              vaultRateStatus === "success" && vaultRate ? (
                <>
                  {appConfig.yieldSources[hyperdrive.yieldSource].shortName} @{" "}
                  {isNewPool
                    ? "✨New✨"
                    : `${
                        morphoVaultData
                          ? `${formatRate(
                              vaultRate.vaultRate +
                                BigInt(
                                  (morphoVaultData.reward?.supplyApr ?? 0) *
                                    1e18,
                                ),
                              18,
                              false,
                            )}%`
                          : vaultRate.formatted
                      } APY`}
                </>
              ) : null
            }
            bottomLeftElement={
              // Defillama fetches the token price via {chain}:{tokenAddress}. Since the token address differs on testnet, price display is disabled there.
              !isTestnetChain(hyperdrive.chainId) ? (
                <label className="text-sm text-neutral-content">
                  {`$${formatBalance({
                    balance:
                      baseTokenPrice && traderDeposit
                        ? fixed(
                            amountOfBondsToShortAsBigInt || 0n,
                            baseToken.decimals,
                          ).mul(baseTokenPrice).bigint
                        : 0n,
                    decimals: baseToken.decimals,
                    places: 2,
                  })}`}
                </label>
              ) : null
            }
          />
          <TokenInputTwo
            variant="lighter"
            name={`${baseToken.symbol}-input`}
            // This input is disabled until the getMaxShort is fixed on the sdk.
            disabled
            token={
              <TokenPickerTwo
                tokens={tokenOptions}
                activeTokenAddress={activeToken.address}
                onChange={(tokenAddress) => {
                  setActiveToken(tokenAddress);
                  setPaymentAmount("0");
                }}
              />
            }
            inputLabel="You pay"
            value={
              activeInput === "budget"
                ? amountToPay || "0"
                : formatUnits(traderDeposit || 0n, activeToken.decimals)
            }
            maxValue={maxButtonValue}
            onChange={(newAmount) => {
              setActiveInput("budget");
              setPaymentAmount(newAmount);
            }}
            bottomLeftElement={
              // Defillama fetches the token price via {chain}:{tokenAddress}. Since the token address differs on testnet, price display is disabled there.
              !isTestnetChain(hyperdrive.chainId) ? (
                <label className="text-sm text-neutral-content">
                  {`$${formatBalance({
                    balance:
                      activeTokenPrice && traderDeposit
                        ? fixed(traderDeposit, activeToken.decimals).mul(
                            activeTokenPrice,
                          ).bigint
                        : 0n,
                    decimals: activeToken.decimals,
                    places: 2,
                  })}`}
                </label>
              ) : null
            }
            bottomRightElement={
              <div className="flex flex-col text-neutral-content">
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
          />
        </div>
      }
      primaryStats={
        <div className="flex justify-between px-4 py-8">
          <PrimaryStat
            label="Exposure Multiplier"
            tooltipContent={`This represents how much exposure you get to ${
              appConfig.yieldSources[hyperdrive.yieldSource].shortName
            } compared to what you pay to open the short.`}
            value={
              <span className="text-h3 font-bold">{exposureMultiplier}</span>
            }
            valueContainerClassName="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent flex items-end"
            valueUnit="x"
            unitClassName="text-h3 font-bold"
            subValue={`Matures on ${maturesOnLabel}`}
            valueLoading={longPriceStatus === "loading"}
          />
          <div className="daisy-divider daisy-divider-horizontal" />
          <PrimaryStat
            label="Rate you pay"
            tooltipContent={`The fixed rate you pay upfront that determines the cost-basis of this short.`}
            value={
              <span className="text-h3 font-bold">
                {formatRate(fixedRatePaid || 0n)}
              </span>
            }
            valueContainerClassName="flex items-end"
            valueUnit="APR"
            unitClassName="text-xs mb-1 font-bold"
            subValue={
              <>
                1 hy{baseToken.symbol} ≈{" "}
                {formatBalance({
                  balance: longPrice ?? 0n,
                  decimals: 18, // prices are always 18 decimals regardless of the base token,
                  places: baseToken.places,
                })}{" "}
                {baseToken.symbol}
              </>
            }
          />
        </div>
      }
      transactionPreview={
        amountOfBondsToShortAsBigInt ? (
          <OpenShortPreview
            hyperdrive={hyperdrive}
            shortSize={amountOfBondsToShortAsBigInt}
            spotRateAfterOpen={spotRateAfterOpen}
            curveFee={curveFee}
            openShortPreviewStatus={openShortPreviewStatus}
          />
        ) : undefined
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

        if (!!amountOfBondsToShortAsBigInt && !hasEnoughLiquidity) {
          return (
            <InvalidTransactionButton wide>
              Pool limit exceeded. Max short size is{" "}
              {formatBalance({
                balance: maxBondsOut || 0n,
                decimals: hyperdrive.decimals,
                includeCommas: true,
                places: activeToken.places,
              })}{" "}
              hy{baseToken.symbol}
            </InvalidTransactionButton>
          );
        }
        if (!hasEnoughBalance && openShortPreviewStatus !== "loading") {
          <InvalidTransactionButton wide>
            Insufficient balance
          </InvalidTransactionButton>;
        }

        if (!hasEnoughAllowance) {
          return (
            <ApproveTokenChoices
              spender={hyperdrive.address}
              token={activeToken}
              amountAsBigInt={paddedTraderDepositForAllowance}
              amount={formatUnits(
                paddedTraderDepositForAllowance || 0n,
                activeToken.decimals,
              )}
            />
          );
        }
        if (openShortStatus === "loading") {
          return <LoadingButton label="Opening Short" variant="primary" />;
        }
        return (
          <button
            disabled={!openShort}
            className="daisy-btn daisy-btn-circle daisy-btn-primary w-full disabled:bg-primary disabled:text-base-100 disabled:opacity-30"
            onClick={(e) => {
              openShort?.();
              onOpenShort?.(e);
            }}
          >
            Open Short
          </button>
        );
      })()}
    />
  );
}
