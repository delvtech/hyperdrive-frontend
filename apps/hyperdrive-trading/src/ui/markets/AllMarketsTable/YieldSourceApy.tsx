import { ReactElement } from "react";
import { HyperdriveConfig } from "src/hyperdrive/HyperdriveConfig";
import { useVaultRate } from "src/ui/vaults/useVaultRate";

export function YieldSourceApy({
  hyperdrive,
}: {
  hyperdrive: HyperdriveConfig;
}): ReactElement {
  const { vaultRate } = useVaultRate({
    vaultAddress: hyperdrive.sharesToken.address,
  });
  return (
    <span className="flex items-center gap-1.5">
      {vaultRate?.formatted || 0}% APY
    </span>
  );
}
