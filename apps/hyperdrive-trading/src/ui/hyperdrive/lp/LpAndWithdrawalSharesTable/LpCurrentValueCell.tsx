import { fixed } from "@delvtech/fixed-point-wasm";
import { HyperdriveConfig } from "@hyperdrive/appconfig";
import { ReactElement } from "react";
import Skeleton from "react-loading-skeleton";
import { calculateRatio } from "src/base/calculateRatio";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { usePoolInfo } from "src/ui/hyperdrive/hooks/usePoolInfo";
import { useOpenLpPosition } from "src/ui/hyperdrive/lp/hooks/useOpenLpPosition";
import { usePreviewRemoveLiquidity } from "src/ui/hyperdrive/lp/hooks/usePreviewRemoveLiquidity";
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

  const { proceeds: actualValueOut } = usePreviewRemoveLiquidity({
    destination: account,
    lpSharesIn: lpShares,
    hyperdriveAddress: hyperdrive.address,
    minOutputPerShare: 1n,
    asBase: hyperdrive.withdrawOptions.isBaseTokenWithdrawalEnabled,
  });

  // make sure proceeds from withdrawal are always denominated in base
  let baseProceeds = actualValueOut || 0n;
  if (
    actualValueOut &&
    poolInfo &&
    !hyperdrive.withdrawOptions.isBaseTokenWithdrawalEnabled
  ) {
    baseProceeds = fixed(actualValueOut).mul(poolInfo.vaultSharePrice).bigint;
  }

  const withdrawablePercent =
    baseValue > 0n && baseProceeds > 0n
      ? fixed(
          // amountOut / total * 100
          calculateRatio({
            a: baseProceeds,
            b: baseValue,
            decimals: hyperdrive.decimals,
          }),
        )
      : fixed(0n);

  //

  console.log({
    hyperdrive: hyperdrive.name,
    // fixedBaseValue: fixed(baseProceeds).bigint,
    baseValueFromOpenLpPositionHook: fixed(baseValue).bigint,
    calculateFromLpSharePrice: fixed(lpShares).mul(poolInfo?.lpSharePrice || 0n)
      .bigint,
    // fixedActualValueOut: fixed(lpShares)
    //   .mul(poolInfo?.lpSharePrice || 0n)
    //   .toNumber(),
    withdrawablePercentage: withdrawablePercent.toNumber(),
  });

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
            {`${withdrawablePercent.toNumber()}%`}
          </span>
        </>
      ) : (
        <Skeleton />
      )}
    </div>
  );
}
