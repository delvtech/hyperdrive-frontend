import { HyperdriveConfig } from "@hyperdrive/appconfig";
import { ReactElement } from "react";
import Skeleton from "react-loading-skeleton";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { usePoolInfo } from "src/ui/hyperdrive/hooks/usePoolInfo";
import { useOpenLpPosition } from "src/ui/hyperdrive/lp/hooks/useOpenLpPosition";
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
  return (
    <div>
      {!!poolInfo && !!lpShares ? (
        `${formatBalance({
          balance: baseValue,
          decimals: baseToken?.decimals || 18,
          places: baseToken?.places,
        })}`
      ) : (
        <Skeleton />
      )}
    </div>
  );
}
