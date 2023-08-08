import { adjustAmountByPercentage, Long } from "@hyperdrive/core";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { MouseEvent, ReactElement } from "react";
import { Hyperdrive } from "src/appconfig/types";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useNumericInput } from "src/ui/base/hooks/useNumericInput";
import { useCloseLong } from "src/ui/hyperdrive/longs/hooks/useCloseLong";
import { usePreviewCloseLong } from "src/ui/hyperdrive/longs/hooks/usePreviewCloseLong";
import { getProfitLossText } from "src/ui/hyperdrive/shorts/CloseShortForm/getProfitLossText";
import { TokenInput } from "src/ui/token/TokenInput";
import { formatUnits, parseUnits } from "viem";
import { useAccount } from "wagmi";

interface CloseLongFormProps {
  hyperdrive: Hyperdrive;
  long: Long;
  onSuccess: () => void;
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
      amountOut: baseAmountOut,
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
    <div className="flex flex-col gap-6">
      {/* Amount to close section */}
      {long && (
        <div className="space-y-4 text-base-content">
          <h5>Amount to close</h5>
          <TokenInput
            token={{
              name: "Hyperdrive Long",
              symbol: "Long",
              decimals: baseDecimals,
              address: "0x00",
            }}
            value={amount ?? ""}
            maxValue={long ? formatUnits(long.bondAmount, baseDecimals) : ""}
            maxLabel="Balance"
            onChange={(newAmount) => setAmount(newAmount)}
          />
        </div>
      )}

      {/* You receive Section */}
      {long && (
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
      <div className="flex justify-between">
        <p className="font-light text-neutral-content">Profit / Loss</p>
        <p className="tracking-wide">
          {baseAmountOut && long.baseAmountPaid
            ? `${getProfitLossText({
                baseAmountOut,
                baseAmountPaid: long.baseAmountPaid,
                baseDecimals,
                baseSymbol,
              })}`
            : ""}
        </p>
      </div>

      {account ? (
        <button
          className="daisy-btn-secondary daisy-btn w-full"
          disabled={!closeLong || isPendingWalletAction}
          onClick={(e) => {
            closeLong?.();
          }}
        >
          <span>Close position</span>
        </button>
      ) : (
        <ConnectButton />
      )}
    </div>
  );
}
