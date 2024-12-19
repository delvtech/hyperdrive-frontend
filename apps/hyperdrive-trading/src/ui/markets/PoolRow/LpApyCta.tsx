import { fixed } from "@delvtech/fixed-point-wasm";
import { HyperdriveConfig } from "@delvtech/hyperdrive-appconfig";
import { Link } from "@tanstack/react-router";
import { ReactElement } from "react";
import { Tooltip } from "src/ui/base/components/Tooltip/Tooltip";
import { useLpApy } from "src/ui/hyperdrive/lp/hooks/useLpApy";
import { LpApyStat } from "src/ui/markets/PoolRow/LpApyStat";
import { PoolStat } from "src/ui/markets/PoolRow/PoolStat";
import { HyperVueMilesIconUrl } from "src/ui/rewards/HyperVueMilesIconUrl";
import { useAccount } from "wagmi";

interface LpApyCtaProps {
  hyperdrive: HyperdriveConfig;
}

export function LpApyCta({ hyperdrive }: LpApyCtaProps): ReactElement {
  const { address: account } = useAccount();
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
        <div className="daisy-indicator">
          <span className="daisy-badge daisy-indicator-item p-0">
            <Tooltip
              position="left"
              tooltip="Earns 1 Mile per day for every $1 supplied"
            >
              <img src={HyperVueMilesIconUrl} className="size-6 rounded-full" />
            </Tooltip>
          </span>
          <Link
            to="/market/$chainId/$address"
            params={{
              address: hyperdrive.address,
              chainId: hyperdrive.chainId.toString(),
            }}
            search={{ position: "lp" }}
            className="daisy-btn h-10 min-h-10 w-full rounded-full bg-gray-500 sm:daisy-btn-sm hover:bg-gray-500 sm:h-8 sm:bg-gray-600 md:w-32"
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
                  connectedWallet: account,
                },
              });
            }}
          >
            Add Liquidity
          </Link>
        </div>
      }
    />
  );
}
