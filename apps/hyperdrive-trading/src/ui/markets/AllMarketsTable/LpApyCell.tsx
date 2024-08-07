import { SparklesIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import { ReactElement } from "react";
import Skeleton from "react-loading-skeleton";
import { useIsTailwindSmallScreen } from "src/ui/base/mediaBreakpoints";
import { useLpApy } from "src/ui/hyperdrive/hooks/useLpApy";
import { RewardsTooltip } from "src/ui/rewards/RewardsTooltip";
import { Address } from "viem";

export function LpApyCell({
  hyperdriveAddress,
}: {
  hyperdriveAddress: Address;
}): ReactElement {
  const { lpApy, lpApyStatus } = useLpApy(hyperdriveAddress);
  const isTailwindSmallScreen = useIsTailwindSmallScreen();
  if (lpApyStatus === "loading") {
    return <Skeleton className="h-6 w-20" />;
  }
  if (!lpApy) {
    return (
      <span className="flex flex-row">
        <SparklesIcon width={24} className="fill-base-content stroke-none" />
        New
      </span>
    );
  }
  return (
    <span
      className={classNames({
        "flex w-14 justify-end": !isTailwindSmallScreen,
      })}
    >
      <RewardsTooltip hyperdriveAddress={hyperdriveAddress} positionType="lp">
        {(lpApy * 100).toFixed(2)}%
      </RewardsTooltip>
    </span>
  );
}
