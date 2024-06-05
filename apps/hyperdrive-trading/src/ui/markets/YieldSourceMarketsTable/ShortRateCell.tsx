import { HyperdriveConfig } from "@hyperdrive/appconfig";
import { ReactElement } from "react";
import { useShortRate } from "src/ui/hyperdrive/shorts/hooks/useShortRate";
import { useYieldSourceRate } from "src/ui/vaults/useYieldSourceRate";
import { parseUnits } from "viem";

export function ShortRateCell({
  hyperdrive,
}: {
  hyperdrive: HyperdriveConfig;
}): ReactElement {
  const { vaultRate } = useYieldSourceRate({
    hyperdriveAddress: hyperdrive.address,
  });
  const { shortApr } = useShortRate({
    hyperdriveAddress: hyperdrive.address,
    bondAmount: parseUnits("100", hyperdrive.decimals),
    variableApy: vaultRate?.vaultRate,
    timestamp: BigInt(Math.floor(Date.now() / 1000)),
  });
  return (
    <span key="short-apy" className="lg:flex lg:w-20 lg:justify-end">
      {shortApr ? `${shortApr.formatted}%` : "-"}
    </span>
  );
}
