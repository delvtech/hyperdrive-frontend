import { ConnectButton } from "@rainbow-me/rainbowkit";
import { MouseEvent, ReactElement } from "react";
import { Hyperdrive } from "src/appconfig/types";
import { Well } from "src/ui/base/components/Well/Well";
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
    <div className="flex flex-col gap-4">
      {/* Amount to close section */}
      <h5 className="font-bold">Redeem withdrawal shares</h5>
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
          places: 4,
        })}`}
        maxValue={formatUnits(
          maxRedeemableShares ?? withdrawalShares,
          baseDecimals,
        )}
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
          </div>
        </Well>

        {account ? (
          <button
            className="daisy-btn-primary daisy-btn"
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
        )}
      </div>
    </div>
  );
}
