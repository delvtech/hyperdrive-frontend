import { ReactElement } from "react";
import { HyperdriveConfigOld } from "src/hyperdrive/HyperdriveConfigOld";
import { useVaultRate } from "src/ui/vaults/useVaultRate";

export function YieldSourceApy({
  hyperdrive,
}: {
  hyperdrive: HyperdriveConfigOld;
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
