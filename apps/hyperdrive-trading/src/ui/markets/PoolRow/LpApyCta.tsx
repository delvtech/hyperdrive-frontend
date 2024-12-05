import { fixed } from "@delvtech/fixed-point-wasm";
import { HyperdriveConfig } from "@delvtech/hyperdrive-appconfig";
import { Link } from "@tanstack/react-router";
import { ReactElement } from "react";
import { useLpApy } from "src/ui/hyperdrive/hooks/useLpApy";
import { LpApyStat } from "src/ui/markets/PoolRow/LpApyStat";
import { PoolStat } from "src/ui/markets/PoolRow/PoolStat";
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
      }
    />
  );
}
