import assertNever from "assert-never";
import { ReactElement } from "react";
import { Hyperdrive } from "src/appconfig/types";
import { OrderType } from "src/ui/hyperdrive/types";
import { OpenShortPositionForm } from "src/ui/trading/OpenShortPositionForm";
import { CloseShortPositionForm } from "./CloseShortPositionForm";

interface ShortPositionFormProps {
  market: Hyperdrive;
  order: OrderType;
}

export function ShortPositionForm({
  order,
  market,
}: ShortPositionFormProps): ReactElement {
  switch (order) {
    case "Open":
      return <OpenShortPositionForm market={market} />;
    case "Close":
      return <CloseShortPositionForm market={market} />;
    default:
      assertNever(order);
  }
}
