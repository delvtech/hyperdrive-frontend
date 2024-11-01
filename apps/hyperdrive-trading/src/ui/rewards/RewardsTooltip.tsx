import { fixed } from "@delvtech/fixed-point-wasm";
import {
  appConfig,
  findHyperdriveConfig,
  findToken,
} from "@delvtech/hyperdrive-appconfig";
import { SparklesIcon } from "@heroicons/react/16/solid";
import * as Tooltip from "@radix-ui/react-tooltip";
import { PropsWithChildren, ReactNode } from "react";
import { formatRate } from "src/base/formatRate";
import { useLpApy } from "src/ui/hyperdrive/hooks/useLpApy";
import { useAppConfigRewards } from "src/ui/rewards/useAppConfigRewards";
import { useRewards } from "src/ui/rewards/useRewards";
import { Address } from "viem";

export function RewardsTooltip({
  hyperdriveAddress,
  chainId,
  children,
}: PropsWithChildren<{
  hyperdriveAddress: Address;
  chainId: number;
}>): ReactNode {
  const hyperdrive = findHyperdriveConfig({
    hyperdrives: appConfig.hyperdrives,
    hyperdriveAddress: hyperdriveAddress,
    hyperdriveChainId: chainId,
  });
  const rewards = useRewards(hyperdrive);
  const { rewards: appConfigRewards } = useAppConfigRewards(hyperdrive);

  const { lpApy } = useLpApy({ chainId, hyperdriveAddress });

  let netApy: bigint = lpApy?.lpApy || 0n;

  rewards?.forEach((reward) => {
    if (reward.id === "MorphoVaultAllocation" || reward.id === "MorphoVault") {
      netApy += BigInt((parseFloat(reward.amount) * 1e18) / 100);
    }
  });

  if (!rewards?.length && !appConfigRewards?.length) {
    return children;
  }

  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger className="flex items-center gap-1 whitespace-nowrap">
          {children}⚡
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className="z-20 h-fit w-72 rounded-box bg-base-200 px-3 py-2 shadow-2xl"
            sideOffset={5}
            collisionPadding={12}
          >
            <div className="flex justify-between border-b border-neutral-content/30 p-3">
              <p className="gradient-text text-lg">Rewards</p>
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
                const token = findToken({
                  tokenAddress: reward.tokenAddress,
                  chainId: reward.chainId,
                  tokens: appConfig.tokens,
                });

                if (!token) {
                  return null;
                }
                return (
                  <>
                    <div
                      key={token.address}
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
                  </>
                );
              }

              if (reward.type === "nonTransferableToken") {
                const token = findToken({
                  tokenAddress: reward.tokenAddress,
                  chainId: reward.chainId,
                  tokens: appConfig.tokens,
                });
                if (!token) {
                  return null;
                }
                return (
                  <div
                    key={token?.address}
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
                <p className="flex items-center gap-1">
                  +{formatRate(netApy, 18, false)}%
                </p>
              </div>
            </div>
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
