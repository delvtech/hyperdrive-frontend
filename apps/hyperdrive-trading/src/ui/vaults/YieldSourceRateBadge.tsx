import { ReactElement } from "react";
import Skeleton from "react-loading-skeleton";
import { Badge } from "src/ui/base/components/Badge";
import { useYieldSourceRate } from "src/ui/vaults/useYieldSourceRate";
import { Address } from "viem";

export function YieldSourceRateBadge({
  chainId,
  hyperdriveAddress,
  labelRenderer,
}: {
  chainId: number;
  hyperdriveAddress: Address;
  labelRenderer?: (vaultRate: {
    vaultRate: bigint;
    formatted: string;
  }) => ReactElement | string;
}): ReactElement {
  const { vaultRate, vaultRateStatus } = useYieldSourceRate({
    hyperdriveAddress,
    chainId,
  });

  if (vaultRateStatus === "loading" && !vaultRate) {
    return <Skeleton className="w-42 h-8" />;
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
      <span className="font-dmMono text-sm text-neutral-content lg:text-md">
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
