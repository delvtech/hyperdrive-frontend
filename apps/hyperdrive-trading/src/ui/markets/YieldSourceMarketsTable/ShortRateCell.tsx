import { HyperdriveConfig } from "@hyperdrive/appconfig";
import classNames from "classnames";
import { ReactElement } from "react";
import { useShortRate } from "src/ui/hyperdrive/shorts/hooks/useShortRate";
import { useYieldSourceRate } from "src/ui/vaults/useYieldSourceRate";

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
    bondAmount: BigInt(1e15),
    variableApy: vaultRate?.vaultRate,
    timestamp: BigInt(Math.floor(Date.now() / 1000)),
  });
  return (
    <div className="flex flex-col lg:w-24 lg:justify-end">
      <span
        className={classNames("lg:flex lg:w-24 lg:justify-end", {
          "text-neutral-content": !shortApr,
          "text-success ": (shortApr?.apr || 0n) > 0n,
          "text-error": (shortApr?.apr || 0n) < 0n,
        })}
      >
        {shortApr ? `${shortApr.formatted}` : "-"}
      </span>
    </div>
  );
}
