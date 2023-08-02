import { OpenShort } from "@hyperdrive/core";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { MouseEvent, ReactElement } from "react";
import { Hyperdrive } from "src/appconfig/types";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useNumericInput } from "src/ui/base/hooks/useNumericInput";
import { useCloseShort } from "src/ui/hyperdrive/shorts/hooks/useCloseShort";
import { usePreviewCloseShort } from "src/ui/hyperdrive/shorts/hooks/usePreviewCloseShort";
import { TokenInput } from "src/ui/token/TokenInput";
import { formatUnits, parseUnits } from "viem";
import { useAccount } from "wagmi";
const getProfitLossPercentage = (
  baseAmountOut: bigint,
  baseAmountPaid: bigint,
): string => {
  if (baseAmountPaid === 0n) {
    return "0";
  } // Avoid division by zero

  const profitOrLoss =
    (Number(baseAmountOut - baseAmountPaid) / Number(baseAmountPaid)) * 100;
  return profitOrLoss.toFixed(2);
};

interface CloseShortFormProps {
  hyperdrive: Hyperdrive;
  short: OpenShort;
  onCloseShort?: (e: MouseEvent<HTMLButtonElement>) => void;
}

export function CloseShortForm({
  hyperdrive,
  short,
  onCloseShort,
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

  const { closeShort, isPendingWalletAction } = useCloseShort({
    short,
    bondAmountIn: amountAsBigInt,
    minBaseAmountOut: parseUnits("0", baseDecimals),
    destination: account,
    enabled: previewCloseShortStatus === "success",
  });

  return (
    <div className="flex flex-col gap-6">
      {/* Amount to close section */}
      {short && (
        <div className="space-y-4 text-base-content">
          <h5>Amount to close</h5>
          <TokenInput
            token={{
              name: "Hyperdrive Short",
              symbol: "Short",
              decimals: baseDecimals,
              address: "0x00",
            }}
            value={amount ?? ""}
            maxValue={short ? formatUnits(short.bondAmount, baseDecimals) : ""}
            maxLabel="Balance"
            onChange={(newAmount) => setAmount(newAmount)}
          />
        </div>
      )}

      {/* You receive Section */}
      {/* {short && (
        <div className="space-y-4 text-center text-base-content">
          <Stat
            label={"You receive"}
            value={
              baseAmountOut
                ? `${formatBalance(
                    formatUnits(baseAmountOut, baseDecimals),
                    8,
                  )} ${baseSymbol}`
                : ""
            }
          />
        </div>
      )} */}

      <div className="flex flex-col gap-y-4 rounded border-neutral-content bg-transparent ">
        <div className="flex flex-col gap-y-1 tracking-wide">
          {short && (
            <div className="flex justify-between">
              <p className="font-light text-neutral-content">You receive</p>
              <p className="tracking-wide">
                {baseAmountOut
                  ? `${formatBalance(
                      formatUnits(baseAmountOut, baseDecimals),
                      8,
                    )} ${baseSymbol}`
                  : ""}
              </p>
            </div>
          )}
        </div>
        <div className="flex justify-between">
          <p className="font-light text-neutral-content">Profit / Loss</p>
          <p className="tracking-wide">
            {short && baseAmountOut && short.baseAmountPaid
              ? `${getProfitLossPercentage(
                  baseAmountOut,
                  short.baseAmountPaid,
                )}%`
              : ""}
          </p>
        </div>
      </div>

      {account ? (
        <button
          className="daisy-btn-accent daisy-btn"
          disabled={!closeShort || isPendingWalletAction}
          onClick={(e) => {
            closeShort?.();

            // useful if this is rendered in a modal for example and you want to
            // call e.preventDefault() to prevent the modal from closing right
            // away when the user clicks.
            onCloseShort?.(e);
          }}
        >
          Close short
        </button>
      ) : (
        <ConnectButton />
      )}
    </div>
  );
}
