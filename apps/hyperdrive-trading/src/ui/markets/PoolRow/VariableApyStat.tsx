import { fixed } from "@delvtech/fixed-point-wasm";
import {
  appConfig,
  getHyperdriveConfig,
  getToken,
} from "@delvtech/hyperdrive-appconfig";
import { SparklesIcon } from "@heroicons/react/16/solid";
import { ChartBarIcon } from "@heroicons/react/24/solid";
import * as Tooltip from "@radix-ui/react-tooltip";
import { ReactNode } from "react";
import Skeleton from "react-loading-skeleton";
import { formatRate } from "src/base/formatRate";
import { calculateMarketYieldMultiplier } from "src/hyperdrive/calculateMarketYieldMultiplier";
import { GradientBadge } from "src/ui/base/components/GradientBadge";
import { useIsNewPool } from "src/ui/hyperdrive/hooks/useIsNewPool";
import { useCurrentLongPrice } from "src/ui/hyperdrive/longs/hooks/useCurrentLongPrice";
import { PercentLabel } from "src/ui/markets/PoolRow/PercentLabel";
import { useRewards } from "src/ui/rewards/useRewards";
import { useYieldSourceRate } from "src/ui/vaults/useYieldSourceRate";
import { Address } from "viem";
export function VariableApyStat({
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
  const { vaultRate: yieldSourceRate, vaultRateStatus: yieldSourceRateStatus } =
    useYieldSourceRate({
      chainId,
      hyperdriveAddress,
    });
  const isNewPool = useIsNewPool({ hyperdrive });
  const { longPrice, longPriceStatus } = useCurrentLongPrice({
    chainId: hyperdrive.chainId,
    hyperdriveAddress: hyperdrive.address,
  });

  const multiplierLabel =
    longPriceStatus === "success" && longPrice
      ? `${calculateMarketYieldMultiplier(longPrice).format({ decimals: 1 })}x`
      : undefined;

  if (!appConfigRewards?.length && multiplierLabel && yieldSourceRate) {
    return (
      <div className="flex items-center gap-2 whitespace-nowrap">
        <PercentLabel
          value={formatRate({
            rate: yieldSourceRate.netVaultRate,
            includePercentSign: false,
          })}
          className="text-h4"
        />
        <GradientBadge>{multiplierLabel}</GradientBadge>
      </div>
    );
  }

  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger className="flex items-center gap-2 whitespace-nowrap">
          {yieldSourceRateStatus === "success" ? (
            <PercentLabel
              value={formatRate({
                rate: yieldSourceRate?.netVaultRate ?? 0n,
                includePercentSign: false,
              })}
              className="text-h4"
            />
          ) : (
            <Skeleton width={100} />
          )}
          <GradientBadge>{multiplierLabel}</GradientBadge>⚡
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className="z-20 h-fit w-72 rounded-box bg-base-200 px-3 py-2 shadow-2xl"
            sideOffset={5}
            collisionPadding={12}
          >
            <div className="flex justify-between border-b border-neutral-content/30 p-3">
              <p className="gradient-text text-lg">Rate & Rewards</p>
            </div>
            <div className="flex items-center justify-between border-b border-neutral-content/30 p-3">
              <div className="flex items-center gap-1">
                <ChartBarIcon className="h-4" />
                Base APY
              </div>
              <div className="grid justify-items-end">
                <p className="flex items-center gap-1">
                  {(() => {
                    if (isNewPool) {
                      return (
                        <>
                          <SparklesIcon className="h-4" />
                          New
                        </>
                      );
                    }
                    if (yieldSourceRate) {
                      return fixed(yieldSourceRate.vaultRate).format({
                        percent: true,
                        decimals: 2,
                      });
                    }
                    return "-";
                  })()}
                </p>
              </div>
            </div>

            {appConfigRewards?.map((reward) => {
              if (reward.type === "info") {
                return (
                  <div
                    key={reward.iconUrl}
                    className="flex flex-col items-start justify-start gap-2 border-b border-neutral-content/30 p-3 [&:nth-last-child(2)]:border-none"
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={reward.iconUrl}
                        alt={`${reward.message}`}
                        className="h-8"
                      />
                      <p>{reward.message}</p>
                    </div>
                  </div>
                );
              }
              if (reward.type === "transferableToken") {
                // safe to cast because we assume all rewards tokens are
                // available in appConfig
                const token = getToken({
                  tokenAddress: reward.tokenAddress,
                  chainId: reward.chainId,
                  appConfig,
                })!;

                return (
                  <div
                    key={reward.tokenAddress}
                    className="flex items-center justify-between border-b border-neutral-content/30 p-3 [&:nth-last-child(2)]:border-none"
                  >
                    <div className="flex items-center gap-1">
                      <img
                        src={token.iconUrl}
                        alt={`${token.name} logo`}
                        className="h-4"
                      />
                      {token.name}
                    </div>

                    <div className="grid justify-items-end">
                      <p className="flex items-center gap-1">
                        +
                        {fixed(reward.apy).format({
                          percent: true,
                          decimals: 2,
                        })}
                      </p>
                    </div>
                  </div>
                );
              }

              if (reward.type === "nonTransferableToken") {
                // safe to cast because we assume all rewards tokens are
                // available in appConfig
                const token = getToken({
                  tokenAddress: reward.tokenAddress,
                  chainId: reward.chainId,
                  appConfig,
                })!;
                return (
                  <div
                    key={reward.tokenAddress}
                    className="flex items-center justify-between border-b border-neutral-content/30 p-3 [&:nth-last-child(2)]:border-none"
                  >
                    <div className="flex items-center gap-1">
                      <img
                        src={appConfig.protocols.morpho.iconUrl}
                        className="h-4"
                      />
                      {token.name}
                    </div>

                    <div className="grid justify-items-end">
                      <p className="flex items-center gap-1">
                        +
                        {fixed(reward.tokensPerThousandUsd).format({
                          decimals: token.places,
                        })}
                      </p>
                      <p className="text-2xs text-neutral-content">
                        per $1000 / yr
                      </p>
                    </div>
                  </div>
                );
              }
            })}

            <div className="flex items-center justify-between border-b border-neutral-content/30 p-3 [&:nth-last-child(2)]:border-none">
              <div className="flex items-center gap-1">
                <SparklesIcon className="h-4" />
                Net APY
              </div>

              <div className="grid justify-items-end">
                <p className="flex items-center gap-1">
                  {fixed(yieldSourceRate?.netVaultRate || 0n).format({
                    percent: true,
                    decimals: 2,
                  })}
                </p>
              </div>
            </div>
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
