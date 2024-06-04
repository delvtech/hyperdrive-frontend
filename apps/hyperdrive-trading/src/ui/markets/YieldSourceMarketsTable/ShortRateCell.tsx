import { HyperdriveConfig } from "@hyperdrive/appconfig";
import { ReactElement } from "react";
import { formatRate } from "src/base/formatRate";
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
  const { impliedRate } = useShortRate({
    hyperdriveAddress: hyperdrive.address,
    bondAmount: parseUnits("100", hyperdrive.decimals),
    variableApy: vaultRate?.vaultRate,
    timestamp: BigInt(Math.floor(Date.now() / 1000)),
  });
  const shortApy = impliedRate ? impliedRate : 0n;
  return (
    <span key="short-apy" className="lg:flex lg:w-20 lg:justify-end">
      {shortApy ? `${formatRate(shortApy)}%` : "-"}
    </span>
  );
}
