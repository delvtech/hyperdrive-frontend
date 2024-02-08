import {
  EmptyExtensions,
  findBaseToken,
  findYieldSourceToken,
  HyperdriveConfig,
  TokenConfig,
  YieldSourceExtensions,
} from "@hyperdrive/appconfig";
import { adjustAmountByPercentage, Long } from "@hyperdrive/sdk";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { MouseEvent, ReactElement, useState } from "react";
import toast from "react-hot-toast";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { LabelValue } from "src/ui/base/components/LabelValue";
import CustomToastMessage from "src/ui/base/components/Toaster/CustomToastMessage";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useNumericInput } from "src/ui/base/hooks/useNumericInput";
import { useCloseLong } from "src/ui/hyperdrive/longs/hooks/useCloseLong";
import { usePreviewCloseLong } from "src/ui/hyperdrive/longs/hooks/usePreviewCloseLong";
import { TransactionView } from "src/ui/hyperdrive/TransactionView";
import { TokenInput } from "src/ui/token/TokenInput";
import { formatUnits, parseUnits } from "viem";
import { useAccount } from "wagmi";

interface CloseLongFormProps {
  hyperdrive: HyperdriveConfig;
  long: Long;
  onCloseLong?: (e: MouseEvent<HTMLButtonElement>) => void;
}

export function CloseLongForm({
  hyperdrive,
  long,
  onCloseLong,
}: CloseLongFormProps): ReactElement {
  const appConfig = useAppConfig();
  const baseToken = findBaseToken({
    baseTokenAddress: hyperdrive.baseToken,
    tokens: appConfig.tokens,
  });
  const sharesToken = findYieldSourceToken({
    yieldSourceTokenAddress: hyperdrive.sharesToken,
    tokens: appConfig.tokens,
  });

  const {
    activeWithdrawToken,
    activeWithdrawTokenType,
    setActiveWithdrawTokenType,
  } = useActiveWithdrawToken({
    hyperdrive,
  });

  const { address: account } = useAccount();

  // Input for the hyToken
  const { amount, amountAsBigInt, setAmount } = useNumericInput({
    decimals: hyperdrive.decimals,
  });

  const { amountOut, previewCloseLongStatus } = usePreviewCloseLong({
    hyperdriveAddress: hyperdrive.address,
    maturityTime: long.maturity,
    bondAmountIn: amountAsBigInt,
    minOutput: parseUnits("0", baseToken.decimals),
    destination: account,
    asBase: activeWithdrawTokenType === "baseToken",
  });

  const minOutputAfterSlippage =
    amountOut &&
    adjustAmountByPercentage({
      amount: amountOut,
      decimals: activeWithdrawToken.decimals,
    });

  const { closeLong, isPendingWalletAction } = useCloseLong({
    hyperdriveAddress: hyperdrive.address,
    long,
    bondAmountIn: amountAsBigInt,
    minBaseAmountOut: minOutputAfterSlippage,
    destination: account,
    asBase: activeWithdrawTokenType === "baseToken",
    enabled: previewCloseLongStatus === "success",
    onExecuted: (hash) => {
      setAmount("");
      toast.success(
        <CustomToastMessage
          message="Long closed"
          // TODO: Update link to point to correct block explorer.
          link={`https://etherscan.com/tx/${hash}`}
        />,
      );
    },
  });

  return (
    <TransactionView
      disclaimer={
        <>
          <p className="text-center text-sm text-neutral-content">
            Note: 1 hy{baseToken.symbol} is always worth 1 {baseToken.symbol} at
            maturity, however its value may fluctuate before maturity based on
            market activity.
          </p>
          {previewCloseLongStatus === "error" ? (
            <p className="text-center text-error">
              Insufficient liquidity: There is not enough liquidity in the pool
              to close your long position at this time. You may either add more
              funds to the pool or wait for the liquidity to improve.
            </p>
          ) : null}
        </>
      }
      heading="Close long"
      tokenInput={
        <TokenInput
          name={baseToken.symbol}
          token={`hy${baseToken.symbol}`}
          value={amount ?? ""}
          maxValue={
            long ? formatUnits(long.bondAmount, hyperdrive.decimals) : ""
          }
          stat={`Balance: ${formatBalance({
            balance: long.bondAmount,
            decimals: hyperdrive.decimals,
            places: 4,
          })}`}
          onChange={(newAmount) => setAmount(newAmount)}
        />
      }
      setting={
        <label className="inline-flex cursor-pointer items-center justify-end gap-2">
          <input
            type="checkbox"
            className="daisy-checkbox-primary daisy-checkbox daisy-checkbox-sm"
            onChange={(e) => {
              if (e.target.checked) {
                setActiveWithdrawTokenType("sharesToken");
              } else {
                setActiveWithdrawTokenType("baseToken");
              }
            }}
          />
          <span>Receive as {sharesToken.symbol}</span>
        </label>
      }
      transactionPreview={
        <LabelValue
          label="You receive"
          value={`${
            amountOut
              ? `${formatBalance({
                  balance: amountOut,
                  decimals: activeWithdrawToken.decimals,
                  places: 8,
                })}`
              : "0"
          } ${activeWithdrawToken.symbol}`}
        />
      }
      actionButton={
        account ? (
          <button
            className="daisy-btn daisy-btn-circle daisy-btn-primary w-full disabled:bg-primary disabled:text-base-100 disabled:opacity-30"
            disabled={!closeLong || isPendingWalletAction}
            onClick={(e) => {
              closeLong?.();
              onCloseLong?.(e);
            }}
          >
            <span>Close position</span>
          </button>
        ) : (
          <ConnectButton />
        )
      }
    />
  );
}

type WithdrawTokenType = "baseToken" | "sharesToken";
function useActiveWithdrawToken({
  hyperdrive,
}: {
  hyperdrive: HyperdriveConfig;
}): {
  activeWithdrawTokenType: WithdrawTokenType;
  activeWithdrawToken: TokenConfig<EmptyExtensions | YieldSourceExtensions>;
  setActiveWithdrawTokenType: (type: WithdrawTokenType) => void;
} {
  const appConfig = useAppConfig();
  const defaultWithdrawTokenType = hyperdrive.withdrawOptions
    .isBaseTokenWithdrawalEnabled
    ? "baseToken"
    : "sharesToken";

  const [activeWithdrawTokenType, setActiveWithdrawTokenType] =
    useState<WithdrawTokenType>(defaultWithdrawTokenType);

  const activeWithdrawToken =
    activeWithdrawTokenType === "baseToken"
      ? findBaseToken({
          baseTokenAddress: hyperdrive.baseToken,
          tokens: appConfig.tokens,
        })
      : findYieldSourceToken({
          yieldSourceTokenAddress: hyperdrive.sharesToken,
          tokens: appConfig.tokens,
        });

  return {
    activeWithdrawToken,
    activeWithdrawTokenType,
    setActiveWithdrawTokenType,
  };
}
