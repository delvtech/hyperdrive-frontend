import classNames from "classnames";
import { ReactElement } from "react";

export function Hero(): ReactElement {
  return (
    <div className="daisy-hero">
      <div className={classNames("daisy-hero-content")}>
        <div className="max-w-4xl">
          <h1
            className={classNames(
              "gradient-text mb-5 text-h3 font-medium md:text-h2",
            )}
          >
            Fixed and variable yields at your control.
          </h1>
          <h5 className={classNames("font-inter text-lg text-neutral-content")}>
            Open a Long to lock in a predictable fixed rate, open a Short to get
            multiplied exposure to the variable rate, or become a liquidity
            provider to earn the variable rate plus trading fees
          </h5>
        </div>
      </div>
    </div>
  );
}
