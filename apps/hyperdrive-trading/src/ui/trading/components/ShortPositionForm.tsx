import { ReactElement } from "react";
import { Hyperdrive } from "src/appconfig/types";
import { OrderType } from "src/ui/hyperdrive/types";
import { OpenShortPositionForm } from "src/ui/trading/components/OpenShortPositionForm";
import { match } from "ts-pattern";
import { CloseShortPositionForm } from "./CloseShortPositionForm";

interface ShortPositionFormProps {
  market: Hyperdrive;
  order: OrderType;
}

export function ShortPositionForm({
  order,
  market,
}: ShortPositionFormProps): ReactElement {
  return match(order)
    .with("Open", () => <OpenShortPositionForm market={market} />)
    .with("Close", () => <CloseShortPositionForm market={market} />)
    .exhaustive();
}
