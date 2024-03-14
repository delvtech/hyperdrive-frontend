import { ReactElement } from "react";
import { useMockYieldSourceRate } from "src/ui/vaults/useMockYieldSourceRate";
import { Address } from "viem";

export function YieldSourceApy({
  yieldSourceAddress,
}: {
  yieldSourceAddress: Address;
}): ReactElement {
  const { vaultRate } = useMockYieldSourceRate({
    vaultAddress: yieldSourceAddress,
  });
  return (
    <span className="flex items-center gap-1.5">
      {vaultRate?.formatted || 0}%
    </span>
  );
}
