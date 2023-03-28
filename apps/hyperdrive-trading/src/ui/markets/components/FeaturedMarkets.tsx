import { ReactElement } from "react";
import { FeaturedMarket } from "./FeaturedMarket";

interface FeaturedMarketsProps {}

export function FeaturedMarkets({}: FeaturedMarketsProps): ReactElement {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold font-akira text-section-text">
        Featured Markets
      </h2>
      <div className="flex flex-col p-10 rounded gap-y-12 bg-base-100">
        <div className="grid grid-cols-1 gap-x-20 gap-y-10 md:grid-cols-3">
          <FeaturedMarket />
          <FeaturedMarket />
          <FeaturedMarket />
        </div>
      </div>
    </div>
  );
}
