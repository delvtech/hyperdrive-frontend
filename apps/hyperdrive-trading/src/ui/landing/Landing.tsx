import classNames from "classnames";
import { ReactElement } from "react";
import { PoolsList } from "src/ui/markets/PoolsList";

export function Landing(): ReactElement | null {
  return (
    <div className="mx-[2vw] flex flex-col gap-4 lg:w-[900px]">
      <div className="my-4 max-w-4xl">
        <h1
          className={classNames(
            "gradient-text mb-4 text-h3 font-medium md:text-h2",
          )}
        >
          Fixed and variable yields at your control.
        </h1>
        <h5
          className={classNames(
            "font-inter text-lg leading-bodyText text-neutral-content",
          )}
        >
          Lock in a fixed rate with a <strong>Long</strong>, boost your exposure
          to the yield source with a <strong>Short</strong>, or provide
          liquidity to gain exposure to the yield source <strong>and</strong>{" "}
          Hyperdrive trading fees at the same time.
        </h5>
      </div>
      <PoolsList />
    </div>
  );
}
