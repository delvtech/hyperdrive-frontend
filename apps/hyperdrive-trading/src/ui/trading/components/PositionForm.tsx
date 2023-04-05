import {
  ArrowTrendingDownIcon,
  ArrowTrendingUpIcon,
  CircleStackIcon,
  Cog6ToothIcon,
} from "@heroicons/react/20/solid";
import { ReactElement, useState } from "react";
import { HyperdriveMarket } from "src/config/HyperdriveConfig";
import Button from "src/ui/base/components/Button";
import { LongPositionForm } from "src/ui/trading/components/LongPositionForm";
import { OrderType, PositionType } from "src/ui/trading/types";
import { match } from "ts-pattern";
import { ShortPositionForm } from "./ShortPositionForm";

interface PositionFormProps {
  market: HyperdriveMarket;
}

export function PositionForm({ market }: PositionFormProps): ReactElement {
  const [position, setPosition] = useState<PositionType>("Long");
  const [order, setOrder] = useState<OrderType>("Open");

  return (
    <div className="flex flex-col gap-y-12">
      {/* Header */}
      <div className="flex items-center">
        <h3 className="mr-auto text-xl font-bold text-hyper-blue-100 font-akira">
          Trade
        </h3>
        <div>
          <Cog6ToothIcon className="h-5 stroke-2 stroke-hyper-blue-100" />
        </div>
      </div>

      {/* Trade button group */}
      <div className="space-y-2">
        <div className="flex">
          <Button
            active={position === "Long"}
            className="flex items-center justify-center w-full gap-x-1"
            onClick={() => setPosition("Long")}
          >
            <ArrowTrendingUpIcon className="w-5" />
            <p>Long</p>
          </Button>
          <Button
            active={position === "Short"}
            className="flex items-center justify-center w-full gap-x-1"
            onClick={() => setPosition("Short")}
          >
            <ArrowTrendingDownIcon className="w-5" />
            <p>Short</p>
          </Button>
          <Button
            disabled
            className="flex items-center justify-center w-full gap-x-1"
            onClick={() => setPosition("LP")}
          >
            <CircleStackIcon className="w-4" />

            <p>LP</p>
          </Button>
        </div>

        <div className="flex">
          <Button
            active={order === "Open"}
            className="w-full"
            onClick={() => setOrder("Open")}
          >
            <p>Open</p>
          </Button>
          <Button disabled className="w-full" onClick={() => setOrder("Close")}>
            <p>Close</p>
          </Button>
        </div>
      </div>

      {match(position)
        .with("Long", () => <LongPositionForm market={market} order={order} />)
        .with("Short", () => (
          <ShortPositionForm market={market} order={order} />
        ))
        .with("LP", () => <div></div>)
        .exhaustive()}
    </div>
  );
}
