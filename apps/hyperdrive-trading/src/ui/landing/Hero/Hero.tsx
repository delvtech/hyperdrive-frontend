import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { ReactElement } from "react";

export function Hero(): ReactElement {
  return (
    <div className="daisy-hero">
      <div className="daisy-hero-content text-center">
        <div className="max-w-4xl">
          <h1 className="gradient-text mb-5 text-h3 font-medium md:text-h1">
            Fixed and variable yields at your control.
          </h1>
          <h5 className="mb-5 font-inter text-neutral-content">
            Open a Long to lock in a predictable fixed rate of return, open a
            Short to get multiplied exposure to the variable rate, or LP to
            profit from rates volatility.
          </h5>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://delv-tech.notion.site/Hyperdrive-Docs-6c014b9270af4483861b1c2ffa7f3a88"
            className="daisy-btn daisy-btn-ghost text-accent"
          >
            Learn more <ArrowRightIcon className="inline h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
