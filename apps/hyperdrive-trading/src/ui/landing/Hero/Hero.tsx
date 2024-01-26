import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { ReactElement } from "react";

export function Hero(): ReactElement {
  return (
    <div className="daisy-hero">
      <div className="daisy-hero-content text-center">
        <div className="max-w-4xl">
          <h2 className="gradient-text mb-5 text-h3 font-bold md:text-h2">
            DeFi yields that match your risk tolerance
          </h2>
          <h4 className="mb-5 text-h5 text-neutral-content">
            Hyperdrive is an AMM that lets you buy fixed rates upfront, or
            maximize your exposure to variable rates like stETH and sDAI.
          </h4>
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
