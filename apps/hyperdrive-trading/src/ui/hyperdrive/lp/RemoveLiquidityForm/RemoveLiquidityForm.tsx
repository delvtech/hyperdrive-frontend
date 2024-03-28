import {
  EmptyExtensions,
  findBaseToken,
  findYieldSourceToken,
  HyperdriveConfig,
  TokenConfig,
} from "@hyperdrive/appconfig";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import classNames from "classnames";
import * as dnum from "dnum";
import { MouseEvent, ReactElement } from "react";
import toast from "react-hot-toast";
import { calculateValueFromPrice } from "src/base/calculateValueFromPrice";
import { SupportedChainId } from "src/chains/supportedChains";
import { getHasEnoughBalance } from "src/token/getHasEnoughBalance";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { LabelValue } from "src/ui/base/components/LabelValue";
import { LoadingButton } from "src/ui/base/components/LoadingButton";
import TransactionToast from "src/ui/base/components/Toaster/TransactionToast";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useActiveItem } from "src/ui/base/hooks/useActiveItem";
import { useNumericInput } from "src/ui/base/hooks/useNumericInput";
import { usePoolInfo } from "src/ui/hyperdrive/hooks/usePoolInfo";
import { usePreviewRemoveLiquidity } from "src/ui/hyperdrive/lp/hooks/usePreviewRemoveLiquidity";
import { useRemoveLiquidity } from "src/ui/hyperdrive/lp/hooks/useRemoveLiquidity";
import { TransactionView } from "src/ui/hyperdrive/TransactionView";
import { WithdrawTokenPicker } from "src/ui/hyperdrive/WithdrawTokenPicker";
import { TokenInput } from "src/ui/token/TokenInput";
import { formatUnits } from "viem";
import { useAccount, useChainId } from "wagmi";
interface RemoveLiquidityFormProps {
  hyperdrive: HyperdriveConfig;
  lpShares: bigint;
  onRemoveLiquidity?: (e: MouseEvent<HTMLButtonElement>) => void;
}

