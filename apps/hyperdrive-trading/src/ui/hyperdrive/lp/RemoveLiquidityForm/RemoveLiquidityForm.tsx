import { adjustAmountByPercentage } from "@delvtech/hyperdrive-viem";
import {
  findBaseToken,
  findYieldSourceToken,
  HyperdriveConfig,
} from "@hyperdrive/appconfig";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import * as dnum from "dnum";
import { MouseEvent, ReactElement } from "react";
import { calculateValueFromPrice } from "src/base/calculateValueFromPrice";
import { getHasEnoughBalance } from "src/token/getHasEnoughBalance";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { LabelValue } from "src/ui/base/components/LabelValue";
import { LoadingButton } from "src/ui/base/components/LoadingButton";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useActiveItem } from "src/ui/base/hooks/useActiveItem";
import { useNumericInput } from "src/ui/base/hooks/useNumericInput";
import { usePoolInfo } from "src/ui/hyperdrive/hooks/usePoolInfo";
import { usePreviewRemoveLiquidity } from "src/ui/hyperdrive/lp/hooks/usePreviewRemoveLiquidity";
import { useRemoveLiquidity } from "src/ui/hyperdrive/lp/hooks/useRemoveLiquidity";
import { TransactionView } from "src/ui/hyperdrive/TransactionView";
import { useSlippageSettings } from "src/ui/token/hooks/useSlippageSettings";
import { useTokenBalance } from "src/ui/token/hooks/useTokenBalance";
import { SlippageSettings } from "src/ui/token/SlippageSettings";
import { TokenInput } from "src/ui/token/TokenInput";
import { TokenChoice, TokenPicker } from "src/ui/token/TokenPicker";
import { formatUnits } from "viem";
import { useAccount } from "wagmi";
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
  const { address: account } = useAccount();
  const appConfig = useAppConfig();
  const baseToken = findBaseToken({
    baseTokenAddress: hyperdrive.baseToken,
    tokens: appConfig.tokens,
  });

  const sharesToken = findYieldSourceToken({
    yieldSourceTokenAddress: hyperdrive.sharesToken,
    tokens: appConfig.tokens,
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

  const tokens: TokenChoice[] = [
    { tokenConfig: sharesToken, tokenBalance: sharesTokenBalance?.value },
  ];
  if (hyperdrive.withdrawOptions.isBaseTokenWithdrawalEnabled) {
    // base token should be listed first if it's enabled
    tokens.unshift({
      tokenConfig: baseToken,
      tokenBalance: baseTokenBalance?.value,
    });
  }
  const {
    activeItem: activeWithdrawToken,
    setActiveItemId: setActiveWithdrawToken,
  } = useActiveItem({
    items: [baseToken, sharesToken],
    idField: "address",
    defaultActiveItemId: hyperdrive.withdrawOptions.isBaseTokenWithdrawalEnabled
      ? baseToken.address
      : sharesToken.address,
  });
  const { poolInfo } = usePoolInfo({ hyperdriveAddress: hyperdrive.address });

  // Let users type in an amount of lp shares they want to remove
  const {
    amount,
    amountAsBigInt: lpSharesIn,
    setAmount,
  } = useNumericInput({
    decimals: activeWithdrawToken.decimals,
  });

  // Then we preview that trade to show users the split between the actual base
  // and withdrawal shares they'll receive

  // if withdrawingin shares, we need to also convert the minLpSharePrice to be
  // priced in terms of shares
  const isBaseActiveToken = activeWithdrawToken.address === baseToken.address;
  const lpSharePrice = !isBaseActiveToken
    ? dnum.div(
        [poolInfo?.lpSharePrice || 0n, baseToken.decimals],
        [poolInfo?.vaultSharePrice || 0n, baseToken.decimals],
      )[0]
    : poolInfo?.lpSharePrice || 0n;
  const {
    setSlippage,
    slippage,
    slippageAsBigInt,
    activeOption: activeSlippageOption,
    setActiveOption: setActiveSlippageOption,
  } = useSlippageSettings({ decimals: activeWithdrawToken.decimals });

  const minOutputPerShare = adjustAmountByPercentage({
    amount: lpSharePrice,
    percentage: slippageAsBigInt,
    decimals: 18,
    direction: "down",
  });

  const {
    proceeds: actualValueOut,
    previewRemoveLiquidityStatus,
    withdrawalShares,
  } = usePreviewRemoveLiquidity({
    destination: account,
    lpSharesIn,
    hyperdriveAddress: hyperdrive.address,
    minOutputPerShare,
    asBase:
      hyperdrive.withdrawOptions.isBaseTokenWithdrawalEnabled &&
      activeWithdrawToken.address === baseToken.address,
  });
  const { removeLiquidity, removeLiquidityStatus } = useRemoveLiquidity({
    hyperdriveAddress: hyperdrive.address,
    lpSharesIn,
    minOutputPerShare,
    destination: account,
    enabled: previewRemoveLiquidityStatus === "success",
    asBase:
      hyperdrive.withdrawOptions.isBaseTokenWithdrawalEnabled &&
      activeWithdrawToken.address === baseToken.address,
    onSubmitted: () => {
      (window as any)["withdrawalLpModal"].close();
    },
    onExecuted: () => {
      setAmount("");
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
        places: baseToken.places,
      })
    : null;

  const hasEnoughBalance = getHasEnoughBalance({
    amount: lpSharesIn,
    balance: lpShares,
  });

  const withdrawTokenChoices: TokenChoice[] = [];
  if (hyperdrive.withdrawOptions.isBaseTokenWithdrawalEnabled) {
    withdrawTokenChoices.push({
      tokenConfig: baseToken,
    });
  }

  if (hyperdrive.withdrawOptions.isShareTokenWithdrawalEnabled) {
    withdrawTokenChoices.push({
      tokenConfig: sharesToken,
    });
  }

  return (
    <TransactionView
      setting={
        <TokenPicker
          label={
            baseTokenDepositEnabled
              ? "Choose asset for withdrawal"
              : "Asset for withdrawal"
          }
          activeTokenAddress={activeWithdrawToken?.address}
          onChange={(tokenAddress) => setActiveWithdrawToken(tokenAddress)}
          tokens={withdrawTokenChoices}
        />
      }
      tokenInput={
        <TokenInput
          name="Input LP shares"
          token={
            <div className="daisy-join-item flex h-12 shrink-0 items-center gap-1.5 border border-neutral-content/30 bg-base-100 px-4">
              <img src={baseToken.iconUrl} className="h-5 " />{" "}
              <span className="text-sm font-semibold">
                {baseToken.symbol}-LP
              </span>
            </div>
          }
          settings={
            <SlippageSettings
              onSlippageChange={setSlippage}
              slippage={slippage}
              activeOption={activeSlippageOption}
              onActiveOptionChange={setActiveSlippageOption}
              tooltip="Your transaction will revert if the price changes unfavorably by more than this percentage."
            />
          }
          value={amount ?? ""}
          maxValue={formatUnits(lpShares, baseToken.decimals)}
          stat={
            <div className="flex flex-col gap-1 text-xs text-neutral-content">
              <span>
                {lpShares && !!poolInfo
                  ? `Withdrawable: ${formatBalance({
                      balance: lpShares,
                      decimals: hyperdrive.decimals,
                      places: baseToken.places,
                    })} ${baseToken.symbol}-LP`
                  : undefined}
              </span>
              <span>{`Slippage: ${slippage || "0.5"}%`}</span>
            </div>
          }
          onChange={(newAmount) => setAmount(newAmount)}
        />
      }
      transactionPreview={
        <div className="flex flex-col gap-3 px-2 pb-2">
          <LabelValue
            label="Amount to withdraw"
            value={`${
              actualValueOut
                ? `${formatBalance({
                    balance: lpShares || 0n,
                    decimals: hyperdrive.decimals,
                    places: baseToken.places,
                  })}`
                : "0"
            } ${baseToken.symbol}-LP`}
          />
          <LabelValue
            label="Total you receive now"
            value={
              <span className="font-bold">
                {actualValueOut
                  ? `${formatBalance({
                      balance: actualValueOut,
                      decimals: activeWithdrawToken.decimals,
                      places: activeWithdrawToken.places,
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
        </div>
      }
      disclaimer={
        <>
          {lpSharesIn && !hasEnoughBalance ? (
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
