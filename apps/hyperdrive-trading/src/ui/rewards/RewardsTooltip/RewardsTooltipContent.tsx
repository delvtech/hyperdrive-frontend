import { fixed, parseFixed } from "@delvtech/fixed-point-wasm";
import {
  appConfig,
  getHyperdriveConfig,
  getToken,
} from "@delvtech/hyperdrive-appconfig";
import { SparklesIcon } from "@heroicons/react/16/solid";
import { ChartBarIcon } from "@heroicons/react/24/solid";
import { ReactElement } from "react";
import { assertNever } from "src/base/assertNever";
import { calculateMarketYieldMultiplier } from "src/hyperdrive/calculateMarketYieldMultiplier";
import { useIsNewPool } from "src/ui/hyperdrive/hooks/useIsNewPool";
import { useCurrentLongPrice } from "src/ui/hyperdrive/longs/hooks/useCurrentLongPrice";
import { HyperVueMilesIconUrl } from "src/ui/rewards/HyperVueMilesIconUrl";
import { useRewards } from "src/ui/rewards/useRewards";
import { Address } from "viem";

export function RewardsTooltipContent({
  hyperdriveAddress,
  chainId,
  baseRate,
  netRate,
  showMiles,
}: {
  hyperdriveAddress: Address;
  chainId: number;
  baseRate: bigint | undefined;
  netRate: bigint | undefined;
  /**
   * @deprecated This is a temporary prop that will be removed once appconfig
   * changes have been made to move rewards onto HyperdriveConfig based on
   * position type.
   */
  showMiles?: boolean;
}): ReactElement {
  const hyperdrive = getHyperdriveConfig({
    hyperdriveAddress: hyperdriveAddress,
    hyperdriveChainId: chainId,
    appConfig,
  });
  const { rewards: appConfigRewards } = useRewards(hyperdrive);
  const isNewPool = useIsNewPool({ hyperdrive });
  const { longPrice, longPriceStatus } = useCurrentLongPrice({
    chainId: hyperdrive.chainId,
    hyperdriveAddress: hyperdrive.address,
  });

  const multiplier =
    longPriceStatus === "success" && longPrice
      ? calculateMarketYieldMultiplier(longPrice)
      : null;
  return (
    <>
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
              // Explicit check against undefined, since we still want to
              // show zero if the rate is zero
              if (baseRate !== undefined) {
                return fixed(baseRate).format({
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
        switch (reward.type) {
          case "info":
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
          case "apy": {
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
          case "tokenAmount": {
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

          case "pointMultiplier":
            return (
              <div
                key={reward.pointTokenLabel}
                className="flex items-center justify-between border-b border-neutral-content/30 p-3 [&:nth-last-child(2)]:border-none"
              >
                <div className="flex items-center gap-1">
                  <img
                    src={reward.iconUrl}
                    alt={`${reward.pointTokenLabel} logo`}
                    className="h-4"
                  />
                  {reward.pointTokenLabel}
                </div>

                <div className="grid justify-items-end">
                  <p className="flex items-center gap-1">
                    {multiplier
                      ?.mul(parseFixed(reward.pointMultiplier))
                      .format({ decimals: 0 })}
                    x
                  </p>
                </div>
              </div>
            );

          default:
            assertNever(reward);
        }
      })}

      <div className="flex items-center justify-between border-b border-neutral-content/30 p-3 [&:nth-last-child(2)]:border-none">
        <div className="flex items-center gap-1">
          <SparklesIcon className="h-4" />
          Net APY
        </div>

        <div className="grid justify-items-end">
          <p className="flex items-center gap-1">
            {fixed(netRate || 0n).format({
              percent: true,
              decimals: 2,
            })}
          </p>
        </div>
      </div>
      {showMiles ? (
        <div className="flex flex-col items-start justify-start gap-2 border-b border-neutral-content/30 p-3 [&:nth-last-child(2)]:border-none">
          <div className="flex items-center gap-4">
            <img
              src={HyperVueMilesIconUrl}
              alt={`HyperVue Miles`}
              className="h-6 rounded-full"
            />
            <p className="">Earns 1 Mile per day for every $1 supplied</p>
          </div>
        </div>
      ) : null}
    </>
  );
}
