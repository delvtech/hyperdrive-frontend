import { PoolInfo } from "@hyperdrive/sdk";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import * as dnum from "dnum";
import { MouseEvent, ReactElement } from "react";
import toast from "react-hot-toast";
import { Hyperdrive } from "src/appconfig/types";
import { calculateTotalValueFromPrice } from "src/base/calculateTotalValueFromPrice";
import CustomToastMessage from "src/ui/base/components/Toaster/CustomToastMessage";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useNumericInput } from "src/ui/base/hooks/useNumericInput";
import { TransactionView } from "src/ui/hyperdrive/TransactionView";
import { usePoolInfo } from "src/ui/hyperdrive/hooks/usePoolInfo";
import { usePreviewRemoveLiquidity } from "src/ui/hyperdrive/lp/hooks/usePreviewRemoveLiquidity";
import { useRemoveLiquidity } from "src/ui/hyperdrive/lp/hooks/useRemoveLiquidity";
import { TokenInput } from "src/ui/token/TokenInput";
import { formatUnits } from "viem";
import { useAccount } from "wagmi";
interface RemoveLiquidityFormProps {
  hyperdrive: Hyperdrive;
  lpShares: bigint;
  onRemoveLiquidity?: (e: MouseEvent<HTMLButtonElement>) => void;
}

export function RemoveLiquidityForm({
  hyperdrive,
  lpShares,
  onRemoveLiquidity,
}: RemoveLiquidityFormProps): ReactElement {
  const { decimals: baseDecimals } = hyperdrive.baseToken;
  const { poolInfo } = usePoolInfo(hyperdrive.address);

  const { address: account } = useAccount();

  // Let users type in an amount of base to withdraw
  const {
    amount,
    amountAsBigInt: desiredBaseOut,
    setAmount,
  } = useNumericInput({
    decimals: baseDecimals,
  });

  // Then calculate the lpSharesIn required to remove that amount of base
  const lpSharesIn = calculateRequiredLpSharesIn(desiredBaseOut, poolInfo);

  // Then we preview that trade to show users the split between the actual base
  // and withdrawal shares they'll receive
  const {
    baseAmountOut: actualBaseOut,
    previewRemoveLiquidityStatus,
    withdrawalSharesOut,
  } = usePreviewRemoveLiquidity({
    destination: account,
    lpSharesIn: lpSharesIn[0],
    market: hyperdrive,
    minBaseAmountOut: 1n,
  });

  const { removeLiquidity, removeLiquidityStatus } = useRemoveLiquidity({
    hyperdriveAddress: hyperdrive.address,
    lpSharesIn: lpSharesIn[0],
    minBaseAmountOut: 1n,
    destination: account,
    enabled: previewRemoveLiquidityStatus === "success",
    onExecuted: (hash) => {
      setAmount("");
      toast.success(
        <CustomToastMessage
          message="Liquidity removed"
          // TODO: Update link to point to correct block explorer.
          link={`https://etherscan.com/tx/${hash}`}
        />,
      );
    },
  });

  const formattedBaseAmountOut =
    actualBaseOut !== undefined
      ? `${formatBalance({
          balance: actualBaseOut,
          decimals: baseDecimals,
          places: 8,
        })}`
      : null;

  // to format the withdrawal shares out in terms of base, we need to multiply
  // them by the lpSharePrice
  const formattedWithdrawalSharesOut = withdrawalSharesOut
    ? formatBalance({
        balance: calculateTotalValueFromPrice({
          amount: withdrawalSharesOut,
          price: poolInfo?.lpSharePrice || 0n,
          decimals: hyperdrive.baseToken.decimals,
        }),
        decimals: baseDecimals,
        places: 8,
      })
    : null;

  const currentLpValue = calculateTotalValueFromPrice({
    amount: lpShares,
    price: poolInfo?.lpSharePrice || 0n,
    decimals: hyperdrive.baseToken.decimals,
  });

  return (
    <TransactionView
      heading="Remove liquidity"
      tokenInput={
        <TokenInput
          token={{
            name: hyperdrive.baseToken.name,
            symbol: hyperdrive.baseToken.symbol,
            decimals: baseDecimals,
            address: "0x00",
          }}
          value={amount ?? ""}
          maxValue={formatUnits(currentLpValue, baseDecimals)}
          stat={
            lpShares && !!poolInfo
              ? `Current liquidity: ${formatBalance({
                  balance: currentLpValue,
                  decimals: hyperdrive.baseToken.decimals,
                  places: 2,
                })} ${hyperdrive.baseToken.symbol}`
              : undefined
          }
          onChange={(newAmount) => setAmount(newAmount)}
        />
      }
      transactionPreview={
        <div className="flex flex-col gap-1">
          <div className="flex justify-between">
            <p>You receive</p>
            <p>
              {formattedBaseAmountOut || 0} {hyperdrive.baseToken.symbol}
            </p>
          </div>

          <div className="flex justify-between">
            <p>Queued for withdrawal</p>
            <p>
              {formattedWithdrawalSharesOut || 0} {hyperdrive.baseToken.symbol}
            </p>
          </div>
        </div>
      }
      actionButton={
        account ? (
          <button
            className="daisy-btn-primary daisy-btn"
            disabled={!removeLiquidity || removeLiquidityStatus === "loading"}
            onClick={(e) => {
              removeLiquidity?.();
              onRemoveLiquidity?.(e);
            }}
          >
            Remove liquidity
          </button>
        ) : (
          <ConnectButton />
        )
      }
    />
  );
}

function calculateRequiredLpSharesIn(
  desiredBaseOut: bigint | undefined,
  poolInfo: PoolInfo | undefined,
) {
  return dnum.div(
    [desiredBaseOut || 1n, 18],
    [poolInfo?.lpSharePrice || 1n, 18],
  );
}
