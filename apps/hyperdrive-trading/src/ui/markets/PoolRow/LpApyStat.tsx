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
import { formatRate } from "src/base/formatRate";
import { useLpApy } from "src/ui/hyperdrive/hooks/useLpApy";
import { PercentLabel } from "src/ui/markets/PoolRow/PercentLabel";
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

  const baseApyLabel = lpApy?.lpApy ? formatRate({ rate: lpApy.lpApy }) : null;
  const netApyLabel = lpApy?.netLpApy
    ? formatRate({
        rate: lpApy.netLpApy,
        includePercentSign: false,
      })
    : null;

  if (!appConfigRewards?.length && netApyLabel) {
    return <PercentLabel value={netApyLabel} />;
  }

  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger className="flex items-center gap-1 whitespace-nowrap">
          {netApyLabel ? (
            <>
              <PercentLabel value={netApyLabel} />⚡
            </>
          ) : null}
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
                {" "}
                <ChartBarIcon className="h-4" />
                Base APY
              </div>
              <div className="grid justify-items-end">
                <p className="flex items-center gap-1">
                  {!lpApy?.isNew && lpApy?.lpApy ? (
                    baseApyLabel
                  ) : (
                    <>
                      <SparklesIcon className="h-4" />
                      New
                    </>
                  )}
                </p>
              </div>
            </div>

            {appConfigRewards?.map((reward) => {
              if (reward.type === "info") {
                return (
                  <div
                    key={reward.message}
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
                        alt="Morpho logo"
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
                <div className="flex items-center gap-1">
                  {lpApy?.isNew ? (
                    <div>
                      <SparklesIcon className="h-4" />
                      New
                    </div>
                  ) : (
                    <div>
                      {fixed(lpApy?.netLpApy || 0n).format({
                        percent: true,
                        decimals: 2,
                      })}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
