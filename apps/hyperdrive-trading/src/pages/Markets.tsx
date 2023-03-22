import { FeaturedMarkets } from "src/markets/components/FeaturedMarkets";
import { ProtocolStatsBar } from "src/protocol/components/ProtocolStatsBar";
import { ReactElement } from "react";

export function Markets(): ReactElement {
  return (
    <div className="m-auto flex max-w-5xl flex-col gap-y-12">
      <ProtocolStatsBar />
      <FeaturedMarkets />
    </div>
  );
}
