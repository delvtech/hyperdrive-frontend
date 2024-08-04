import type { ReactElement } from "react";
import { useYieldSourceRate } from "src/ui/vaults/useYieldSourceRate";
import type { Address } from "viem";

export function YieldSourceApy({
  hyperdriveAddress,
}: {
  hyperdriveAddress: Address;
}): ReactElement {
  const { vaultRate } = useYieldSourceRate({
    hyperdriveAddress,
  });
  return (
    <span className="flex items-center gap-1.5 xl:w-24 xl:justify-end">
      {vaultRate?.formatted || 0}%
    </span>
  );
}
