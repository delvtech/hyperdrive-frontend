import { findBaseToken, HyperdriveConfig } from "@hyperdrive/appconfig";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { MouseEvent, ReactElement } from "react";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useNumericInput } from "src/ui/base/hooks/useNumericInput";
import { usePreviewRedeemWithdrawalShares } from "src/ui/hyperdrive/lp/hooks/usePreviewRedeemWithdrawalShares";
import { useRedeemWithdrawalShares } from "src/ui/hyperdrive/lp/hooks/useRedeemWithdrawalShares";
import { TransactionView } from "src/ui/hyperdrive/TransactionView";
import { TokenInput } from "src/ui/token/TokenInput";
import { formatUnits } from "viem";
import { useAccount } from "wagmi";

interface RedeemWithdrawalSharesFormProps {
  hyperdrive: HyperdriveConfig;
  withdrawalShares: bigint;
  onRedeemWithdrawalShares?: (e: MouseEvent<HTMLButtonElement>) => void;
}

export function RedeemWithdrawalSharesForm({
  hyperdrive,
  withdrawalShares,
  onRedeemWithdrawalShares,
}: RedeemWithdrawalSharesFormProps): ReactElement {
  const appConfig = useAppConfig();
  const baseToken = findBaseToken({
    baseTokenAddress: hyperdrive.baseToken,
    tokens: appConfig.tokens,
  });

  const { address: account } = useAccount();

  const { amount, amountAsBigInt, setAmount } = useNumericInput({
    decimals: baseToken.decimals,
  });

  const { sharesRedeemed: maxRedeemableShares } =
    usePreviewRedeemWithdrawalShares({
      hyperdriveAddress: hyperdrive.address,
      withdrawalSharesIn: withdrawalShares,
      minBaseAmountOutPerShare: 0n,
      destination: account,
    });

  const { baseAmountOut, previewRedeemWithdrawalSharesStatus } =
    usePreviewRedeemWithdrawalShares({
      hyperdriveAddress: hyperdrive.address,
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
          name="withdrawalShares"
          token="Withdrawal shares"
          value={amount ?? ""}
          stat={`Balance: ${formatBalance({
            balance: maxRedeemableShares ?? withdrawalShares,
            decimals: baseToken.decimals,
            places: 6,
          })}`}
          maxValue={formatUnits(
            maxRedeemableShares ?? withdrawalShares,
            baseToken.decimals,
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
                    decimals: baseToken.decimals,
                    places: 8,
                  })} ${baseToken.symbol}`
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
