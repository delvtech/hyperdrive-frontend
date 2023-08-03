import { calculateBondAmountWithSlippage } from "@hyperdrive/core";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import { ethers } from "ethers";
import { ReactElement } from "react";
import { Hyperdrive } from "src/appconfig/types";
import { useNumericInput } from "src/ui/base/hooks/useNumericInput";
import { useMaxLong } from "src/ui/hyperdrive/longs/hooks/useMaxLong";
import { useOpenLong } from "src/ui/hyperdrive/longs/hooks/useOpenLong";
import { usePreviewOpenLong } from "src/ui/hyperdrive/longs/hooks/usePreviewOpenLong";
import { OpenLongPreview } from "src/ui/hyperdrive/longs/OpenLongPreview/OpenLongPreview";
import { useTokenAllowance } from "src/ui/token/hooks/useTokenAllowance";
import { useTokenApproval } from "src/ui/token/hooks/useTokenApproval";
import { TokenInput } from "src/ui/token/TokenInput";
import { useAccount, useBalance } from "wagmi";

interface OpenLongFormProps {
  market: Hyperdrive;
}

export function OpenLongForm({ market }: OpenLongFormProps): ReactElement {
  const { address: account } = useAccount();
  const { openConnectModal } = useConnectModal();

  const { data: baseTokenBalance } = useBalance({
    address: account,
    token: market.baseToken.address,
  });

  const { maxLong } = useMaxLong(market);

  let maxAmount: string | undefined;

  if (maxLong && baseTokenBalance) {
    maxAmount =
      maxLong.maxBaseIn > baseTokenBalance.value
        ? baseTokenBalance.formatted
        : maxLong.formattedMaxBaseIn;
  }

  const { amount, amountAsBigInt, setAmount } = useNumericInput({
    decimals: market.baseToken.decimals,
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

  const { longAmountOut, status: openLongPreviewStatus } = usePreviewOpenLong({
    market,
    baseAmount: amountAsBigInt,
    bondAmountOut: 1n, // todo add slippage control
    destination: account,
    enabled: !needsApproval,
  });

  const longAmountOutAfterSlippage =
    longAmountOut &&
    amountAsBigInt &&
    calculateBondAmountWithSlippage(
      longAmountOut,
      amountAsBigInt,
      market.baseToken.decimals,
    );

  const { openLong, openLongStatus } = useOpenLong({
    market,
    baseAmount: amountAsBigInt,
    bondAmountOut: longAmountOutAfterSlippage || 1n,
    destination: account,
    enabled: openLongPreviewStatus === "success" && !needsApproval,
  });

  return (
    <div className="flex flex-col gap-10">
      {/* You Pay Section */}
      <div className="space-y-4 text-base-content">
        <h5>You pay</h5>
        <TokenInput
          token={market.baseToken}
          value={amount ?? ""}
          maxValue={maxAmount}
          onChange={(newAmount) => setAmount(newAmount)}
        />
      </div>

      {/* New Position Section */}
      <div className="space-y-4 text-base-content">
        <h5 className="text-center font-thin ">Preview transaction</h5>
        <OpenLongPreview
          hyperdrive={market}
          long={{
            bondAmount: longAmountOut || 0n,
            assetId: 0n,
            baseAmountPaid: 0n,
            maturity: BigInt(
              Math.round((Date.now() + market.termLengthMS) / 1000),
            ),
          }}
        />
      </div>

      {account ? (
        needsApproval ? (
          // Approval button
          <button
            disabled={!approve}
            className="daisy-btn-warning daisy-btn"
            onClick={(e) => {
              // Do this so we don't close the modal
              e.preventDefault();
              approve?.();
            }}
          >
            <h5>Approve {market.baseToken.symbol}</h5>
          </button>
        ) : (
          // Trade button
          <button
            disabled={!openLong || openLongStatus === "loading"}
            className="daisy-btn-secondary daisy-btn"
            onClick={() => openLong?.()}
          >
            Open long
          </button>
        )
      ) : (
        <button
          className="daisy-btn-secondary daisy-btn"
          onClick={() => openConnectModal?.()}
        >
          <h5>Connect wallet</h5>
        </button>
      )}
    </div>
  );
}
