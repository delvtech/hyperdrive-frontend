import { fixed } from "@delvtech/fixed-point-wasm";
import { HyperdriveConfig } from "@hyperdrive/appconfig";
import { ReactElement } from "react";
import Skeleton from "react-loading-skeleton";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { usePoolInfo } from "src/ui/hyperdrive/hooks/usePoolInfo";
import { useOpenLpPosition } from "src/ui/hyperdrive/lp/hooks/useOpenLpPosition";
import { usePreviewRedeemWithdrawalShares } from "src/ui/hyperdrive/lp/hooks/usePreviewRedeemWithdrawalShares";
import { usePreviewRemoveLiquidity } from "src/ui/hyperdrive/lp/hooks/usePreviewRemoveLiquidity";
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

  const {
    proceeds: actualValueOut,
    previewRemoveLiquidityStatus,
    withdrawalShares,
  } = usePreviewRemoveLiquidity({
    destination: account,
    lpSharesIn: lpShares,
    hyperdriveAddress: hyperdrive.address,
    minOutputPerShare: 1n,
    asBase: true,
  });

  const fixedActualValueOut = fixed(
    (actualValueOut ?? 0n) > 0n ? (actualValueOut ?? 0n) : 0n,
    baseToken?.decimals || 18,
  );
  const fixedBaseValue = fixed(
    baseValue > 0n ? baseValue : 0n,
    baseToken?.decimals || 18,
  );
  const withdrawablePercentage = fixedBaseValue.eq(0)
    ? fixed(0)
    : fixedActualValueOut.div(fixedBaseValue);
  // console.log(actualValueOut, hyperdrive.name, "Actual Value out");
  // console.log(
  //   fixedActualValueOut.toNumber(),
  //   hyperdrive.name,
  //   "Fixed Actual Value out",
  // );
  // console.log(fixedBaseValue.toNumber(), hyperdrive.name, "Fixed Base Value");
  // console.log(
  //   withdrawablePercentage.toNumber(),
  //   hyperdrive.name,
  //   "withdrawablePercentage",
  // );

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
              ? `${withdrawablePercentage.format({ percent: true })}% withdrawable`
              : "100% withdrawalable"}
          </span>
        </>
      ) : (
        <Skeleton />
      )}
    </div>
  );
}
