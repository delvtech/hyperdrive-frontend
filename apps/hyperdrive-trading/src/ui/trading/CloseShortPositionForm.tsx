import { useConnectModal } from "@rainbow-me/rainbowkit";
import { ReactElement, useState } from "react";
import { Hyperdrive } from "src/appconfig/types";
import { Button } from "src/ui/base/components/Button";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { formatBigInt } from "src/ui/base/formatting/formatBigInt";
import { useNumericInput } from "src/ui/base/hooks/useNumericInput";
import { useCloseShortOld } from "src/ui/hyperdrive/hooks/useCloseShortOld";
import { usePositions } from "src/ui/hyperdrive/hooks/usePositions";
import { usePreviewCloseShort } from "src/ui/hyperdrive/hooks/usePreviewCloseShort";
import { Position } from "src/ui/hyperdrive/types";
import { TokenInput } from "src/ui/token/TokenInput";
import { ShortPositionOverviewWell } from "src/ui/trading/ShortPositionOverviewWell";
import { useAccount } from "wagmi";

interface CloseShortPositionFormProps {
  market: Hyperdrive;
}

export function CloseShortPositionForm({
  market,
}: CloseShortPositionFormProps): ReactElement {
  const tokenDecimals = market.baseToken.decimals;

  const { address: account } = useAccount();
  const { openConnectModal } = useConnectModal();

  const { data: positionsData } = usePositions(account, market);
  const [selectedShort, setSelectedShort] = useState<Position | null>(null);

  const { amount, amountAsBigInt, setAmount } = useNumericInput({
    decimals: tokenDecimals,
  });

  const { baseAmountOut, previewCloseShortStatus } = usePreviewCloseShort({
    market,
    tokenID: selectedShort?.id,
    shortAmountIn: amountAsBigInt,
    minBaseAmountOut: 1n, // TODO: slippage
    destination: account,
  });

  const { closeShort, closeShortStatus, closeShortTransactionStatus } =
    useCloseShortOld({
      market,
      tokenID: selectedShort?.id,
      shortAmountIn: amountAsBigInt,
      minBaseAmountOut: 1n, // TODO: slippage
      destination: account,
      enabled: previewCloseShortStatus === "success",
      onExecuted: () => {
        // reset local state after successful transaction
        setAmount(undefined);
        setSelectedShort(null);
      },
    });

  return (
    <>
      {/* Selected short to close section */}
      <div className="space-y-4 text-hyper-blue-100">
        <h5>Select short position</h5>
        <select
          onChange={(event) => {
            if (event.currentTarget.value === "none") {
              setSelectedShort(null);
              return;
            }
            if (positionsData) {
              const foundPosition = positionsData.openShorts.find(
                (short) => short.id.toString() === event.currentTarget.value,
              );
              setSelectedShort(foundPosition ?? null);
            }
          }}
          className="daisy-select w-full border-hyper-blue-200 bg-base-100 text-hyper-blue-100"
          defaultValue="none"
        >
          <option value="none">None selected</option>;
          {positionsData?.openShorts.map((short) => {
            return (
              <option key={short.id.toString()} value={short.id.toString()}>
                Expiry: {short.expiryDate.toLocaleDateString()} Amount:{" "}
                {formatBalance(formatBigInt(short.amount, tokenDecimals), 6)}
              </option>
            );
          })}
        </select>

        {selectedShort && (
          <ShortPositionOverviewWell
            market={market}
            amountShort={selectedShort.amount}
            expiryDate={selectedShort.expiryDate}
          />
        )}
      </div>

      {/* Amount to close section */}
      {selectedShort && (
        <div className="space-y-4 font-rubik text-hyper-blue-100">
          <h5>Amount to close</h5>
          <TokenInput
            token={{
              name: "Hyperdrive Short",
              symbol: "Short",
              decimals: tokenDecimals,
              address: "0x00",
            }}
            value={amount ?? ""}
            maxValue={
              selectedShort
                ? formatBigInt(selectedShort.amount, tokenDecimals)
                : ""
            }
            onChange={(newAmount) => setAmount(newAmount)}
          />
        </div>
      )}

      {/* You receive Section */}
      {selectedShort && (
        <div className="space-y-4 font-rubik text-hyper-blue-100">
          <h5>You receive</h5>
          <TokenInput
            token={market.baseToken}
            value={
              baseAmountOut
                ? formatBalance(formatBigInt(baseAmountOut, tokenDecimals), 8)
                : ""
            }
            showBalance={false}
            disabled
            onChange={() => {}}
          />
        </div>
      )}

      {account ? (
        <Button
          disabled={
            !closeShort ||
            closeShortTransactionStatus === "loading" ||
            closeShortStatus === "loading"
          }
          variant="Emerald"
          size="lg"
          block
          onClick={() => closeShort?.()}
        >
          <h5>Close Short</h5>
        </Button>
      ) : (
        <Button
          variant="Emerald"
          size="lg"
          block
          onClick={() => openConnectModal?.()}
        >
          <h5>Connect wallet</h5>
        </Button>
      )}
    </>
  );
}
