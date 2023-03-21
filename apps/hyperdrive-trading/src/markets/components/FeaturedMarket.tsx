import { ReactElement } from "react";

interface FeaturedMarketProps {}

export function FeaturedMarket({}: FeaturedMarketProps): ReactElement {
  return (
    <div className="grid gap-y-6">
      <div className="flex flex-nowrap items-center gap-x-2">
        <img
          src="https://cryptologos.cc/logos/yearn-finance-yfi-logo.png?v=024"
          className="inline w-6"
        />
        <span className="whitespace-nowrap font-quantico text-xl text-off-white">
          USDC Vault
        </span>
        <span className="whitespace-nowrap rounded-xl bg-giga-blue-200 px-3 py-[2px] font-quantico text-sm text-hyper-green">
          6 months
        </span>
      </div>

      <div className="grid grid-cols-3 gap-x-8">
        <div>
          <p className="mb-1 whitespace-nowrap font-quantico text-giga-blue-300">
            Long APR
          </p>
          <p className="whitespace-nowrap font-quantico font-semibold text-off-white">
            1.25%
          </p>
        </div>

        <div>
          <p className="mb-1 whitespace-nowrap font-quantico text-giga-blue-300">
            Short APR
          </p>
          <p className="whitespace-nowrap font-quantico font-semibold text-off-white">
            1.25%
          </p>
        </div>

        <div>
          <p className="mb-1 whitespace-nowrap font-quantico text-giga-blue-300">
            LP APR
          </p>
          <p className="whitespace-nowrap font-quantico font-semibold text-off-white">
            1.25%
          </p>
        </div>
      </div>
    </div>
  );
}
