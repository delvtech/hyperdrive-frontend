import { LinkIcon } from "@heroicons/react/24/outline";
import { adjustAmountByPercentage } from "@hyperdrive/core";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import { ethers } from "ethers";
import { ReactElement } from "react";
import { Link } from "react-router-dom";
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
    adjustAmountByPercentage({
      amount: longAmountOut,
      decimals: market.baseToken.decimals,
    });

  const { openLong, openLongStatus } = useOpenLong({
    market,
    baseAmount: amountAsBigInt,
    bondAmountOut: longAmountOutAfterSlippage,
    destination: account,
    enabled: openLongPreviewStatus === "success" && !needsApproval,
  });

  return (
    <div className="flex flex-col gap-10">
      <div className="text-base-content">
        <h5>Open a long</h5>
        <p className="flex flex-row items-center">
          Secure a fixed rate by purchasing bonds.
          <Link
            className="ml-2 cursor-pointer"
            to={
              "https://www.notion.so/delv-tech/Long-Scenarios-5396e8a14a794aaf821c3f8ed6dbcef9?pvs=4"
            }
          >
            <LinkIcon width={15} />
          </Link>
        </p>
      </div>
      <TokenInput
        token={market.baseToken}
        value={amount ?? ""}
        maxValue={maxAmount}
        onChange={(newAmount) => setAmount(newAmount)}
      />
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
