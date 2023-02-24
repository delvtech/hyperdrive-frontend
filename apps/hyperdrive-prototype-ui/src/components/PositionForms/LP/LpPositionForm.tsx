import { CloseLpPositionForm } from "components/PositionForms/LP/CloseLpPositionForm";
import { OpenLpPositionForm } from "components/PositionForms/LP/OpenLpPositionForm";
import { Market, OrderType } from "hyperdrive/types";
import { ReactElement } from "react";
import { match } from "ts-pattern";

interface LpPositionFormProps {
  order: OrderType;
  market: Market;
}

export function LpPositionForm({
  order,
  market,
}: LpPositionFormProps): ReactElement {
  return match(order)
    .with("OPEN", () => <OpenLpPositionForm market={market} />)
    .with("CLOSE", () => <CloseLpPositionForm market={market} />)
    .exhaustive();
}
