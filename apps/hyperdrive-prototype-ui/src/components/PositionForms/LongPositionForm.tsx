import { Market, OrderType } from "hyperdrive/types";
import { match } from "ts-pattern";
import { CloseLongPositionForm } from "./Long/CloseLongPosititionForm";
import { OpenLongPositionForm } from "./Long/OpenLongPositionForm";

interface LongPositionFormProps {
  order: OrderType;
  market: Market;
}

export function LongPositionForm({ order, market }: LongPositionFormProps) {
  return match(order)
    .with("OPEN", () => <OpenLongPositionForm market={market} />)
    .with("CLOSE", () => <CloseLongPositionForm market={market} />)
    .exhaustive();
}
