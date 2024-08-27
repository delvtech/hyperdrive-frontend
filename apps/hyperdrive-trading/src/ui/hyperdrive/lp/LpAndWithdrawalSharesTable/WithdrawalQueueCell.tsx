import { HyperdriveConfig } from "@hyperdrive/appconfig";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { usePoolInfo } from "src/ui/hyperdrive/hooks/usePoolInfo";
import { useOpenLpPosition } from "src/ui/hyperdrive/lp/hooks/useOpenLpPosition";
import { usePreviewRedeemWithdrawalShares } from "src/ui/hyperdrive/lp/hooks/usePreviewRedeemWithdrawalShares";
import { useWithdrawalShares } from "src/ui/hyperdrive/lp/hooks/useWithdrawalShares";
import { getWithdrawalSharesCurrentValue } from "src/ui/hyperdrive/withdrawalShares/OpenWithdrawalSharesCard/OpenWithdrawalSharesCard";
import { useAccount } from "wagmi";

export function WithdrawalQueueCell({
  hyperdrive,
}: {
  hyperdrive: HyperdriveConfig;
}): JSX.Element {
  const { address: account } = useAccount();
  const appConfig = useAppConfig();
  const baseToken = appConfig.tokens.find(
    (token) => token.address === hyperdrive.poolConfig.baseToken,
  );
  const { poolInfo } = usePoolInfo({ hyperdriveAddress: hyperdrive.address });
  const { withdrawalShares: balanceOfWithdrawalShares } = useWithdrawalShares({
    hyperdriveAddress: hyperdrive.address,
    account,
  });
  const { baseAmountPaid, baseValue, openLpPositionStatus } = useOpenLpPosition(
    {
      hyperdriveAddress: hyperdrive.address,
      account,
    },
  );

  const {
    baseProceeds: baseProceedsFromPreview,
    withdrawalSharesRedeemed: withdrawalSharesRedeemedFromPreview,
  } = usePreviewRedeemWithdrawalShares({
    hyperdriveAddress: hyperdrive.address,
    withdrawalSharesIn: balanceOfWithdrawalShares,
    minOutputPerShare: 1n, // TODO: slippage,
    destination: account,
  });

  const withdrawalSharesCurrentValue = getWithdrawalSharesCurrentValue({
    decimals: hyperdrive.decimals,
    lpSharePrice: poolInfo?.lpSharePrice,
    withdrawalShares: balanceOfWithdrawalShares,
    baseProceedsFromPreview,
    withdrawalSharesRedeemedFromPreview,
  });

  if (balanceOfWithdrawalShares === 0n) {
    return (
      <div className="flex flex-col">
        <p>
          {formatBalance({
            balance: 0n,
            decimals: baseToken?.decimals || 18,
            places: baseToken?.places,
          })}{" "}
        </p>
        <p className="text-neutral-content">
          {formatBalance({
            balance: 0n,
            decimals: baseToken?.decimals || 18,
            places: baseToken?.places,
          })}{" "}
          {baseToken?.symbol}
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <p>
        {formatBalance({
          balance: withdrawalSharesCurrentValue || 0n,
          decimals: baseToken?.decimals || 18,
          places: baseToken?.places,
        })}{" "}
      </p>
      <p className="text-neutral-content">
        {formatBalance({
          balance: baseValue - (withdrawalSharesCurrentValue ?? 0n),
          decimals: baseToken?.decimals || 18,
          places: baseToken?.places,
        })}{" "}
        {baseToken?.symbol}
      </p>
    </div>
  );
}
