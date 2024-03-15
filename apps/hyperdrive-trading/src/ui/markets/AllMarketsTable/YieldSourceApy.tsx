import { ReactElement } from "react";
import { useYieldSourceRate } from "src/ui/vaults/useYieldSourceRate";
import { Address } from "viem";

export function YieldSourceApy({
  hyperdriveAddress,
}: {
  hyperdriveAddress: Address;
}): ReactElement {
  const { vaultRate } = useYieldSourceRate({
    hyperdriveAddress,
  });
  return (
    <span className="flex items-center gap-1.5">
      {vaultRate?.formatted || 0}%
    </span>
  );
}
