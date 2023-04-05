import { ReactElement } from "react";
import { HyperdriveMarket } from "src/config/HyperdriveConfig";
import { OpenShortPositionForm } from "src/ui/trading/components/OpenShortPositionForm";
import { OrderType } from "src/ui/trading/types";
import { match } from "ts-pattern";

interface ShortPositionFormProps {
  market: HyperdriveMarket;
  order: OrderType;
}

export function ShortPositionForm({
  order,
  market,
}: ShortPositionFormProps): ReactElement {
  return match(order)
    .with("Open", () => <OpenShortPositionForm market={market} />)
    .with("Close", () => <></>)
    .exhaustive();
}
