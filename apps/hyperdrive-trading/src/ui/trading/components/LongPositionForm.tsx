import { ReactElement } from "react";
import { HyperdriveMarket } from "src/config/HyperdriveConfig";
import { OrderType } from "src/ui/hyperdrive/types";
import { OpenLongPositionForm } from "src/ui/trading/components/OpenLongPositionForm";
import { match } from "ts-pattern";
import { CloseLongPositionForm } from "./CloseLongPositionForm";

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
    .with("Close", () => <CloseLongPositionForm market={market} />)
    .exhaustive();
}