export function RemoveLiquidityForm({
  hyperdrive,
  lpShares,
  onRemoveLiquidity,
}: RemoveLiquidityFormProps): ReactElement {
  const appConfig = useAppConfig();
  const baseToken = findBaseToken({
    baseTokenAddress: hyperdrive.baseToken,
    tokens: appConfig.tokens,
  });

  const sharesToken = findYieldSourceToken({
    yieldSourceTokenAddress: hyperdrive.sharesToken,
    tokens: appConfig.tokens,
  });

  const tokens: TokenConfig<any>[] = [sharesToken];
  if (hyperdrive.withdrawOptions.isBaseTokenWithdrawalEnabled) {
    // base token should be listed first if it's enabled
    tokens.unshift(baseToken);
  }
  const {
    activeItem: activeWithdrawToken,
    setActiveItemId: setActiveWithdrawToken,
  } = useActiveItem({
    items: tokens,
    idField: "address",
    defaultActiveItemId: hyperdrive.withdrawOptions.isBaseTokenWithdrawalEnabled
      ? baseToken.address
      : sharesToken.address,
  });
  const { poolInfo } = usePoolInfo({ hyperdriveAddress: hyperdrive.address });

  const { address: account } = useAccount();
  const chainId = useChainId() as SupportedChainId;

  // Let users type in an amount of base or shares to withdraw
  const {
    amount,
    amountAsBigInt: desiredOut,
    setAmount,
  } = useNumericInput({
    decimals: activeWithdrawToken.decimals,
  });

  // Then calculate the lpSharesIn required to remove that amount of base
  let desiredOutInBase = desiredOut;
  if (activeWithdrawToken.address === sharesToken.address) {
    desiredOutInBase = calculateValueFromPrice({
      amount: desiredOut || 0n,
      unitPrice: poolInfo?.vaultSharePrice || 0n,
      decimals: activeWithdrawToken.decimals,
    });
  }

  const lpSharesIn = calculateRequiredLpSharesIn(
    desiredOutInBase,
    poolInfo?.lpSharePrice,
  );

  // Then we preview that trade to show users the split between the actual base
  // and withdrawal shares they'll receive
  const {
    proceeds: actualValueOut,
    previewRemoveLiquidityStatus,
    withdrawalShares,
  } = usePreviewRemoveLiquidity({
    destination: account,
    lpSharesIn: lpSharesIn,
    hyperdriveAddress: hyperdrive.address,
    minOutputPerShare: 1n,
    asBase:
      hyperdrive.withdrawOptions.isBaseTokenWithdrawalEnabled &&
      activeWithdrawToken.address === baseToken.address,
  });
  const { removeLiquidity, removeLiquidityStatus } = useRemoveLiquidity({
    hyperdriveAddress: hyperdrive.address,
    lpSharesIn: lpSharesIn,
    minOutputPerShare: 1n,
    destination: account,
    enabled: previewRemoveLiquidityStatus === "success",
    asBase:
      hyperdrive.withdrawOptions.isBaseTokenWithdrawalEnabled &&
      activeWithdrawToken.address === baseToken.address,
    onSubmitted: (hash) => {
      (window as any)["withdrawalLpModal"].close();
      toast.loading(
        <TransactionToast message="Removing liquidity..." txHash={hash} />,
      );
    },
    onExecuted: (hash) => {
      setAmount("");
      toast.success(
        <TransactionToast message="Liquidity removed" txHash={hash} />,
      );
    },
  });

  // to format the withdrawal shares out in terms of base, we need to multiply
  // them by the lpSharePrice
  const formattedWithdrawalSharesOut = withdrawalShares
    ? formatBalance({
        balance: calculateValueFromPrice({
          amount: withdrawalShares,
          unitPrice: poolInfo?.lpSharePrice || 0n,
          decimals: baseToken.decimals,
        }),
        decimals: baseToken.decimals,
        places: 4,
      })
    : null;

  const currentLpValueInBase = calculateValueFromPrice({
    amount: lpShares,
    unitPrice: poolInfo?.lpSharePrice || 0n,
    decimals: baseToken.decimals,
  });

  const currentLpValueInShares = poolInfo
    ? dnum.divide(
        [currentLpValueInBase, baseToken.decimals],
        [poolInfo?.vaultSharePrice, hyperdrive.decimals],
      )[0]
    : 0n;
  const activeWithdrawTokenLpValue =
    activeWithdrawToken.address === baseToken.address
      ? currentLpValueInBase
      : currentLpValueInShares;

  const hasEnoughBalance = getHasEnoughBalance({
    amount: lpSharesIn,
    balance: lpShares,
  });

  const slippageReceived = dnum.subtract(
    [actualValueOut || 0n, hyperdrive.decimals],
    [desiredOut || 0n, hyperdrive.decimals],
  )[0];

  return (
    <TransactionView
      tokenInput={
        <TokenInput
          name={baseToken.name}
          token={
            <WithdrawTokenPicker
              hyperdrive={hyperdrive}
              activeWithdrawToken={activeWithdrawToken}
              sharesToken={sharesToken}
              baseToken={baseToken}
              onChange={(tokenAddress) => {
                setActiveWithdrawToken(tokenAddress);
                setAmount("0");
              }}
            />
          }
          value={amount ?? ""}
          maxValue={formatUnits(activeWithdrawTokenLpValue, baseToken.decimals)}
          stat={
            lpShares && !!poolInfo
              ? `Withdrawable: ${formatBalance({
                  balance: activeWithdrawTokenLpValue,
                  decimals: baseToken.decimals,
                  places: 2,
                })} ${activeWithdrawToken.symbol}`
              : undefined
          }
          onChange={(newAmount) => setAmount(newAmount)}
        />
      }
      transactionPreview={
        <>
          <LabelValue
            label="Amount to withdraw"
            value={`${
              actualValueOut
                ? `${formatBalance({
                    balance: desiredOut || 0n,
                    decimals: activeWithdrawToken.decimals,
                    places: 4,
                  })}`
                : "0"
            } ${activeWithdrawToken.symbol}`}
          />
          <LabelValue
            label="Positive slippage"
            value={
              !hasEnoughBalance ? (
                "-"
              ) : (
                <div
                  data-tip="Additional amount you pay or receive for maintaining the lp share price of the pool when removing liquidity"
                  className={classNames(
                    "daisy-tooltip daisy-tooltip-top flex cursor-help items-center border-b border-dashed border-current before:left-0 before:border",
                    {
                      "text-success": slippageReceived > 0n,
                      "text-error": slippageReceived < 0n,
                    },
                  )}
                >
                  {getPositiveSlippageLabel(
                    slippageReceived,
                    baseToken,
                    activeWithdrawToken,
                  )}
                </div>
              )
            }
          />
          <LabelValue
            label="Total you receive"
            value={
              <span className="font-bold">
                {actualValueOut
                  ? `${formatBalance({
                      balance: actualValueOut,
                      decimals: activeWithdrawToken.decimals,
                      places: 4,
                    })}`
                  : "0"}{" "}
                {activeWithdrawToken.symbol}
              </span>
            }
          />
          <LabelValue
            label="Queued for delayed withdrawal"
            value={
              <span className="font-bold">
                {formattedWithdrawalSharesOut || 0} {baseToken.symbol}
              </span>
            }
          />
        </>
      }
      disclaimer={
        <>
          {desiredOut && !hasEnoughBalance ? (
            <p className="mb-2 text-center text-sm text-error">
              Insufficient balance
            </p>
          ) : null}

          <p className="text-center text-sm text-neutral-content">
            You can withdraw liquidity at any time. The utilized portion may be
            queued for delayed withdrawal.
          </p>
        </>
      }
      actionButton={(() => {
        if (!account) {
          return <ConnectButton />;
        }

        if (removeLiquidityStatus === "loading") {
          return <LoadingButton label="Removing liquidity" variant="primary" />;
        }

        return (
          <button
            className="daisy-btn daisy-btn-circle daisy-btn-primary w-full"
            disabled={!hasEnoughBalance || !removeLiquidity}
            onClick={(e) => {
              // prevent closing the modal until the user approves the transaction
              e.preventDefault();
              removeLiquidity?.();
              onRemoveLiquidity?.(e);
            }}
          >
            Remove Liquidity
          </button>
        );
      })()}
    />
  );
}

