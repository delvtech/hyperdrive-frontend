import { ReactElement } from "react";
import { Stat } from "src/ui/base/components/Stat";

interface FeaturedMarketProps {}

export function FeaturedMarket({}: FeaturedMarketProps): ReactElement {
  return (
    <div className="flex flex-col gap-y-6 whitespace-nowrap font-quantico">
      <div className="flex flex-nowrap items-center gap-x-2">
        <img
          src="https://cryptologos.cc/logos/yearn-finance-yfi-logo.png?v=024"
          className="w-6"
        />
        <span className="text-xl text-off-white">USDC Vault</span>
        <span className="whitespace-nowrap rounded-xl bg-giga-blue-300 px-3 py-0.5 font-quantico text-sm text-hyper-green">
          6 months
        </span>
      </div>

      <div className="grid grid-cols-3 gap-x-8">
        <Stat label="Long APR" value="1.25%" />
        <Stat label="Short APR" value="1.25%" />
        <Stat label="LP APR" value="1.25%" />
      </div>
    </div>
  );
}
