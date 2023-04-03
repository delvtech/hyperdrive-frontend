import { Cog6ToothIcon } from "@heroicons/react/20/solid";
import { ReactElement } from "react";
import { HyperdriveMarket } from "src/config/HyperdriveConfig";
import Button from "src/ui/base/components/Button";
import { LongPositionForm } from "src/ui/trading/components/LongPositionForm";
import { OrderType, PositionType } from "src/ui/trading/types";
import { match } from "ts-pattern";

interface PositionFormProps {
  market: HyperdriveMarket;
  position: PositionType;
  order: OrderType;
}

export function PositionForm({
  position,
  order,
  market,
}: PositionFormProps): ReactElement {
  return (
    <div className="flex flex-col p-8 border-b border-hyper-blue-300 gap-y-12">
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
            className="w-full"
            onClick={() => {}}
          >
            <p>Long</p>
          </Button>
          <Button disabled className="w-full" onClick={() => {}}>
            <p>Short</p>
          </Button>
          <Button disabled className="w-full" onClick={() => {}}>
            <p>LP</p>
          </Button>
        </div>

        <div className="flex">
          <Button
            active={order === "Open"}
            className="w-full"
            onClick={() => {}}
          >
            <p>Open</p>
          </Button>
          <Button disabled className="w-full" onClick={() => {}}>
            <p>Close</p>
          </Button>
        </div>
      </div>

      {match(position)
        .with("Long", () => <LongPositionForm market={market} order={order} />)
        .with("Short", () => <div></div>)
        .with("LP", () => <div></div>)
        .exhaustive()}
    </div>
  );
}
