import { CloseShortPositionForm } from "components/PositionForms/Short/CloseShortPositionForm";
import { OpenShortPositionForm } from "components/PositionForms/Short/OpenShortPositionForm";
import { Market, OrderType } from "hyperdrive/types";
import { ReactElement } from "react";
import { match } from "ts-pattern";

interface ShortPositionFormProps {
  order: OrderType;
  market: Market;
}

export function ShortPositionForm({
  order,
  market,
}: ShortPositionFormProps): ReactElement {
  return match(order)
    .with("OPEN", () => <OpenShortPositionForm market={market} />)
    .with("CLOSE", () => <CloseShortPositionForm market={market} />)
    .exhaustive();
}
