import { adjustAmountByPercentage, OpenShort } from "@hyperdrive/sdk";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { MouseEvent, ReactElement } from "react";
import { Hyperdrive } from "src/appconfig/types";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useNumericInput } from "src/ui/base/hooks/useNumericInput";
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
  });

  return (
    <div className="flex flex-col gap-6">
      {/* Amount to close section */}
      {short && (
        <div className="space-y-4 text-base-content">
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
        </div>
      )}

      <div className="flex flex-col gap-y-4 rounded border-neutral-content bg-transparent ">
        <div className="flex flex-col gap-y-1 tracking-wide">
          {short && (
            <div className="flex justify-between">
              <p className="font-light">You receive</p>
              <p className="tracking-wide">
                {baseAmountOut
                  ? `${formatBalance({
                      balance: baseAmountOut,
                      decimals: baseDecimals,
                      places: 8,
                    })} ${baseSymbol}`
                  : ""}
              </p>
            </div>
          )}
        </div>
      </div>

      {account ? (
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
      )}
    </div>
  );
}
