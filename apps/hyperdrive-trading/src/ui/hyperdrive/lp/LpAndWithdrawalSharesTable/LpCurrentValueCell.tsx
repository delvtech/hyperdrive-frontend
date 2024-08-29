import { fixed, parseFixed } from "@delvtech/fixed-point-wasm";
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
  const { poolInfo } = usePoolInfo({
    hyperdriveAddress: hyperdrive.address,
    chainId: hyperdrive.chainId,
  });
  const { baseAmountPaid, baseValue, openLpPositionStatus } = useOpenLpPosition(
    {
      hyperdriveAddress: hyperdrive.address,
      account,
      chainId: hyperdrive.chainId,
    },
  );

  const { proceeds, withdrawalShares } = usePreviewRemoveLiquidity({
    destination: account,
    lpSharesIn: lpShares,
    hyperdriveAddress: hyperdrive.address,
    minOutputPerShare: 1n,
    asBase: hyperdrive.withdrawOptions.isBaseTokenWithdrawalEnabled,
    chainId: hyperdrive.chainId,
  });

  // make sure proceeds from withdrawal are always denominated in base
  let baseProceeds = proceeds || 0n;
  if (
    proceeds &&
    poolInfo &&
    !hyperdrive.withdrawOptions.isBaseTokenWithdrawalEnabled
  ) {
    baseProceeds = fixed(proceeds).mul(poolInfo.vaultSharePrice).bigint;
  }
  console.log(!!withdrawalShares, hyperdrive.name);
  let withdrawablePercent = parseFixed("100");
  if (withdrawalShares) {
    if (baseProceeds && baseValue) {
      withdrawablePercent = fixed(
        // amountOut / total * 100
        calculateRatio({
          a: baseProceeds,
          b: baseValue,
          decimals: hyperdrive.decimals,
        }),
      );
    }
  }

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
            {`${withdrawablePercent.format({ decimals: 2 })}% withdrawable`}
          </span>
        </>
      ) : (
        <Skeleton />
      )}
    </div>
  );
}
