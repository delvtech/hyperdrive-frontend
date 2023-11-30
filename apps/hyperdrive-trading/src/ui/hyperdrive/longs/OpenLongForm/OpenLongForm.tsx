import { adjustAmountByPercentage } from "@hyperdrive/sdk";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import { ReactElement } from "react";
import toast from "react-hot-toast";
import { Hyperdrive } from "src/appconfig/types";
import { MAX_UINT256 } from "src/base/constants";
import CustomToastMessage from "src/ui/base/components/Toaster/CustomToastMessage";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useNumericInput } from "src/ui/base/hooks/useNumericInput";
import { usePoolInfo } from "src/ui/hyperdrive/hooks/usePoolInfo";
import { useMaxLong } from "src/ui/hyperdrive/longs/hooks/useMaxLong";
import { useOpenLong } from "src/ui/hyperdrive/longs/hooks/useOpenLong";
import { usePreviewOpenLong } from "src/ui/hyperdrive/longs/hooks/usePreviewOpenLong";
import { OpenLongPreview } from "src/ui/hyperdrive/longs/OpenLongPreview/OpenLongPreview";
import { TransactionView } from "src/ui/hyperdrive/TransactionView";
import { useTokenAllowance } from "src/ui/token/hooks/useTokenAllowance";
import { useTokenApproval } from "src/ui/token/hooks/useTokenApproval";
import { TokenInput } from "src/ui/token/TokenInput";
import { formatUnits } from "viem";
import { useAccount, useBalance } from "wagmi";

interface OpenLongFormProps {
  hyperdrive: Hyperdrive;
}

export function OpenLongForm({
  hyperdrive: hyperdrive,
}: OpenLongFormProps): ReactElement {
  const { address: account } = useAccount();
  const { openConnectModal } = useConnectModal();

  const { data: baseTokenBalance } = useBalance({
    address: account,
    token: hyperdrive.baseToken.address,
  });

  const { maxLong } = useMaxLong(hyperdrive);

  let maxAmount: string | undefined;
  if (maxLong && baseTokenBalance) {
    maxAmount =
      maxLong.maxBaseIn > baseTokenBalance.value
        ? baseTokenBalance.formatted
        : formatUnits(maxLong.maxBaseIn, hyperdrive.baseToken.decimals);
  }

  const { amount, amountAsBigInt, setAmount } = useNumericInput({
    decimals: hyperdrive.baseToken.decimals,
  });

  const { tokenAllowance } = useTokenAllowance({
    account,
    spender: hyperdrive.address,
    tokenAddress: hyperdrive.baseToken.address,
  });

  const { approve } = useTokenApproval({
    tokenAddress: hyperdrive.baseToken.address,
    spender: hyperdrive.address,
    amount: MAX_UINT256,
  });

  const hasEnoughAllowance = tokenAllowance
    ? amountAsBigInt === undefined || amountAsBigInt < tokenAllowance
    : false;

  const { poolInfo } = usePoolInfo(hyperdrive.address);
  const { longAmountOut, status: openLongPreviewStatus } = usePreviewOpenLong({
    market: hyperdrive,
    baseAmount: amountAsBigInt,
    enabled: hasEnoughAllowance,
  });

  const longAmountOutAfterSlippage =
    longAmountOut &&
    adjustAmountByPercentage({
      amount: longAmountOut,
      decimals: hyperdrive.baseToken.decimals,
    });

  const { openLong, openLongStatus } = useOpenLong({
    hyperdriveAddress: hyperdrive.address,
    baseAmount: amountAsBigInt,
    bondAmountOut: longAmountOutAfterSlippage,
    minSharePrice: poolInfo?.sharePrice,
    destination: account,
    enabled: openLongPreviewStatus === "success" && hasEnoughAllowance,
    onExecuted: (hash) => {
      setAmount("");
      toast.success(
        <CustomToastMessage
          message="Long Opened"
          // TODO: Update link to point to correct block explorer.
          link={`https://etherscan.com/tx/${hash}`}
        />,
      );
    },
  });

  return (
    <TransactionView
      tokenInput={
        <TokenInput
          token={hyperdrive.baseToken}
          value={amount ?? ""}
          maxValue={maxAmount}
          inputLabel="Amount to spend"
          stat={
            baseTokenBalance
              ? `Balance: ${formatBalance({
                  balance: baseTokenBalance?.value,
                  decimals: hyperdrive.baseToken.decimals,
                  places: 4,
                })} ${hyperdrive.baseToken.symbol}`
              : undefined
          }
          onChange={(newAmount) => setAmount(newAmount)}
        />
      }
      transactionPreview={
        <OpenLongPreview
          hyperdrive={hyperdrive}
          long={{
            bondAmount: longAmountOut || 0n,
            assetId: 0n,
            baseAmountPaid: amountAsBigInt || 0n,
            maturity: BigInt(
              Math.round((Date.now() + hyperdrive.termLengthMS) / 1000),
            ),
          }}
        />
      }
      disclaimer={`Note: 1 hy${hyperdrive.baseToken.symbol} is always worth 1 ${hyperdrive.baseToken.symbol} at maturity, however its value may fluctuate before maturity based on market activity.`}
      actionButton={
        account ? (
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
              <h5>Approve {hyperdrive.baseToken.symbol}</h5>
            </button>
          ) : (
            // Trade button
            <button
              disabled={!openLong || openLongStatus === "loading"}
              className="daisy-btn-secondary daisy-btn"
              onClick={() => openLong?.()}
            >
              Long hy{hyperdrive.baseToken.symbol}
            </button>
          )
        ) : (
          <button
            className="daisy-btn-secondary daisy-btn"
            onClick={() => openConnectModal?.()}
          >
            <h5>Connect wallet</h5>
          </button>
        )
      }
    />
  );
}
