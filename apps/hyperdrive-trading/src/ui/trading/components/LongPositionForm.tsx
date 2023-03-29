import { ReactElement, useState } from "react";
import { HyperdriveMarket } from "src/config/HyperdriveConfig";
import Button from "src/ui/base/components/Button";
import { TokenInput } from "src/ui/token/components/TokenInput";
import { PositionOverviewWell } from "src/ui/trading/components/PositionOverviewWell";
import { OrderType } from "src/ui/trading/types";
import { match } from "ts-pattern";

interface LongPositionFormProps {
  market: HyperdriveMarket;
  order: OrderType;
}

export function LongPositionForm({
  order,
  market,
}: LongPositionFormProps): ReactElement {
  return match(order)
    .with("Open", () => <OpenLongPositionForm market={market} />)
    .with("Close", () => <></>)
    .exhaustive();
}

interface OpenLongPositionFormProps {
  market: HyperdriveMarket;
}

function OpenLongPositionForm({ market }: OpenLongPositionFormProps) {
  const [baseTokenAmount, setBaseTokenAmount] = useState("");

  // TODO: stubbed for now until I have correct token address w a balance
  const baseTokenBalance = "100000";

  return (
    <>
      {/* You Pay Section */}
      <div className="space-y-4 text-hyper-blue-100 font-rubik">
        <h3 className="text-xl text-hyper-blue-100 font-quantico">You Pay</h3>
        <TokenInput
          token={market.baseToken}
          value={baseTokenAmount}
          maxValue={baseTokenBalance}
          onChange={(newAmount) => setBaseTokenAmount(newAmount)}
        />
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
  );
}
