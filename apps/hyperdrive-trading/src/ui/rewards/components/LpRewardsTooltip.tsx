import { SparklesIcon } from "@heroicons/react/16/solid";
import * as Tooltip from "@radix-ui/react-tooltip";
import { PropsWithChildren, ReactNode } from "react";
import { useLpRewards } from "src/ui/rewards/useRewards";
import { Address } from "viem";

interface LpRewardsTooltipProps extends PropsWithChildren {
  hyperdriveAddress: Address;
}

export function LpRewardsTooltip(props: LpRewardsTooltipProps): ReactNode {
  const rewards = useLpRewards(props.hyperdriveAddress);

  if (!rewards) {
    return props.children;
  }

  return rewards.length > 0 ? (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger className="flex items-center gap-1 whitespace-nowrap">
          {props.children}
          <SparklesIcon className="size-6 fill-sky-blue" />
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className="h-fit w-64 rounded-lg bg-base-200"
            sideOffset={5}
            collisionPadding={12}
          >
            <div className="p- flex justify-between border-b border-neutral-content/30 p-3">
              <p className="text-lg">Rewards</p>
            </div>

            {rewards?.map((reward) => (
              <div
                key={reward.key}
                className="flex items-center justify-between border-b border-neutral-content/30 p-3 [&:nth-last-child(2)]:border-none"
              >
                {reward.name}
                {reward.amount}
              </div>
            ))}
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  ) : (
    props.children
  );
}
