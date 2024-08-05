import { fixed } from "@delvtech/fixed-point-wasm";
import {
  adjustAmountByPercentage,
  getCheckpointTime,
} from "@delvtech/hyperdrive-js-core";
import {
  findBaseToken,
  findYieldSourceToken,
  HyperdriveConfig,
} from "@hyperdrive/appconfig";
import * as dnum from "dnum";
import { MouseEvent, ReactElement, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { MAX_UINT256 } from "src/base/constants";
import { convertMillisecondsToDays } from "src/base/convertMillisecondsToDays";
import { isTestnetChain } from "src/chains/isTestnetChain";
import { getIsValidTradeSize } from "src/hyperdrive/getIsValidTradeSize";
import { getHasEnoughAllowance } from "src/token/getHasEnoughAllowance";
import { getHasEnoughBalance } from "src/token/getHasEnoughBalance";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { ConnectWalletButton } from "src/ui/base/components/ConnectWallet";
import { LoadingButton } from "src/ui/base/components/LoadingButton";
import { PrimaryStat } from "src/ui/base/components/PrimaryStat";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useNumericInput } from "src/ui/base/hooks/useNumericInput";
import { useAccruedYield } from "src/ui/hyperdrive/hooks/useAccruedYield";
import { usePoolInfo } from "src/ui/hyperdrive/hooks/usePoolInfo";
import { useMaxShort } from "src/ui/hyperdrive/shorts/hooks/useMaxShort";
import { useOpenShort } from "src/ui/hyperdrive/shorts/hooks/useOpenShort";
import { usePreviewOpenShort } from "src/ui/hyperdrive/shorts/hooks/usePreviewOpenShort";
import { OpenShortPreview } from "src/ui/hyperdrive/shorts/OpenShortPreview/OpenShortPreview";
import { TransactionView } from "src/ui/hyperdrive/TransactionView";
import { ApproveTokenChoices } from "src/ui/token/ApproveTokenChoices";
import { useActiveToken } from "src/ui/token/hooks/useActiveToken";
import { useSlippageSettings } from "src/ui/token/hooks/useSlippageSettings";
import { useTokenAllowance } from "src/ui/token/hooks/useTokenAllowance";
import { useTokenBalance } from "src/ui/token/hooks/useTokenBalance";
import { useTokenFiatPrices } from "src/ui/token/hooks/useTokenFiatPrices";
import { SlippageSettingsTwo } from "src/ui/token/SlippageSettingsTwo";
import { TokenInputTwo } from "src/ui/token/TokenInputTwo";
import { TokenPickerTwo } from "src/ui/token/TokenPickerTwo";
import { useYieldSourceRate } from "src/ui/vaults/useYieldSourceRate";
import { Address, formatUnits } from "viem";
import { useAccount, useBlock, useChainId } from "wagmi";

interface OpenShortPositionFormProps {
  hyperdrive: HyperdriveConfig;
  onOpenShort?: (e: MouseEvent<HTMLButtonElement>) => void;
}

