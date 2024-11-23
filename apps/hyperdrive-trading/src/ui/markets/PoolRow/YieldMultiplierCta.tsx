import { HyperdriveConfig } from "@delvtech/hyperdrive-appconfig";
import { Link } from "@tanstack/react-router";
import { ReactElement } from "react";
import { calculateMarketYieldMultiplier } from "src/hyperdrive/calculateMarketYieldMultiplier";
import { useCurrentLongPrice } from "src/ui/hyperdrive/longs/hooks/useCurrentLongPrice";
import { PoolStat } from "src/ui/markets/PoolRow/PoolStat";
import { YieldMultiplierStat } from "src/ui/markets/PoolRow/YieldMultiplierStat";
import { useAccount } from "wagmi";

interface YieldMultiplierCtaProps {
  hyperdrive: HyperdriveConfig;
}

export function YieldMultiplierCta({
  hyperdrive,
}: YieldMultiplierCtaProps): ReactElement {
  const { address: account } = useAccount();
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
          <YieldMultiplierStat
            hyperdriveAddress={hyperdrive.address}
            chainId={hyperdrive.chainId}
          />
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
          search={{ position: "short" }}
          className="daisy-btn h-10 min-h-10 w-10/12 rounded-full bg-gray-500 sm:daisy-btn-sm hover:bg-gray-500 sm:h-8 sm:w-full sm:bg-gray-600"
          onClick={(e) => {
            e.stopPropagation();
            window.plausible("positionCtaClick", {
              props: {
                chainId: hyperdrive.chainId,
                poolAddress: hyperdrive.address,
                positionType: "short",
                statName: label,
                statValue: multiplier ? multiplier.toString() : "",
                connectedWallet: account,
              },
            });
          }}
        >
          Short
        </Link>
      }
    />
  );
}
