import { FeaturedMarkets } from "src/ui/markets/components/FeaturedMarkets";
import { ProtocolStatsBar } from "src/protocol/components/ProtocolStatsBar";
import { ReactElement } from "react";
import { MarketsTable } from "src/ui/markets/components/MarketsTable";

export function Markets(): ReactElement {
  return (
    <div className="m-auto flex max-w-6xl flex-col gap-y-12">
      <ProtocolStatsBar />
      <FeaturedMarkets />
      <MarketsTable />
    </div>
  );
}
