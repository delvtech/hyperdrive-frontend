import { HyperdriveConfig } from "@delvtech/hyperdrive-appconfig";
import { Link } from "@tanstack/react-router";
import { ReactElement } from "react";
import { calculateMarketYieldMultiplier } from "src/hyperdrive/calculateMarketYieldMultiplier";
import { useCurrentLongPrice } from "src/ui/hyperdrive/longs/hooks/useCurrentLongPrice";
import { PoolStat } from "src/ui/markets/PoolRow/PoolStat";
import { RewardsTooltip } from "src/ui/rewards/RewardsTooltip";

interface YieldMultiplierCtaProps {
  hyperdrive: HyperdriveConfig;
}

export function YieldMultiplierCta({
  hyperdrive,
}: YieldMultiplierCtaProps): ReactElement {
  const { longPrice, longPriceStatus } = useCurrentLongPrice({
    chainId: hyperdrive.chainId,
    hyperdriveAddress: hyperdrive.address,
  });

  const label = "Yield Multiplier";
  const multiplier =
    longPriceStatus === "success" && longPrice
      ? calculateMarketYieldMultiplier(longPrice)
      : undefined;

  return (
    <PoolStat
      label={label}
      value={
        multiplier ? (
          <RewardsTooltip
            hyperdriveAddress={hyperdrive.address}
            chainId={hyperdrive.chainId}
          >
            {`${multiplier.format({
              decimals: 2,
              rounding: "trunc",
            })}x`}
          </RewardsTooltip>
        ) : (
          "-"
        )
      }
      action={
        <Link
          to="/market/$chainId/$address"
          params={{
            address: hyperdrive.address,
            chainId: hyperdrive.chainId.toString(),
          }}
          search={{ position: "shorts" }}
          className="daisy-btn daisy-btn-sm rounded-full bg-gray-600"
          onClick={(e) => {
            e.stopPropagation();
            window.plausible("positionCtaClick", {
              poolAddress: hyperdrive.address,
              positionType: "short",
              statName: label,
              statValue: multiplier ? multiplier.toString() : "",
            });
          }}
        >
          Short
        </Link>
      }
    />
  );
}
