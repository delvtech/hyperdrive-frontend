import { HyperdriveConfig } from "@hyperdrive/appconfig";
import { ReactElement } from "react";
import Skeleton from "react-loading-skeleton";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { usePoolInfo } from "src/ui/hyperdrive/hooks/usePoolInfo";
import { useOpenLpPosition } from "src/ui/hyperdrive/lp/hooks/useOpenLpPosition";
import { usePreviewRedeemWithdrawalShares } from "src/ui/hyperdrive/lp/hooks/usePreviewRedeemWithdrawalShares";
import { useWithdrawalShares } from "src/ui/hyperdrive/lp/hooks/useWithdrawalShares";
import { useAccount } from "wagmi";

export function LpCurrentValueCell({
  hyperdrive,
  lpShares,
}: {
  hyperdrive: HyperdriveConfig;
  lpShares: bigint;
}): ReactElement {
  const { address: account } = useAccount();
  const { tokens } = useAppConfig();
  const baseToken = tokens.find(
    (token) => token.address === hyperdrive.poolConfig.baseToken,
  );
  const { poolInfo } = usePoolInfo({ hyperdriveAddress: hyperdrive.address });
  const { baseAmountPaid, baseValue, openLpPositionStatus } = useOpenLpPosition(
    {
      hyperdriveAddress: hyperdrive.address,
      account,
    },
  );
  const { withdrawalShares: balanceOfWithdrawalShares } = useWithdrawalShares({
    hyperdriveAddress: hyperdrive.address,
    account,
  });

  const {
    baseProceeds: baseProceedsFromPreview,
    withdrawalSharesRedeemed: withdrawalSharesRedeemedFromPreview,
  } = usePreviewRedeemWithdrawalShares({
    hyperdriveAddress: hyperdrive.address,
    withdrawalSharesIn: balanceOfWithdrawalShares,
    minOutputPerShare: 1n, // TODO: slippage,
    destination: account,
  });

  // Calculate the withdrawable percentage using fixed()
  // const withdrawablePercentage =
  //   baseValue > 0n
  //     ? fixed(baseProceedsFromPreview || 0n, baseToken?.decimals || 18)
  //         .div(baseValue, baseToken?.decimals || 18)
  //         .mul(100)
  //     : 0;

  const withdrawablePercentage =
    baseValue > 0n
      ? ((baseProceedsFromPreview || 0n) / (baseValue || 1n)) * 100n
      : 0n;

  // Then render it
  return (
    <div className="flex flex-col">
      {!!poolInfo && !!lpShares ? (
        <>
          {`${formatBalance({
            balance: baseValue,
            decimals: baseToken?.decimals || 18,
            places: baseToken?.places,
          })}`}
          <span className="text-sm text-gray-500">
            {(balanceOfWithdrawalShares ?? 0n) > 0n
              ? `${formatBalance({
                  balance: withdrawablePercentage,
                  decimals: hyperdrive.decimals,
                })}% withdrawable`
              : "100% withdrawalable"}
          </span>
        </>
      ) : (
        <Skeleton />
      )}
    </div>
  );
}
