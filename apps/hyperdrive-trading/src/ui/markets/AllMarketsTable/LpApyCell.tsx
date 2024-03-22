import { ReactElement } from "react";
import Skeleton from "react-loading-skeleton";
import { useLpApy } from "src/ui/hyperdrive/hooks/useLpApy";
import { Address } from "viem";

export function LpApyCell({
  hyperdriveAddress,
}: {
  hyperdriveAddress: Address;
}): ReactElement {
  const { lpApy, lpApyStatus } = useLpApy(hyperdriveAddress);
  if (lpApyStatus === "loading") {
    return <Skeleton className="h-6 w-20" />;
  }
  if (!lpApy) {
    return <span>no data</span>;
  }
  return <span>{(lpApy * 100).toFixed(2)}%</span>;
}
