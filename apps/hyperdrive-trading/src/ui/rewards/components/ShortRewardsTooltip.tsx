import { SparklesIcon } from "@heroicons/react/16/solid";
import * as Tooltip from "@radix-ui/react-tooltip";
import { PropsWithChildren, ReactElement } from "react";
import { useShortRewards } from "src/ui/rewards/useRewards";
import { Address } from "viem";

interface ShortRewardsTooltipProps extends PropsWithChildren {
  hyperdriveAddress: Address;
}

export function ShortRewardsTooltip(
  props: ShortRewardsTooltipProps
): ReactElement {
  const rewards = useShortRewards(props.hyperdriveAddress);

  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger className="flex items-center gap-1 whitespace-nowrap">
          {props.children}
          <SparklesIcon className="size-6 fill-sky-blue" />
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            avoidCollisions
            className="h-fit w-64 rounded-lg bg-base-200"
            sideOffset={5}
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
  );
}
