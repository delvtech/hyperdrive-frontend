import { useConnectModal } from "@rainbow-me/rainbowkit";
import { ethers } from "ethers";
import { ReactElement, useState } from "react";
import { HyperdriveMarket } from "src/config/HyperdriveConfig";
import { Button } from "src/ui/base/components/Button";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { formatBigInt } from "src/ui/base/formatting/formatBigInt";
import { useNumericInput } from "src/ui/base/hooks/useNumericInput";
import { useCloseLong } from "src/ui/hyperdrive/hooks/useCloseLong";
import { usePositions } from "src/ui/hyperdrive/hooks/usePositions";
import { usePreviewCloseLong } from "src/ui/hyperdrive/hooks/usePreviewCloseLong";
import { Position } from "src/ui/hyperdrive/types";
import { TokenInput } from "src/ui/token/components/TokenInput";
import { useTokenAllowance } from "src/ui/token/hooks/useTokenAllowance";
import { useTokenApproval } from "src/ui/token/hooks/useTokenApproval";
import { LongPositionOverviewWell } from "src/ui/trading/components/LongPositionOverviewWell";
import { useAccount, useBalance } from "wagmi";

interface CloseLongPositionFormProps {
  market: HyperdriveMarket;
}

export function CloseLongPositionForm({
  market,
}: CloseLongPositionFormProps): ReactElement {
  const { address: account } = useAccount();
  const { openConnectModal } = useConnectModal();

  const tokenDecimals = market.baseToken.decimals;

  const { data: positionsData } = usePositions(account, market);

  const [selectedLong, setSelectedLong] = useState<Position | null>(null);

  const { data: baseTokenBalance } = useBalance({
    address: account,
    token: market.baseToken.address,
  });

  const { amount, amountAsBigInt, setAmount } = useNumericInput({
    decimals: tokenDecimals,
  });

  const { tokenAllowance } = useTokenAllowance({
    account,
    spender: market.address,
    tokenAddress: market.baseToken.address,
  });

  const { approve } = useTokenApproval({
    tokenAddress: market.baseToken.address,
    spender: market.address,
    amount: ethers.constants.MaxUint256.toBigInt(),
  });

  const needsApproval = tokenAllowance
    ? amountAsBigInt && amountAsBigInt > tokenAllowance
    : true;

  // const { longAmountOut, status: openLongPreviewStatus } = usePreviewOpenLong({
  //   market,
  //   baseAmount: amountAsBigInt,
  //   bondAmountOut: BigInt(1), // todo add slippage control
  //   destination: account,
  //   enabled: !needsApproval,
  // });

  const { baseAmountOut, previewCloseLongStatus } = usePreviewCloseLong({
    market,
    tokenID: selectedLong?.id,
    bondAmountIn: amountAsBigInt,
    minBaseAmountOut: 1n, // TODO: slippage
    destination: account,
  });

  console.log(baseAmountOut, previewCloseLongStatus);

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
      <div className="space-y-4 text-hyper-blue-100">
        <h5>Select long position</h5>
        <select
          onChange={(event) => {
            console.log(event.currentTarget.value);
            if (event.currentTarget.value !== "none" && positionsData) {
              setSelectedLong(
                positionsData.openLongs.find(
                  (long) => long.id.toString() === event.currentTarget.value,
                ) ?? null,
              );
            }
          }}
          className="w-full max-w-xs select select-primary bg-base-100 text-hyper-blue-100 border-hyper-blue-200"
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
            costBasis={amountAsBigInt ?? 0n}
            claimableAtMaturity={selectedLong.amount}
            expiryDate={selectedLong.expiryDate}
          />
        )}
      </div>

      {/* You Pay Section */}
      <div className="space-y-4 text-hyper-blue-100 font-rubik">
        <h5>Close amount</h5>
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
              ? formatBigInt(selectedLong?.amount, tokenDecimals)
              : ""
          }
          onChange={(newAmount) => setAmount(newAmount)}
        />
      </div>

      {/* You receive Section */}
      <div className="space-y-4 text-hyper-blue-100 font-rubik">
        <h5>You receive</h5>
        <TokenInput
          token={market.baseToken}
          value={
            baseAmountOut ? formatBigInt(baseAmountOut, tokenDecimals) : ""
          }
          showBalance={false}
          disabled
          // maxValue={baseTokenBalance?.formatted}
          onChange={(newAmount) => {}}
        />
      </div>

      {account ? (
        needsApproval ? (
          // Approval button
          <Button
            disabled={!approve}
            variant="Work"
            size="lg"
            block
            onClick={() => approve?.()}
          >
            <h5>Approve {market.baseToken.symbol}</h5>
          </Button>
        ) : (
          // Trade button
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
        )
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
