import { FeaturedMarkets } from "markets/components/FeaturedMarkets";
import { ProtocolStatsBar } from "protocol/components/ProtocolStatsBar";
import { ReactElement } from "react";

export function Markets(): ReactElement {
  return (
    <div className="m-auto flex max-w-5xl flex-col gap-y-12 px-6 pt-[5vh]">
      <ProtocolStatsBar />
      <FeaturedMarkets />
    </div>
  );
}
