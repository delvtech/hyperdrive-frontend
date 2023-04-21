import { FeaturedMarket } from "./FeaturedMarket";
import { ReactElement } from "react";

interface FeaturedMarketsProps {}

export function FeaturedMarkets({}: FeaturedMarketsProps): ReactElement {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-akira font-bold text-section-text">
        Featured Markets
      </h2>
      <div className="flex flex-col gap-y-12 rounded bg-base-100 p-10">
        <div className="grid grid-cols-1 gap-x-20 gap-y-10 md:grid-cols-3">
          <FeaturedMarket />
          <FeaturedMarket />
          <FeaturedMarket />
        </div>
      </div>
    </div>
  );
}
