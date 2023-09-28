import { ConnectButton } from "@rainbow-me/rainbowkit";
import { MouseEvent, ReactElement } from "react";
import { Hyperdrive } from "src/appconfig/types";
import { Stat } from "src/ui/base/components/Stat";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useNumericInput } from "src/ui/base/hooks/useNumericInput";
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
    <div className="flex flex-col gap-6">
      {/* Amount to close section */}
      <div className="space-y-4 text-base-content">
        <h5>Amount to redeem</h5>
        <TokenInput
          token={{
            name: "Hyperdrive Withdrawal Shares",
            // TODO: What should the symbol be?
            symbol: "Shares",
            decimals: baseDecimals,
            address: "0x00",
          }}
          value={amount ?? ""}
          maxValue={formatUnits(
            maxRedeemableShares ?? withdrawalShares,
            baseDecimals,
          )}
          onChange={(newAmount) => setAmount(newAmount)}
        />
      </div>

      {/* You receive Section */}
      <div className="space-y-4 text-center text-base-content">
        <Stat
          label={"You receive"}
          value={
            baseAmountOut
              ? `${formatBalance({
                  balance: formatUnits(baseAmountOut, baseDecimals),
                  numDecimals: 8,
                })} ${baseSymbol}`
              : ""
          }
        />
      </div>

      {account ? (
        <button
          className="daisy-btn-primary daisy-btn"
          disabled={
            !redeemWithdrawalShares ||
            redeemWithdrawalSharesStatus === "pending"
          }
          onClick={(e) => {
            redeemWithdrawalShares?.();
          }}
        >
          Redeem withdrawal shares
        </button>
      ) : (
        <ConnectButton />
      )}
    </div>
  );
}
