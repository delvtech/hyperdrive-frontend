import { findHyperdriveConfig } from "@hyperdrive/appconfig";
import * as Tooltip from "@radix-ui/react-tooltip";
import { PropsWithChildren, ReactNode } from "react";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { useRewards } from "src/ui/rewards/useRewards";
import { Address } from "viem";

interface RewardsTooltipProps extends PropsWithChildren {
  hyperdriveAddress: Address;
  positionType: "lp" | "short";
}

export function RewardsTooltip(props: RewardsTooltipProps): ReactNode {
  const { hyperdrives } = useAppConfig();
  const hyperdrive = findHyperdriveConfig({
    hyperdrives,
    hyperdriveAddress: props.hyperdriveAddress,
  });

  const rewards = useRewards(hyperdrive, props.positionType);

  if (!rewards) {
    return props.children;
  }

  return rewards.length > 0 ? (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger className="flex items-center gap-1 whitespace-nowrap">
          {props.children}✨
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className="h-fit w-64 rounded-box bg-base-200 px-3 py-2 shadow-2xl"
            sideOffset={5}
            collisionPadding={12}
          >
            <div className="p- flex justify-between border-b border-neutral-content/30 p-3">
              <p className="gradient-text text-lg">Rewards</p>
            </div>

            {rewards?.map((reward) => {
              if (reward.key === "MorphoFlatRate") {
                return (
                  <div
                    key={reward.key}
                    className="flex items-center justify-between border-b border-neutral-content/30 p-3 [&:nth-last-child(2)]:border-none"
                  >
                    <div className="flex items-center gap-1">
                      <img
                        src="https://cdn.morpho.org/assets/logos/morpho.svg"
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
              }
            })}
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  ) : (
    props.children
  );
}
