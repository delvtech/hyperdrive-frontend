import { ReactElement } from "react";
import { FeaturedMarket } from "./FeaturedMarket";

interface FeaturedMarketsProps {}

export function FeaturedMarkets({}: FeaturedMarketsProps): ReactElement {
  return (
    <div className="grid grid-cols-1 gap-x-20 gap-y-16 rounded bg-base-200 p-10 md:grid-cols-3">
      <h2 className="font-quantico text-2xl text-off-white md:col-span-3">
        Featured Markets ✨
      </h2>
      <FeaturedMarket />
      <FeaturedMarket />
      <FeaturedMarket />
    </div>
  );
}
