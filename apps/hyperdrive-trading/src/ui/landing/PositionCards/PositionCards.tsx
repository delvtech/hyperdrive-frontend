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
          title={
            <span>
              Fixed rates → go <span className="text-primary">Long</span>
            </span>
          }
          subtitle="Simple, predictable, fixed-rate returns."
          icon={<ClockIcon className="h-4 shrink-0" />}
          checklist={[
            "Principal-protected profits",
            "Minimal risk and maintenance",
            "Exit at any time",
          ]}
        />
        <PositionCard
          title={
            <span>
              Variable rates → go <span className="text-primary">Short</span>
            </span>
          }
          subtitle="Get multiplied exposure to the most trusted variable rates in DeFi."
          icon={<BoltIcon className="h-4 shrink-0" />}
          checklist={[
            "Speculate on rates",
            "Reliable & sustainable yield sources",
            "Exit at any time",
          ]}
        />
        <PositionCard
          title="Add Liquidity"
          subtitle="Earn market-making fees plus yield on idle capital."
          icon={<SquaresPlusIcon className="h-4 shrink-0" />}
          checklist={[
            "Provide single asset liquidity",
            "Capital efficient design",
            "No impermanent loss",
          ]}
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
