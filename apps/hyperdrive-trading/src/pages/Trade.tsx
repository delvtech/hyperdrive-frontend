import { ReactElement } from "react";
import { useLoaderData } from "react-router-dom";
import { Hyperdrive } from "src/appconfig/types";
import { TradeBody } from "src/ui/trade/TradeBody";
import { TradeSideBar } from "src/ui/trade/TradeSideBar";

export function Trade(): ReactElement {
  // Safe to cast this variable because router configs this page is rendered with a valid market
  const market = useLoaderData() as Hyperdrive;

  return (
    <div className="grid h-full grid-cols-[450px_1fr]">
      {/* Sidebar */}
      <div className="flex h-full shrink-0 flex-col px-8 py-6">
        <TradeSideBar market={market} />
      </div>

      {/* Content column */}
      <div className="flex h-full flex-col overflow-scroll bg-base-100 px-8 py-4">
        <TradeBody hyperdrive={market} />
      </div>
    </div>
  );
}
