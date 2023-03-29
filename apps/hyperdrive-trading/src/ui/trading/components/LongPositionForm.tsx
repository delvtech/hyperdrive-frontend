import { ReactElement } from "react";
import Button from "src/ui/base/components/Button";
import { TokenInput } from "src/ui/token/components/TokenInput";
import { PositionOverviewWell } from "src/ui/trading/components/PositionOverviewWell";
import { OrderType } from "src/ui/trading/types";
import { match } from "ts-pattern";

interface LongPositionFormProps {
  order: OrderType;
}

export function LongPositionForm({
  order,
}: LongPositionFormProps): ReactElement {
  return match(order)
    .with("Open", () => (
      <>
        {/* You Pay Section */}
        <div className="space-y-4 text-hyper-blue-100 font-rubik">
          <h3 className="text-xl text-hyper-blue-100 font-quantico">You Pay</h3>

          <TokenInput />
        </div>

        {/* New Position Section */}
        <div className="space-y-4 text-hyper-blue-100 font-rubik">
          <h3 className="text-xl font-quantico">New Position</h3>
          <PositionOverviewWell />
        </div>

        {/* Order Action Button */}
        <Button
          variant="Trade"
          className="w-full px-0 py-4 text-xl"
          onClick={() => {}}
        >
          Open Long
        </Button>
      </>
    ))
    .with("Close", () => <></>)
    .exhaustive();
}
