import { ArrowRightIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import { ReactElement } from "react";
import { useFeatureFlag } from "src/ui/base/featureFlags/featureFlags";

export function Hero(): ReactElement {
  const { isFlagEnabled: isNewPoolsView } = useFeatureFlag("pools-view");
  return (
    <div className="daisy-hero">
      <div
        className={classNames(
          "daisy-hero-content",
          isNewPoolsView ? null : "text-center",
        )}
      >
        <div className="max-w-4xl">
          <h1
            className={classNames(
              "gradient-text mb-5 text-h3 font-medium",
              isNewPoolsView ? "md:text-h2" : "md:text-h1",
            )}
          >
            Fixed and variable yields at your control.
          </h1>
          <h5
            className={classNames(
              "mb-5 font-inter text-neutral-content",
              isNewPoolsView ? "text-lg" : null,
            )}
          >
            Open a Long to lock in a predictable fixed rate, open a Short to get
            multiplied exposure to the variable rate, or LP to profit from rates
            volatility.
          </h5>
          {isNewPoolsView ? null : (
            <a
              target="_blank"
              rel="noreferrer"
              href="https://docs.hyperdrive.box"
              className="daisy-btn daisy-btn-ghost rounded-full"
            >
              Read the Hyperdrive docs <ArrowRightIcon className="inline h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
