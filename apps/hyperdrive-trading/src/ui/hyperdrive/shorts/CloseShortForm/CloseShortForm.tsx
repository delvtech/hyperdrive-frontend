import { OpenShort, adjustAmountByPercentage } from "@hyperdrive/sdk";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { MouseEvent, ReactElement } from "react";
import toast from "react-hot-toast";
import { Hyperdrive } from "src/appconfig/types";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useNumericInput } from "src/ui/base/hooks/useNumericInput";
import { TransactionView } from "src/ui/hyperdrive/TransactionView";
import { useCloseShort } from "src/ui/hyperdrive/shorts/hooks/useCloseShort";
import { usePreviewCloseShort } from "src/ui/hyperdrive/shorts/hooks/usePreviewCloseShort";
import { TokenInput } from "src/ui/token/TokenInput";
import { formatUnits } from "viem";
import { useAccount } from "wagmi";

interface CloseShortFormProps {
  hyperdrive: Hyperdrive;
  short: OpenShort;
  onCloseShort?: (e: MouseEvent<HTMLButtonElement>) => void;
}

export function CloseShortForm({
  hyperdrive,
  short,
}: CloseShortFormProps): ReactElement {
  const { decimals: baseDecimals, symbol: baseSymbol } = hyperdrive.baseToken;

  const { address: account } = useAccount();

  const { amount, amountAsBigInt, setAmount } = useNumericInput({
    decimals: baseDecimals,
  });

  const { baseAmountOut, previewCloseShortStatus } = usePreviewCloseShort({
    hyperdriveAddress: short.hyperdriveAddress,
    maturityTime: short.maturity,
    shortAmountIn: amountAsBigInt,
    minBaseAmountOut: 0n,
    destination: account,
  });

  const closeShortAmountAfterSlippage =
    baseAmountOut &&
    adjustAmountByPercentage({
      amount: baseAmountOut,
      decimals: hyperdrive.baseToken.decimals,
    });

  const { closeShort, isPendingWalletAction } = useCloseShort({
    hyperdriveAddress: hyperdrive.address,
    short,
    bondAmountIn: amountAsBigInt,
    minBaseAmountOut: closeShortAmountAfterSlippage,
    destination: account,
    enabled: previewCloseShortStatus === "success",
    onExecuted: () => {
      setAmount("");
      toast.success("Short closed", { position: "top-center" });
    },
  });

  return (
    <TransactionView
      heading="Close short"
      tokenInput={
        <TokenInput
          token={{
            name: "Hyperdrive Short",
            symbol: "Shorts",
            decimals: baseDecimals,
            address: "0x00",
          }}
          value={amount ?? ""}
          maxValue={short ? formatUnits(short.bondAmount, baseDecimals) : ""}
          stat={
            short
              ? `Available to close: ${formatBalance({
                  balance: short.bondAmount,
                  decimals: hyperdrive.baseToken.decimals,
                  places: 4,
                })}`
              : undefined
          }
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
            className="daisy-btn-accent daisy-btn"
            disabled={!closeShort || isPendingWalletAction}
            onClick={() => {
              closeShort?.();
            }}
          >
            Close short
          </button>
        ) : (
          <ConnectButton />
        )
      }
    />
  );
}
