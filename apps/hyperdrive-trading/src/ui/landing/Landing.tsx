import { ReactElement } from "react";
import { PoolsList } from "src/ui/markets/PoolsList/PoolsList";

export function Landing(): ReactElement | null {
  return (
    <div className="mx-[2vw] mt-4 space-y-8 lg:w-[1064px]">
      <div className="space-y-4">
        <h1 className="gradient-text text-h4 font-medium md:text-h4">
          Hyperdrive Pools
        </h1>
        <p className="font-inter text-lg leading-bodyText text-neutral-content">
          Earn predictable fixed rate yield or multiply your capital exposure to
          DeFi&apos;s top variable rates.
        </p>
      </div>
      <PoolsList />
    </div>
  );
}
