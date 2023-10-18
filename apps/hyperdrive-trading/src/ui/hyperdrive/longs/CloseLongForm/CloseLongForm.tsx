import { Long, adjustAmountByPercentage } from "@hyperdrive/sdk";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { MouseEvent, ReactElement } from "react";
import { Hyperdrive } from "src/appconfig/types";
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
  });

  return (
    <TransactionView
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
        <div className="flex justify-between">
          <p>You receive</p>
          <p className="font-bold">
            {baseAmountOut
              ? `${formatBalance({
                  balance: baseAmountOut,
                  decimals: baseDecimals,
                  places: 8,
                })}`
              : "0"}{" "}
            {baseSymbol}
          </p>
        </div>
      }
      actionButton={
        account ? (
          <button
            className="daisy-btn-secondary daisy-btn w-full"
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
