import type { ReactElement } from "react";
import Skeleton from "react-loading-skeleton";
import { Badge } from "src/ui/base/components/Badge";
import { useYieldSourceRate } from "src/ui/vaults/useYieldSourceRate";
import type { Address } from "viem";

export function YieldSourceRateBadge({
  hyperdriveAddress,
  labelRenderer,
}: {
  hyperdriveAddress: Address;
  labelRenderer?: (vaultRate: {
    vaultRate: bigint;
    formatted: string;
  }) => ReactElement | string;
}): ReactElement {
  const { vaultRate, vaultRateStatus } = useYieldSourceRate({
    hyperdriveAddress,
  });

  if (vaultRateStatus === "loading" && !vaultRate) {
    return <Skeleton className="h-8 w-42" />;
  }

  if (!vaultRate?.vaultRate) {
    return (
      <Badge>
        <span className="font-dmMono text-neutral-content">
          No variable APY available
        </span>
      </Badge>
    );
  }

  return (
    <Badge>
      <span className="font-dmMono text-neutral-content text-sm lg:text-md">
        {labelRenderer ? (
          labelRenderer(vaultRate)
        ) : (
          <>
            Variable APY @{" "}
            <span className="text-base-content">{vaultRate?.formatted}</span>
          </>
        )}
      </span>
    </Badge>
  );
}
