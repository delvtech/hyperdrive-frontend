import { fixed } from "@delvtech/fixed-point-wasm";
import { HyperdriveConfig } from "@delvtech/hyperdrive-appconfig";
import { Link } from "@tanstack/react-router";
import { ReactElement } from "react";
import { useLpApy } from "src/ui/hyperdrive/hooks/useLpApy";
import { LpApyStat } from "src/ui/markets/PoolRow/LpApyStat";
import { PoolStat } from "src/ui/markets/PoolRow/PoolStat";

interface LpApyCtaProps {
  hyperdrive: HyperdriveConfig;
}

export function LpApyCta({ hyperdrive }: LpApyCtaProps): ReactElement {
  const { lpApy, lpApyStatus } = useLpApy({
    hyperdriveAddress: hyperdrive.address,
    chainId: hyperdrive.chainId,
  });

  const label = lpApy ? `LP APY (${lpApy.ratePeriodDays}d)` : "LP APY";

  return (
    <PoolStat
      label={label}
      isLoading={lpApyStatus === "loading"}
      isNew={lpApy?.isNew}
      value={
        <LpApyStat
          chainId={hyperdrive.chainId}
          hyperdriveAddress={hyperdrive.address}
        />
      }
      action={
        <Link
          to="/market/$chainId/$address"
          params={{
            address: hyperdrive.address,
            chainId: hyperdrive.chainId.toString(),
          }}
          search={{ position: "lp" }}
          className="daisy-btn daisy-btn-sm rounded-full bg-gray-600"
          onClick={(e) => {
            e.stopPropagation();
            window.plausible("positionCtaClick", {
              props: {
                chainId: hyperdrive.chainId,
                poolAddress: hyperdrive.address,
                positionType: "lp",
                statName: label,
                statValue: lpApy?.netLpApy
                  ? fixed(lpApy.netLpApy).toString()
                  : "",
              },
            });
          }}
        >
          Supply
        </Link>
      }
    />
  );
}
