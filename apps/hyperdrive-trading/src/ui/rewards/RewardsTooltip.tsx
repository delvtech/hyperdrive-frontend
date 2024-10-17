import {
  appConfig,
  findHyperdriveConfig,
} from "@delvtech/hyperdrive-appconfig";
import { ChartBarIcon, SparklesIcon } from "@heroicons/react/16/solid";
import * as Tooltip from "@radix-ui/react-tooltip";
import { PropsWithChildren, ReactNode } from "react";
import { assertNever } from "src/base/assertNever";
import { formatRate } from "src/base/formatRate";
import { useLpApy } from "src/ui/hyperdrive/hooks/useLpApy";
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

  const { lpApy } = useLpApy({ chainId, hyperdriveAddress });

  if (!rewards || (rewards && rewards.length === 0)) {
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
            className="z-20 h-fit w-64 rounded-box bg-base-200 px-3 py-2 shadow-2xl"
            sideOffset={5}
            collisionPadding={12}
          >
            <div className="flex justify-between border-b border-neutral-content/30 p-3">
              <p className="gradient-text text-lg">Rewards</p>
            </div>

            {rewards?.map((reward) => {
              switch (reward.id) {
                case "MorphoFlatRate":
                  return (
                    <div
                      key={reward.id}
                      className="flex items-center justify-between border-b border-neutral-content/30 p-3 [&:nth-last-child(2)]:border-none"
                    >
                      <div className="flex items-center gap-1">
                        <img
                          src={appConfig.protocols.morpho.iconUrl}
                          alt="Morpho logo"
                          className="h-4"
                        />
                        {reward.name}
                      </div>

                      <div className="grid justify-items-end">
                        <p className="flex items-center gap-1">
                          +{reward.amount}
                        </p>
                        <p className="text-2xs text-neutral-content">
                          per $1000 / yr
                        </p>
                      </div>
                    </div>
                  );

                case "MorphoVault":
                  return (
                    <>
                      <div
                        key={reward.id}
                        className="flex items-center justify-between border-b border-neutral-content/30 p-3 [&:nth-last-child(2)]:border-none"
                      >
                        <div className="flex items-center gap-1">
                          <img
                            src={reward.iconUrl}
                            alt={`${reward.name} logo`}
                            className="h-4"
                          />
                          {reward.name}
                        </div>

                        <div className="grid justify-items-end">
                          <p className="flex items-center gap-1">
                            +{reward.amount}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between border-b border-neutral-content/30 p-3 [&:nth-last-child(2)]:border-none">
                        <div className="flex items-center gap-1">
                          <ChartBarIcon className="h-4" />
                          Rate
                        </div>

                        <div className="grid justify-items-end">
                          <p className="flex items-center gap-1">
                            {lpApy?.isNew
                              ? "✨New✨"
                              : `+ ${formatRate(lpApy?.lpApy || 0n, 18, false)} %`}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between border-b border-neutral-content/30 p-3 [&:nth-last-child(2)]:border-none">
                        <div className="flex items-center gap-1">
                          <SparklesIcon className="h-4" />
                          Net APY
                        </div>

                        <div className="grid justify-items-end">
                          <p className="flex items-center gap-1">
                            +
                            {formatRate(
                              (lpApy?.lpApy || 0n) +
                                BigInt(
                                  (parseFloat(reward.amount) * 10 ** 18) / 100,
                                ),
                              18,
                              false,
                            )}
                            %
                          </p>
                        </div>
                      </div>
                    </>
                  );
                case "LineaLXPL":
                  return (
                    <div
                      key={reward.id}
                      className="flex flex-col items-start justify-start gap-2 border-b border-neutral-content/30 p-3 [&:nth-last-child(2)]:border-none"
                    >
                      <div className="flex items-center gap-4">
                        <img
                          src={appConfig.chains[hyperdrive.chainId].iconUrl}
                          alt="KelpDAO logo"
                          className="h-8"
                        />
                        <p>This pool is eligible for LXP-L rewards.</p>
                      </div>
                    </div>
                  );
                default:
                  assertNever(reward.id);
              }
            })}
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
