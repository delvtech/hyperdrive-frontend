import { Long, adjustAmountByPercentage } from "@hyperdrive/sdk";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { MouseEvent, ReactElement } from "react";
import toast from "react-hot-toast";
import { Hyperdrive } from "src/appconfig/types";
import { PreviewTransactionRow } from "src/ui/base/components/PreviewTransactionRow";
import CustomToastMessage from "src/ui/base/components/Toaster/CustomToastMessage";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useNumericInput } from "src/ui/base/hooks/useNumericInput";
import { TransactionView } from "src/ui/hyperdrive/TransactionView";
import { useCloseLong } from "src/ui/hyperdrive/longs/hooks/useCloseLong";
import { usePreviewCloseLong } from "src/ui/hyperdrive/longs/hooks/usePreviewCloseLong";
import { TokenInput } from "src/ui/token/TokenInput";
import { formatUnits, parseUnits } from "viem";
import { useAccount } from "wagmi";

interface CloseLongFormProps {
  hyperdrive: Hyperdrive;
  long: Long;
  onCloseLong?: (e: MouseEvent<HTMLButtonElement>) => void;
}

export function CloseLongForm({
  hyperdrive,
  long,
  onCloseLong,
}: CloseLongFormProps): ReactElement {
  const { decimals: baseDecimals, symbol: baseSymbol } = hyperdrive.baseToken;

  const { address: account } = useAccount();

  const { amount, amountAsBigInt, setAmount } = useNumericInput({
    decimals: baseDecimals,
  });

  const { baseAmountOut, previewCloseLongStatus } = usePreviewCloseLong({
    hyperdriveAddress: hyperdrive.address,
    maturityTime: long.maturity,
    bondAmountIn: amountAsBigInt,
    minBaseAmountOut: parseUnits("0", baseDecimals),
    destination: account,
  });

  const closeLongAmountAfterSlippage =
    baseAmountOut &&
    adjustAmountByPercentage({
      amount: baseAmountOut,
      decimals: hyperdrive.baseToken.decimals,
    });

  const { closeLong, isPendingWalletAction } = useCloseLong({
    hyperdriveAddress: hyperdrive.address,
    long,
    bondAmountIn: amountAsBigInt,
    minBaseAmountOut: closeLongAmountAfterSlippage,
    destination: account,
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
            Note: 1 hy{hyperdrive.baseToken.symbol} is always worth 1{" "}
            {hyperdrive.baseToken.symbol} at maturity, however its value may
            fluctuate before maturity based on market activity.
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
          token={{
            name: `Hyperdrive ${baseSymbol}`,
            symbol: `hy${baseSymbol}`,
            decimals: baseDecimals,
            address: "0x00",
          }}
          value={amount ?? ""}
          maxValue={long ? formatUnits(long.bondAmount, baseDecimals) : ""}
          stat={`Balance: ${formatBalance({
            balance: long.bondAmount,
            decimals: baseDecimals,
            places: 4,
          })}`}
          onChange={(newAmount) => setAmount(newAmount)}
        />
      }
      transactionPreview={
        <PreviewTransactionRow
          label="You receive"
          value={`${
            baseAmountOut
              ? `${formatBalance({
                  balance: baseAmountOut,
                  decimals: baseDecimals,
                  places: 8,
                })}`
              : "0"
          } ${baseSymbol}`}
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
