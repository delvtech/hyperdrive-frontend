import { ReactElement } from "react";
import { FeaturedMarket } from "./FeaturedMarket";

interface FeaturedMarketsProps {}

export function FeaturedMarkets({}: FeaturedMarketsProps): ReactElement {
  return (
    <div className="flex flex-col gap-y-12 rounded bg-base-200 p-10">
      <h2 className="font-quantico text-2xl font-bold text-off-white">
        Featured Markets ✨
      </h2>

      <div className="grid grid-cols-1 gap-x-20 gap-y-10 md:grid-cols-3">
        <FeaturedMarket />
        <FeaturedMarket />
        <FeaturedMarket />
      </div>
    </div>
  );
}
