import { fixed } from "@delvtech/fixed-point-wasm";
import { HyperdriveConfig } from "@delvtech/hyperdrive-appconfig";
import { Link } from "@tanstack/react-router";
import { ReactElement } from "react";
import { PoolStat } from "src/ui/markets/PoolRow/PoolStat";
import { VariableApyStat } from "src/ui/markets/PoolRow/VariableApyStat";
import { useOpenShortRewards } from "src/ui/rewards/hooks/useOpenShortRewards";
import { RewardsTooltipContent } from "src/ui/rewards/RewardsTooltip/RewardsTooltipContent";
import { useYieldSourceRate } from "src/ui/vaults/useYieldSourceRate";
import { useAccount } from "wagmi";

interface YieldMultiplierCtaProps {
  hyperdrive: HyperdriveConfig;
}

export function VariableApyCta({
  hyperdrive,
}: YieldMultiplierCtaProps): ReactElement {
  const { address: account } = useAccount();
  const { vaultRate: yieldSourceRate } = useYieldSourceRate({
    chainId: hyperdrive.chainId,
    hyperdriveAddress: hyperdrive.address,
  });
  const { rewards } = useOpenShortRewards({ hyperdriveConfig: hyperdrive });

  const label = yieldSourceRate
    ? `Variable APY (${yieldSourceRate.ratePeriodDays}d)`
    : "Variable APY";

  return (
    <Link
      to="/market/$chainId/$address"
      params={{
        address: hyperdrive.address,
        chainId: hyperdrive.chainId.toString(),
      }}
      search={{ position: "short" }}
      onClick={(e) => {
        e.stopPropagation();
        window.plausible("positionCtaClick", {
          props: {
            chainId: hyperdrive.chainId,
            poolAddress: hyperdrive.address,
            positionType: "short",
            statName: label,
            statValue: yieldSourceRate?.netVaultRate
              ? fixed(yieldSourceRate.netVaultRate).toString()
              : "",
            connectedWallet: account,
          },
        });
      }}
    >
      <PoolStat
        label={label}
        overlay={
          rewards?.length ? (
            <RewardsTooltipContent
              chainId={hyperdrive.chainId}
              position="openShort"
              hyperdriveAddress={hyperdrive.address}
              baseRate={yieldSourceRate?.vaultRate}
              netRate={yieldSourceRate?.netVaultRate}
            />
          ) : null
        }
        value={
          <VariableApyStat
            hyperdriveAddress={hyperdrive.address}
            chainId={hyperdrive.chainId}
          />
        }
      />
    </Link>
  );
}
