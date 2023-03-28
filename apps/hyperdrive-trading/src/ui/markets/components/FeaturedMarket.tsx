import { ReactElement } from "react";
import { Pill } from "src/ui/base/components/Pill";
import { Stat } from "src/ui/base/components/Stat";

interface FeaturedMarketProps {}

export function FeaturedMarket({}: FeaturedMarketProps): ReactElement {
  return (
    <div className="flex flex-col gap-y-6 whitespace-nowrap font-quantico">
      <div className="flex items-center gap-x-6">
        <div className="flex items-center gap-x-2">
          <img
            src="https://cryptologos.cc/logos/yearn-finance-yfi-logo.png?v=024"
            className="h-6"
          />
          <span className="text-xl text-hyper-blue-100">USDC Vault</span>
        </div>
        <Pill>6 months</Pill>
      </div>

      <div className="grid grid-cols-3 gap-x-8">
        <Stat label="Long APR" value="1.25%" />
        <Stat label="Short APR" value="1.25%" />
        <Stat label="LP APR" value="1.25%" />
      </div>
    </div>
  );
}
