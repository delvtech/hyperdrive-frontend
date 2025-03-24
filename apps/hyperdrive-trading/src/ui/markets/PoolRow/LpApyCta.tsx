import { fixed } from "@delvtech/fixed-point-wasm";
import { HyperdriveConfig } from "@delvtech/hyperdrive-appconfig";
import { Link } from "@tanstack/react-router";
import { ReactElement } from "react";
import { useLpApy } from "src/ui/hyperdrive/lp/hooks/useLpApy";
import { LpApyStat } from "src/ui/markets/PoolRow/LpApyStat";
import { PoolStat } from "src/ui/markets/PoolRow/PoolStat";
import { RewardsTooltipContent } from "src/ui/rewards/RewardsTooltip/RewardsTooltipContent";
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
    <Link
      to="/market/$chainId/$address"
      params={{
        address: hyperdrive.address,
        chainId: hyperdrive.chainId.toString(),
      }}
      search={{ position: "lp" }}
      onClick={(e) => {
        e.stopPropagation();
        window.plausible("positionCtaClick", {
          props: {
            chainId: hyperdrive.chainId,
            poolAddress: hyperdrive.address,
            positionType: "lp",
            statName: label,
            statValue: lpApy?.netLpApy ? fixed(lpApy.netLpApy).toString() : "",
            connectedWallet: account,
          },
        });
      }}
    >
      <PoolStat
        label={label}
        overlay={
          <RewardsTooltipContent
            chainId={hyperdrive.chainId}
            hyperdriveAddress={hyperdrive.address}
            position="addLiquidity"
            baseRate={lpApy?.lpApy}
            netRate={lpApy?.netLpApy}
          />
        }
        isLoading={lpApyStatus === "loading"}
        isNew={lpApy?.isNew}
        value={
          <LpApyStat
            chainId={hyperdrive.chainId}
            hyperdriveAddress={hyperdrive.address}
          />
        }
      />
    </Link>
  );
}
