import { Market, OrderType } from "hyperdrive/types";
import { ReactElement } from "react";
import { match } from "ts-pattern";
import { CloseLongPositionForm } from "./Long/CloseLongPosititionForm";
import { OpenLongPositionForm } from "./Long/OpenLongPositionForm";

interface LongPositionFormProps {
  order: OrderType;
  market: Market;
}

export function LongPositionForm({
  order,
  market,
}: LongPositionFormProps): ReactElement {
  return match(order)
    .with("OPEN", () => <OpenLongPositionForm market={market} />)
    .with("CLOSE", () => <CloseLongPositionForm market={market} />)
    .exhaustive();
}