function getPositiveSlippageLabel(
  slippageReceived: bigint,
  baseToken: TokenConfig<EmptyExtensions>,
  activeWithdrawToken: TokenConfig<any>,
) {
  const isPositiveSlippage = slippageReceived > 0n;
  const isNegativeSlippage = slippageReceived < 0n;

  const isPositiveButLessThan0001 =
    isPositiveSlippage &&
    slippageReceived < dnum.from("0.0001", baseToken.decimals)[0];

  const isNegativeButGreaterThan0001 =
    isNegativeSlippage &&
    slippageReceived > dnum.from("-0.0001", baseToken.decimals)[0];

  if (isPositiveButLessThan0001) {
    return `+<0.0001 ${activeWithdrawToken.symbol}`;
  }

  if (isNegativeButGreaterThan0001) {
    return `-<0.0001 ${activeWithdrawToken.symbol}`;
  }

  return `${isPositiveSlippage ? "+" : ""}${formatBalance({
    balance: slippageReceived,
    decimals: activeWithdrawToken.decimals,
    places: 4,
  })} ${activeWithdrawToken.symbol}`;
}

function calculateRequiredLpSharesIn(
  desiredBaseOut: bigint | undefined,
  lpSharePrice: bigint | undefined,
): bigint {
  return !desiredBaseOut
    ? 0n
    : dnum.div([desiredBaseOut, 18], [lpSharePrice || 1n, 18])[0];
}
