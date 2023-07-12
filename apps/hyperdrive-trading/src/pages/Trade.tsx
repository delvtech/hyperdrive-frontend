import { ReactElement } from "react";
import { useLoaderData } from "react-router-dom";
import { Hyperdrive } from "src/appconfig/types";
import { TradeBody } from "src/ui/trade/TradeBody/TradeBody";

export function Trade(): ReactElement {
  // Safe to cast this variable because router configs this page is rendered with a valid market
  const market = useLoaderData() as Hyperdrive;

  return (
    <div className="flex h-full justify-center bg-base-100 py-8 px-4">
      <TradeBody hyperdrive={market} />
    </div>
  );
}
