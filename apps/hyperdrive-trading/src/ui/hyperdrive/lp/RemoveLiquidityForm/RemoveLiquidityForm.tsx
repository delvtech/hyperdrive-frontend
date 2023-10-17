import { adjustAmountByPercentage } from "@hyperdrive/sdk";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { MouseEvent, ReactElement } from "react";
import { Hyperdrive } from "src/appconfig/types";
import { Well } from "src/ui/base/components/Well/Well";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useNumericInput } from "src/ui/base/hooks/useNumericInput";
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

  const { address: account } = useAccount();

  const { amount, amountAsBigInt, setAmount } = useNumericInput({
    decimals: baseDecimals,
  });

  const { baseAmountOut, withdrawalSharesOut, previewRemoveLiquidityStatus } =
    usePreviewRemoveLiquidity({
      market: hyperdrive,
      lpSharesIn: amountAsBigInt,
      minBaseAmountOut: 0n,
      destination: account,
    });

  const minBaseAmountAfterSlippage =
    baseAmountOut &&
    adjustAmountByPercentage({
      amount: baseAmountOut,
      decimals: hyperdrive.baseToken.decimals,
    });

  const { removeLiquidity, removeLiquidityStatus } = useRemoveLiquidity({
    hyperdriveAddress: hyperdrive.address,
    lpSharesIn: amountAsBigInt,
    minBaseAmountOut: minBaseAmountAfterSlippage,
    destination: account,
    enabled: previewRemoveLiquidityStatus === "success",
  });

  const formattedBaseAmountOut =
    baseAmountOut !== undefined
      ? `${formatBalance({
          balance: baseAmountOut,
          decimals: baseDecimals,
          places: 8,
        })}`
      : null;

  const formattedWithdrawalSharesOut = withdrawalSharesOut
    ? formatBalance({
        balance: withdrawalSharesOut,
        decimals: baseDecimals,
        places: 8,
      })
    : null;

  return (
    <div className="flex flex-col gap-4">
      <h5 className="font-bold">Remove liquidity</h5>
      <TokenInput
        token={{
          name: "Hyperdrive LP",
          symbol: "LP shares",
          decimals: baseDecimals,
          address: "0x00",
        }}
        value={amount ?? ""}
        maxValue={formatUnits(lpShares, baseDecimals)}
        stat={
          lpShares
            ? `Balance: ${formatBalance({
                balance: lpShares,
                decimals: baseDecimals,
                places: 4,
              })} LP shares`
            : undefined
        }
        onChange={(newAmount) => setAmount(newAmount)}
      />

      {/* You receive Section */}
      <div className="mt-4 flex flex-col gap-6">
        <Well elevation="flat">
          <div className="space-y-4">
            <span className="text-h6 font-bold">Preview transaction</span>
            <div className="flex flex-col gap-1">
              <div className="flex justify-between">
                <p>You receive</p>
                <p>
                  {formattedBaseAmountOut || 0} {hyperdrive.baseToken.symbol}
                </p>
              </div>

              <div className="flex justify-between">
                <p>Withdrawal shares</p>
                <p>{formattedWithdrawalSharesOut || 0} Shares</p>
              </div>
            </div>
          </div>
        </Well>

        {account ? (
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
        )}
      </div>
    </div>
  );
}
