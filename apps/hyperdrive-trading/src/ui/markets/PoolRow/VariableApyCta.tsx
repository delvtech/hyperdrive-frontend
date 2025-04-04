import { fixed } from "@delvtech/fixed-point-wasm";
import { HyperdriveConfig } from "@delvtech/hyperdrive-appconfig";
import { Link } from "@tanstack/react-router";
import { ReactElement } from "react";
import { calculateMarketYieldMultiplier } from "src/hyperdrive/calculateMarketYieldMultiplier";
import { useFeatureFlag } from "src/ui/base/featureFlags/featureFlags";
import { useCurrentLongPrice } from "src/ui/hyperdrive/longs/hooks/useCurrentLongPrice";
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
  const { isFlagEnabled: isNewDesign } = useFeatureFlag("new-design");
  const { vaultRate: yieldSourceRate } = useYieldSourceRate({
    chainId: hyperdrive.chainId,
    hyperdriveAddress: hyperdrive.address,
  });

  const { rewards } = useOpenShortRewards({ hyperdriveConfig: hyperdrive });

  const { longPrice, longPriceStatus } = useCurrentLongPrice({
    chainId: hyperdrive.chainId,
    hyperdriveAddress: hyperdrive.address,
  });
  const multiplier =
    longPriceStatus === "success" && longPrice
      ? calculateMarketYieldMultiplier(longPrice)
      : undefined;

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
        action={
          <div className="flex flex-col gap-2">
            {isNewDesign ? null : (
              <Link
                to="/market/$chainId/$address"
                params={{
                  address: hyperdrive.address,
                  chainId: hyperdrive.chainId.toString(),
                }}
                search={{ position: "short" }}
                className="daisy-btn h-10 min-h-10 w-full rounded-full bg-gray-500 sm:daisy-btn-sm hover:bg-gray-400 sm:h-8 sm:bg-gray-600 sm:hover:bg-gray-500 md:w-28"
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
                Open Short
              </Link>
            )}
            <span className="gradient-text text-left font-inter text-sm font-medium">{`${multiplier?.format({ decimals: 0 })}x yield exposure`}</span>
          </div>
        }
      />
    </Link>
  );
}
