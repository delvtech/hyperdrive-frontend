import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { adjustAmountByPercentage } from "@hyperdrive/sdk";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import { ReactElement } from "react";
import { Link } from "react-router-dom";
import { Hyperdrive } from "src/appconfig/types";
import { MAX_UINT256 } from "src/base/constants";
import { useNumericInput } from "src/ui/base/hooks/useNumericInput";
import { usePoolInfo } from "src/ui/hyperdrive/hooks/usePoolInfo";
import { useMaxLong } from "src/ui/hyperdrive/longs/hooks/useMaxLong";
import { useOpenLong } from "src/ui/hyperdrive/longs/hooks/useOpenLong";
import { usePreviewOpenLong } from "src/ui/hyperdrive/longs/hooks/usePreviewOpenLong";
import { OpenLongPreview } from "src/ui/hyperdrive/longs/OpenLongPreview/OpenLongPreview";
import { useTokenAllowance } from "src/ui/token/hooks/useTokenAllowance";
import { useTokenApproval } from "src/ui/token/hooks/useTokenApproval";
import { TokenInput } from "src/ui/token/TokenInput";
import { formatUnits } from "viem";
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
        : formatUnits(maxLong.maxBaseIn, market.baseToken.decimals);
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
    amount: MAX_UINT256,
  });

  const hasEnoughAllowance = tokenAllowance
    ? amountAsBigInt === undefined || amountAsBigInt < tokenAllowance
    : false;

  const { poolInfo } = usePoolInfo(market.address);
  const { longAmountOut, status: openLongPreviewStatus } = usePreviewOpenLong({
    market,
    baseAmount: amountAsBigInt,
    minBondAmountOut: 1n, // todo add slippage control
    minSharePrice: poolInfo?.sharePrice,
    destination: account,
    enabled: hasEnoughAllowance,
  });

  const longAmountOutAfterSlippage =
    longAmountOut &&
    adjustAmountByPercentage({
      amount: longAmountOut,
      decimals: market.baseToken.decimals,
    });

  const { openLong, openLongStatus } = useOpenLong({
    hyperdriveAddress: market.address,
    baseAmount: amountAsBigInt,
    bondAmountOut: longAmountOutAfterSlippage,
    minSharePrice: poolInfo?.sharePrice,
    destination: account,
    enabled: openLongPreviewStatus === "success" && hasEnoughAllowance,
    onExecuted: () => {
      setAmount("");
    },
  });

  return (
    <div className="flex flex-col gap-10">
      <div className="text-base-content">
        <h5>Open a long</h5>
        <div className="flex flex-col items-start">
          <p>Secure a fixed rate by purchasing bonds.</p>
          <Link
            className="flex cursor-pointer flex-row items-center text-sm"
            to={
              "https://www.notion.so/delv-tech/Long-Scenarios-5396e8a14a794aaf821c3f8ed6dbcef9?pvs=4"
            }
          >
            Learn More
            <ArrowTopRightOnSquareIcon className="ml-1" width={12} />
          </Link>
        </div>
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
        !hasEnoughAllowance ? (
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
