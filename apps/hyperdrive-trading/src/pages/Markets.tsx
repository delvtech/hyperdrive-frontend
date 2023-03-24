import { ReactElement } from "react";
import { FeaturedMarkets } from "src/ui/markets/components/FeaturedMarkets";
import { MarketsTable } from "src/ui/markets/components/MarketsTable";
import { ProtocolStatsBar } from "src/ui/protocol/components/ProtocolStatsBar";

export function Markets(): ReactElement {
  return (
    <div className="m-auto flex max-w-6xl flex-col gap-y-12">
      <ProtocolStatsBar />
      <FeaturedMarkets />
      <MarketsTable />
    </div>
  );
}
