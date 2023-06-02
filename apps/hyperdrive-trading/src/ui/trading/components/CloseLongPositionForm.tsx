import { useConnectModal } from "@rainbow-me/rainbowkit";
import { ReactElement, useState } from "react";
import { HyperdriveMarket } from "src/appconfig/types";
import { Button } from "src/ui/base/components/Button";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { formatBigInt } from "src/ui/base/formatting/formatBigInt";
import { useNumericInput } from "src/ui/base/hooks/useNumericInput";
import { useCloseLong } from "src/ui/hyperdrive/hooks/useCloseLong";
import { usePositions } from "src/ui/hyperdrive/hooks/usePositions";
import { usePreviewCloseLong } from "src/ui/hyperdrive/hooks/usePreviewCloseLong";
import { Position } from "src/ui/hyperdrive/types";
import { TokenInput } from "src/ui/token/components/TokenInput";
import { LongPositionOverviewWell } from "src/ui/trading/components/LongPositionOverviewWell";
import { useAccount } from "wagmi";

interface CloseLongPositionFormProps {
  market: HyperdriveMarket;
}

export function CloseLongPositionForm({
  market,
}: CloseLongPositionFormProps): ReactElement {
  const tokenDecimals = market.baseToken.decimals;

  const { address: account } = useAccount();
  const { openConnectModal } = useConnectModal();

  const { data: positionsData } = usePositions(account, market);
  const [selectedLong, setSelectedLong] = useState<Position | null>(null);

  console.log(positionsData);

  const { amount, amountAsBigInt, setAmount } = useNumericInput({
    decimals: tokenDecimals,
  });

  const { baseAmountOut, previewCloseLongStatus } = usePreviewCloseLong({
    market,
    tokenID: selectedLong?.id,
    bondAmountIn: amountAsBigInt,
    minBaseAmountOut: 1n, // TODO: slippage
    destination: account,
  });

  const { closeLong, closeLongStatus, closeLongTransactionStatus } =
    useCloseLong({
      market,
      tokenID: selectedLong?.id,
      bondAmountIn: amountAsBigInt,
      minBaseAmountOut: 1n, // TODO: slippage
      destination: account,
      enabled: previewCloseLongStatus === "success",
      onExecuted: () => {
        // reset local state after successful transaction
        setAmount(undefined);
      },
    });

  return (
    <>
      {/* Selected long to close section */}
      <div className="space-y-4 text-hyper-blue-100">
        <h5>Select long position</h5>
        <select
          onChange={(event) => {
            if (event.currentTarget.value === "none") {
              setSelectedLong(null);
              return;
            }
            if (positionsData) {
              const foundPosition = positionsData.openLongs.find(
                (long) => long.id.toString() === event.currentTarget.value,
              );
              setSelectedLong(foundPosition ?? null);
            }
          }}
          className="select w-full border-hyper-blue-200 bg-base-100 text-hyper-blue-100"
          defaultValue="none"
        >
          <option value="none">None selected</option>;
          {positionsData?.openLongs.map((long) => {
            return (
              <option key={long.id.toString()} value={long.id.toString()}>
                Expiry: {long.expiryDate.toLocaleDateString()} Amount:{" "}
                {formatBalance(formatBigInt(long.amount, tokenDecimals), 6)}
              </option>
            );
          })}
        </select>

        {selectedLong && (
          <LongPositionOverviewWell
            market={market}
            claimableAtMaturity={selectedLong.amount}
            expiryDate={selectedLong.expiryDate}
          />
        )}
      </div>

      {/* Amount to close section */}
      {selectedLong && (
        <div className="space-y-4 font-rubik text-hyper-blue-100">
          <h5>Amount to close</h5>
          <TokenInput
            token={{
              name: "Hyperdrive Long",
              symbol: "Long",
              decimals: tokenDecimals,
              address: "0x00",
            }}
            value={amount ?? ""}
            maxValue={
              selectedLong
                ? formatBigInt(selectedLong.amount, tokenDecimals)
                : ""
            }
            onChange={(newAmount) => setAmount(newAmount)}
          />
        </div>
      )}

      {/* You receive Section */}
      {selectedLong && (
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
            onChange={(newAmount) => {}}
          />
        </div>
      )}

      {account ? (
        <Button
          disabled={
            !closeLong ||
            closeLongTransactionStatus === "loading" ||
            closeLongStatus === "loading"
          }
          variant="Crimson"
          size="lg"
          block
          onClick={() => closeLong?.()}
        >
          <h5>Close Long</h5>
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