export function OpenShortForm({
  hyperdrive,
  onOpenShort,
}: OpenShortPositionFormProps): ReactElement {
  const { address: account } = useAccount();
  const appConfig = useAppConfig();
  const chainId = useChainId();
  const { poolInfo } = usePoolInfo({ hyperdriveAddress: hyperdrive.address });
  const baseToken = findBaseToken({
    baseTokenAddress: hyperdrive.baseToken,
    tokens: appConfig.tokens,
  });
  const sharesToken = findYieldSourceToken({
    yieldSourceTokenAddress: hyperdrive.sharesToken,
    tokens: appConfig.tokens,
  });
  const { vaultRate, vaultRateStatus } = useYieldSourceRate({
    hyperdriveAddress: hyperdrive.address,
  });
  const { balance: baseTokenBalance } = useTokenBalance({
    account,
    tokenAddress: baseToken.address,
    decimals: baseToken.decimals,
  });

  const { balance: sharesTokenBalance } = useTokenBalance({
    account,
    tokenAddress: sharesToken.address,
    decimals: sharesToken.decimals,
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

  if (shareTokenDepositsEnabled) {
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
        : sharesToken.address,
      tokens: baseTokenDepositEnabled
        ? [baseToken, sharesToken]
        : [sharesToken],
    });

  const tokenPrices = useTokenFiatPrices([activeToken.address]);
  const activeTokenPrice =
    tokenPrices?.[activeToken.address.toLowerCase() as Address];

  // All tokens besides ETH require an allowance to spend it on hyperdrive
  const requiresAllowance = !isActiveTokenEth;
  const { tokenAllowance: activeTokenAllowance } = useTokenAllowance({
    account,
    enabled: requiresAllowance,
    spender: hyperdrive.address,
    tokenAddress: activeToken.address,
  });

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
    spotPriceAfterOpen,
    curveFee,
    status: openShortPreviewStatus,
  } = usePreviewOpenShort({
    hyperdriveAddress: hyperdrive.address,
    amountOfBondsToShort: amountOfBondsToShortAsBigInt,
    asBase: activeToken.address === baseToken.address,
  });

  const { data: currentBlockData } = useBlock();
  // console.log(currentBlockData, "currentBlockData");
  const { accruedYield, status: accruedYieldStatus } = useAccruedYield({
    hyperdrive,
    bondAmount: amountOfBondsToShortAsBigInt || 0n,
    checkpointTime: getCheckpointTime(
      currentBlockData?.timestamp || 0n,
      hyperdrive.poolConfig.checkpointDuration,
    ),
  });

  const backpaidInterest =
    accruedYieldStatus === "success" ? accruedYield || 0n : 0n;
  const baseAmount = (traderDeposit || 0n) - backpaidInterest;
  // console.log(
  //   "baseAmount",
  //   formatBalance({ balance: baseAmount, decimals: 18 }),
  // );
  // const solvedShortAprFromDeposit = fixed(baseAmount, 18).div(
  //   amountOfBondsToShortAsBigInt || 0n,
  //   18,
  // );

  const bondsMinusBase = dnum.sub(
    [amountOfBondsToShortAsBigInt || 0n, 18],
    [baseAmount, 18],
  )[0];

  const baseDividedByBondsMinusBase = dnum.divide(
    [baseAmount || 1n, 18],
    [bondsMinusBase || 1n, 18],
  )[0];
  console.log(
    "baseDividedByBondsMinusBase",
    formatBalance({
      balance: baseDividedByBondsMinusBase,
      decimals: 18,
      places: 10,
    }),
  );

  // const baseDividedByBondsMinusBase = fixed(baseAmount || 1n, 18).div(
  //   bondsMinusBase || 1n,
  //   18,
  // ).bigint;
  // const baseDividedByBondsMinusBase = dnum.divide(
  //   [baseAmount, 18],
  //   bondsMinusBase || 1n,
  // )[0];

  // const timeRange = currentBlock.timestamp - startBlock.timestamp; // bigint

  // Convert values to Fixed type, to perform fixed point math
  const fixedTimeRange = fixed(
    hyperdrive.poolConfig.positionDuration * BigInt(1e18),
  );
  const fixedYear = fixed(BigInt(31536000n) * BigInt(1e18));
  const fixedTimeRangeInYears = fixedTimeRange.div(fixedYear);

  // console.log(
  //   formatBalance({ balance: baseAmount, decimals: 18, places: 10 }),
  //   "baseAmount",
  // );
  // console.log(
  //   formatBalance({ balance: bondsMinusBase, decimals: 18, places: 10 }),
  //   "bondsMinusBase",
  // );

  // console.log(
  //   formatBalance({
  //     balance: baseDividedByBondsMinusBase,
  //     decimals: 18,
  //     places: 10,
  //   }),
  //   "baseDividedByBondsMinusBase",
  // ); //

  // console.log(baseAmountMinusBonds, "baseAmountMinusBonds");

  // const shortAprFromDeposit = baseDividedByBondsMinusBase
  //   ? baseDividedByBondsMinusBase - baseAmount
  //   : 0n;

  // console.log(shortAprFromDeposit, "shortAprFromDeposit");
  // console.log(
  //   formatBalance({
  //     balance: shortAprFromDeposit || 0n,
  //     decimals: 18,
  //     places: 10,
  //   }),
  //   "shortAprFromDeposit",
  // );

  // console.log(
  //   formatBalance({
  //     balance: baseAmount || 0n,
  //     decimals: 18,
  //     places: 10,
  //   }),
  //   "baseAmount",
  // );
  // console.log(
  //   formatBalance({
  //     balance: amountOfBondsToShortAsBigInt || 0n,
  //     decimals: 18,
  //     places: 10,
  //   }),
  //   "amountOfBondsToShortAsBigInt",
  // );

  // console.log(
  //   formatBalance({
  //     balance: traderDeposit || 0n,
  //     decimals: baseToken.decimals,
  //     includeCommas: true,
  //     places: baseToken.places,
  //   }),
  //   "tradeDeposit",
  // );

  // console.log(
  //   fixed(shortAprFromDeposit || 0n).format({ decimals: 18 }),
  //   "shortAprFromDeposit",
  // );

  // console.log(amountOfBondsToShortAsBigInt, "amountOfBondsToShortAsBigInt");

  // const baseAmount = fixed(amountOfBondsToShortAsBigInt || 0n).min(
  //   backpaidInterest || 0n,
  // );
  // // .format({ decimals: baseToken.decimals });
  // const bondAmountMinusBaseAmount = fixed(
  //   amountOfBondsToShortAsBigInt || 0n,
  // ).min(baseAmount || 0n);

  // console.log(baseAmount, "baseAmount");

  // console.log(
  //   amountOfBondsToShortAsBigInt - baseAmount,
  //   "bondAmountMinusBaseAmount",
  // );
  // const shortAprFromDeposit = fixed(bondAmountMinusBaseAmount, 18).div(
  //   baseAmount,
  //   18,
  // );
  // console.log(shortAprFromDeposit, "shortAprFromDeposit");

  // TODO: I think I need to trigger the above usePreviewOpenShort to handle the other input here.

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
    hyperdriveAddress: hyperdrive.address,
    budget: MAX_UINT256,
  });

  // The amount you earn yield on from the given budget
  const { maxBondsOut: maxBondsOutFromPayment } = useMaxShort({
    hyperdriveAddress: hyperdrive.address,
    budget: amountToPayAsBigInt || 0n,
    enabled: !!amountToPayAsBigInt,
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

  const { openShort, openShortStatus } = useOpenShort({
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
      (window as any)["open-short"].close();
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
      ? fixed(amountOfBondsToShortAsBigInt, 18)
          .div(traderDeposit, 18)
          .format({ decimals: 2, rounding: "trunc" })
      : "0";

  // console.log({
  //   bondAmount: amountOfBondsToShortAsBigInt,
  //   vaultSharePrice: poolInfo?.vaultSharePrice,
  // });

  return (
    <TransactionView
      tokenInput={
        <div className="flex flex-col gap-3">
          <TokenInputTwo
            name={`${baseToken.symbol}-input`}
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
              <SlippageSettingsTwo
                onSlippageChange={setSlippage}
                slippage={slippage}
                activeOption={activeSlippageOption}
                onActiveOptionChange={setActiveSlippageOption}
                tooltip="Your transaction will revert if the price changes unfavorably by more than this percentage."
              />
            }
            onChange={(newAmount) => {
              setShortAmount(newAmount);
              setActiveInput("bonds");
            }}
            bottomLeftElement={
              // Defillama fetches the token price via {chain}:{tokenAddress}. Since the token address differs on testnet, price display is disabled there.
              !isTestnetChain(chainId) ? (
                <label className="text-sm text-neutral-content">
                  {`$${formatBalance({
                    balance:
                      activeTokenPrice && traderDeposit
                        ? fixed(traderDeposit, activeToken.decimals).mul(
                            activeTokenPrice,
                            activeToken.decimals,
                          ).bigint
                        : 0n,
                    decimals: activeToken.decimals,
                    places: 2,
                  })}`}
                </label>
              ) : null
            }
          />
          <TokenInputTwo
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
              console.log("newAmount", newAmount);
              setActiveInput("budget");
              setPaymentAmount(newAmount);
            }}
            bottomLeftElement={
              // Defillama fetches the token price via {chain}:{tokenAddress}. Since the token address differs on testnet, price display is disabled there.
              !isTestnetChain(chainId) ? (
                <label className="text-sm text-neutral-content">
                  {`$${formatBalance({
                    balance:
                      activeTokenPrice && traderDeposit
                        ? fixed(traderDeposit, activeToken.decimals).mul(
                            activeTokenPrice,
                            activeToken.decimals,
                          ).bigint
                        : 0n,
                    decimals: activeToken.decimals,
                    places: 2,
                  })}`}
                </label>
              ) : null
            }
            bottomRightElement={
              <div className="flex flex-col gap-1 text-xs text-neutral-content">
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
        <div className="flex flex-row justify-between py-8">
          <PrimaryStat
            label="Exposure Multiplier"
            value={exposureMultiplier}
            valueClassName="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent flex items-end font-bold text-h5"
            valueUnit="X"
            subValue={
              vaultRateStatus === "loading" && !vaultRate ? (
                <Skeleton className="w-42 h-8" />
              ) : (
                <>
                  {sharesToken.extensions.shortName} @{" "}
                  {vaultRate?.formatted || 0} APY
                </>
              )
            }
          />
        </div>
      }
      transactionPreview={
        <OpenShortPreview
          hyperdrive={hyperdrive}
          tokenIn={activeToken}
          costBasis={traderDeposit}
          shortSize={amountOfBondsToShortAsBigInt}
          spotRateAfterOpen={spotRateAfterOpen}
          curveFee={curveFee}
          openShortPreviewStatus={openShortPreviewStatus}
        />
      }
      disclaimer={(() => {
        // If the user has not input a short amount, don't show the disclaimer
        if (!amountOfBondsToShortAsBigInt) {
          return null;
        }
        // If the user has input an amount, but that amount makes the hasEnoughLiquidity become falsy, show the pool limit exceeded note
        else if (!!amountOfBondsToShortAsBigInt && !hasEnoughLiquidity) {
          return (
            <p className="text-center text-sm text-error">
              Pool limit exceeded. Max short size is{" "}
              {formatBalance({
                balance: maxBondsOut || 0n,
                decimals: hyperdrive.decimals,
                includeCommas: true,
                places: activeToken.places,
              })}{" "}
              hy{baseToken.symbol}
            </p>
          );
        }
        // In all other cases where the user has input an amount, show the disclaimer, but ensure a skeleton is shown only on the stats that are being refetched on new blocks
        return (
          <div className="flex flex-col gap-4">
            {!hasEnoughBalance && openShortPreviewStatus !== "loading" ? (
              <p className="text-center text-sm text-error">
                Insufficient balance
              </p>
            ) : null}
            <p className="text-center text-sm text-neutral-content">
              You pay{" "}
              <strong>
                {openShortPreviewStatus === "loading" ? (
                  <span className="inline-block">
                    <Skeleton width={50} />
                  </span>
                ) : (
                  formatBalance({
                    balance: traderDeposit || 0n,
                    decimals: activeToken.decimals,
                    includeCommas: true,
                    places: activeToken.places,
                  })
                )}{" "}
                {activeToken.symbol}
              </strong>{" "}
              in exchange for the yield on{" "}
              <strong>
                {openShortPreviewStatus === "loading" ? (
                  <span className="inline-block">
                    <Skeleton width={50} />
                  </span>
                ) : (
                  formatBalance({
                    balance: amountOfBondsToShortAsBigInt,
                    decimals: activeToken.decimals,
                    includeCommas: true,
                    places: activeToken.places,
                  })
                )}{" "}
                {baseToken.symbol}
              </strong>{" "}
              deposited into <strong>{sharesToken.extensions.shortName}</strong>{" "}
              for{" "}
              <strong>
                {convertMillisecondsToDays(
                  Number(hyperdrive.poolConfig.positionDuration * 1000n),
                )}{" "}
                days.
              </strong>{" "}
            </p>
            {hyperdrive.withdrawOptions.isBaseTokenWithdrawalEnabled ? null : (
              <p className="text-center text-sm text-neutral-content">
                {`When closing your Short position, you'll receive ${sharesToken.symbol}.`}
              </p>
            )}
          </div>
        );
      })()}
      actionButton={(() => {
        if (!account) {
          return <ConnectWalletButton />;
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
            disabled={!openShort || !hasEnoughBalance}
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
