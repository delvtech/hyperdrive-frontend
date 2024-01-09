import { ConnectButton } from "@rainbow-me/rainbowkit";
import { MouseEvent, ReactElement } from "react";
import { Hyperdrive } from "src/appconfig/types";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useNumericInput } from "src/ui/base/hooks/useNumericInput";
import { TransactionView } from "src/ui/hyperdrive/TransactionView";
import { usePreviewRedeemWithdrawalShares } from "src/ui/hyperdrive/lp/hooks/usePreviewRedeemWithdrawalShares";
import { useRedeemWithdrawalShares } from "src/ui/hyperdrive/lp/hooks/useRedeemWithdrawalShares";
import { TokenInput } from "src/ui/token/TokenInput";
import { formatUnits } from "viem";
import { useAccount } from "wagmi";

interface RedeemWithdrawalSharesFormProps {
  hyperdrive: Hyperdrive;
  withdrawalShares: bigint;
  onRedeemWithdrawalShares?: (e: MouseEvent<HTMLButtonElement>) => void;
}

export function RedeemWithdrawalSharesForm({
  hyperdrive,
  withdrawalShares,
  onRedeemWithdrawalShares,
}: RedeemWithdrawalSharesFormProps): ReactElement {
  const { decimals: baseDecimals, symbol: baseSymbol } = hyperdrive.baseToken;

  const { address: account } = useAccount();

  const { amount, amountAsBigInt, setAmount } = useNumericInput({
    decimals: baseDecimals,
  });

  const { sharesRedeemed: maxRedeemableShares } =
    usePreviewRedeemWithdrawalShares({
      market: hyperdrive,
      withdrawalSharesIn: withdrawalShares,
      minBaseAmountOutPerShare: 0n,
      destination: account,
    });

  const { baseAmountOut, previewRedeemWithdrawalSharesStatus } =
    usePreviewRedeemWithdrawalShares({
      market: hyperdrive,
      withdrawalSharesIn: amountAsBigInt,
      minBaseAmountOutPerShare: 0n,
      destination: account,
    });

  const { redeemWithdrawalShares, redeemWithdrawalSharesStatus } =
    useRedeemWithdrawalShares({
      hyperdriveAddress: hyperdrive.address,
      withdrawalSharesIn: amountAsBigInt,
      minBaseAmountOutPerShare: 0n,
      destination: account,
      enabled: previewRedeemWithdrawalSharesStatus === "success",
    });

  return (
    <TransactionView
      heading="Redeem withdrawal shares"
      tokenInput={
        <TokenInput
          token={{
            name: "Hyperdrive Withdrawal Shares",
            // TODO: What should the symbol be?
            symbol: "Withdrawal shares",
            decimals: baseDecimals,
            address: "0x00",
          }}
          value={amount ?? ""}
          stat={`Balance: ${formatBalance({
            balance: maxRedeemableShares ?? withdrawalShares,
            decimals: baseDecimals,
            places: 6,
          })}`}
          maxValue={formatUnits(
            maxRedeemableShares ?? withdrawalShares,
            baseDecimals,
          )}
          onChange={(newAmount) => setAmount(newAmount)}
        />
      }
      transactionPreview={
        <div className="flex flex-col gap-1">
          <div className="flex justify-between">
            <p>You receive</p>
            <p className="font-bold">
              {baseAmountOut
                ? `${formatBalance({
                    balance: baseAmountOut,
                    decimals: baseDecimals,
                    places: 8,
                  })} ${baseSymbol}`
                : ""}
            </p>
          </div>
        </div>
      }
      actionButton={
        account ? (
          <button
            className="daisy-btn daisy-btn-circle daisy-btn-primary w-full disabled:bg-primary disabled:text-base-100 disabled:opacity-30"
            disabled={
              !redeemWithdrawalShares ||
              redeemWithdrawalSharesStatus === "loading"
            }
            onClick={(e) => {
              redeemWithdrawalShares?.();
              onRedeemWithdrawalShares?.(e);
            }}
          >
            Redeem withdrawal shares
          </button>
        ) : (
          <ConnectButton />
        )
      }
    />
  );
}
