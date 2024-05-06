import classNames from "classnames";
import { ReactElement } from "react";
import Skeleton from "react-loading-skeleton";
import { useIsTailwindSmallScreen } from "src/ui/base/mediaBreakpoints";
import { useLpApy } from "src/ui/hyperdrive/hooks/useLpApy";
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
    return <span>no data</span>;
  }
  return (
    <span
      className={classNames({
        "flex w-14 justify-end": !isTailwindSmallScreen,
      })}
    >
      {(lpApy * 100).toFixed(2)}%
    </span>
  );
}
