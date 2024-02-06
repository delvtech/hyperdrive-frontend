import { ReactElement } from "react";
import { useVaultRate } from "src/ui/vaults/useVaultRate";
import { Address } from "viem";

export function YieldSourceApy({
  yieldSourceAddress,
}: {
  yieldSourceAddress: Address;
}): ReactElement {
  const { vaultRate } = useVaultRate({
    vaultAddress: yieldSourceAddress,
  });
  return (
    <span className="flex items-center gap-1.5">
      {vaultRate?.formatted || 0}% APY
    </span>
  );
}
