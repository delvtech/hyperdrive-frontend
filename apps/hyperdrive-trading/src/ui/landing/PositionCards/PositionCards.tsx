import {
  BoltIcon,
  ClockIcon,
  SquaresPlusIcon,
} from "@heroicons/react/24/outline";
import type { ReactElement } from "react";
import { PositionCard } from "src/ui/landing/PositionCards/PositionCard";

export function PositionCards(): ReactElement {
  return (
    <div className="flex flex-col items-center justify-evenly gap-10">
      <h3 className="text-center">How it works</h3>
      <div className="flex flex-wrap justify-center gap-14">
        <PositionCard
          title={
            <span>
              Fixed Rates → Go <span className="text-primary">Long</span>
            </span>
          }
          subtitle="Simple, predictable, fixed-rate returns."
          icon={<ClockIcon className="h-4 shrink-0" />}
          checklist={[
            "Principal-protected profits at maturity",
            "Minimal risk and maintenance",
            "Exit at any time",
          ]}
        />
        <PositionCard
          title={
            <span>
              Variable Rates → Go <span className="text-primary">Short</span>
            </span>
          }
          subtitle="Get multiplied exposure to reputable variable rates in DeFi."
          icon={<BoltIcon className="h-4 shrink-0" />}
          checklist={[
            "Speculate on rates",
            "Reliable & sustainable yield sources",
            "Exit at any time",
          ]}
        />
        <PositionCard
          title={
            <span>
              Earn Yield → Add <span className="text-primary">Liquidity</span>
            </span>
          }
          subtitle="Earn market-making fees plus yield on idle capital."
          icon={<SquaresPlusIcon className="h-4 shrink-0" />}
          checklist={[
            "Provide single asset liquidity",
            "Capital efficient design",
            "No impermanent loss",
          ]}
        />
      </div>
    </div>
  );
}
