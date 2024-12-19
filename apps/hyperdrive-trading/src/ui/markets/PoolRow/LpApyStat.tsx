import { appConfig, getHyperdriveConfig } from "@delvtech/hyperdrive-appconfig";
import { ReactNode } from "react";
import { formatRate } from "src/base/formatRate";
import { useLpApy } from "src/ui/hyperdrive/lp/hooks/useLpApy";
import { PercentLabel } from "src/ui/markets/PoolRow/PercentLabel";
import { RewardsTooltip } from "src/ui/rewards/RewardsTooltip";
import { useRewards } from "src/ui/rewards/useRewards";
import { Address } from "viem";

export function LpApyStat({
  hyperdriveAddress,
  chainId,
}: {
  hyperdriveAddress: Address;
  chainId: number;
}): ReactNode {
  const hyperdrive = getHyperdriveConfig({
    hyperdriveAddress: hyperdriveAddress,
    hyperdriveChainId: chainId,
    appConfig,
  });
  const { rewards: appConfigRewards } = useRewards(hyperdrive);
  const { lpApy } = useLpApy({ chainId, hyperdriveAddress });

  // Explicit check against undefined, since we still want to show zero if the
  // LP APY is zero
  const netApyLabel =
    lpApy?.netLpApy !== undefined
      ? formatRate({
          rate: lpApy.netLpApy,
          includePercentSign: false,
        })
      : null;

  if (!appConfigRewards?.length && netApyLabel) {
    return <PercentLabel value={netApyLabel} />;
  }

  return (
    <RewardsTooltip
      chainId={hyperdrive.chainId}
      hyperdriveAddress={hyperdrive.address}
      baseRate={lpApy?.lpApy}
      showMiles
      netRate={lpApy?.netLpApy}
    >
      {netApyLabel ? (
        <>
          <PercentLabel value={netApyLabel} />
          <span className="mx-1">⚡</span>
        </>
      ) : null}
    </RewardsTooltip>
  );
}
