import {
  BoltIcon,
  ChevronRightIcon,
  ClockIcon,
  SquaresPlusIcon,
} from "@heroicons/react/24/outline";
import { ReactElement } from "react";
import { PositionCard } from "src/ui/landing/PositionCards/PositionCard";

export function PositionCards(): ReactElement {
  return (
    <div className="flex max-w-7xl flex-col items-center justify-evenly gap-10">
      <div className="flex flex-wrap justify-center gap-16 ">
        <PositionCard
          title="Long"
          subtitle="Go long fixed rates and earn passive yield on your favourite assets."
          icon={<ClockIcon className="h-4 shrink-0" />}
          checklist={[
            "Fixed rate included in the price",
            "Minimal risk and maintenance",
            "Redeemable before term ends",
          ]}
        />
        <PositionCard
          title="Short"
          subtitle="Profit when the price of hy-asset drops, maximize exposure to the yield source."
          icon={<BoltIcon className="h-4 shrink-0" />}
          checklist={[
            `Fixed rate up, hy-asset price down`,
            "Maximize exposure to yield source",
            "Redeemable before term ends",
          ]}
        />
        <PositionCard
          title="Add Liquidity"
          subtitle="Take the other side of every Long and Short. Earn fees and the
                  yield source rate."
          icon={<SquaresPlusIcon className="h-4 shrink-0" />}
          checklist={[
            `Single-sided deposit with hy-asset`,
            "Idle liquidity earns yield source rate",
            "No terms or manual LP rollovers",
          ]}
          emphasized
        />
      </div>
      <a
        href={"/markets"}
        className="daisy-btn daisy-btn-circle daisy-btn-primary daisy-btn-md mt-8 w-60 justify-between gap-0 px-4"
      >
        <span className="ml-14">View Markets</span>
        <ChevronRightIcon className="-left-8 h-4" />
      </a>
    </div>
  );
}
