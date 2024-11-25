import { ReactElement } from "react";
import { PoolsList } from "src/ui/markets/PoolsList";

export function Landing(): ReactElement | null {
  return (
    <div className="mx-[2vw] mt-4 space-y-8 lg:w-[900px]">
      <div className="space-y-4">
        <h1 className="gradient-text text-h3 font-medium md:text-h2">
          Fixed and variable yields at your control.
        </h1>
        <p className="font-inter text-lg leading-bodyText text-neutral-content">
          Lock in a fixed rate with a <strong>Long</strong>, boost your exposure
          to the yield source with a <strong>Short</strong>, or provide
          liquidity to gain exposure to the yield source <strong>and</strong>{" "}
          Hyperdrive trading fees at the same time.
        </p>
      </div>
      <PoolsList />
    </div>
  );
}
