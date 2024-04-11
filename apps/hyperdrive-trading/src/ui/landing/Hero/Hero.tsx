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
          <h5 className="mb-5 font-inter text-base-content">
            Open a Long to lock in a predictable fixed rate, open a Short to get
            multiplied exposure to the variable rate, or LP to profit from rates
            volatility.
          </h5>
          <div className="flex w-full justify-center gap-x-2">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://hyperdrive.delv.tech/docs"
              className="daisy-btn daisy-btn-ghost text-primary"
            >
              Read the Hyperdrive docs <ArrowRightIcon className="inline h-4" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://warpcast.com/~/compose?text=Can%20you%20outtrade%20me%20on%20Hyperdrive%3F%20Warp%20your%20best%20Hyperdrive%20trade%20screenshot%20below%20%F0%9F%93%88%20%2Fdelv&embeds[]=https://frames.hyperdrive.trade"
              className="text-white daisy-btn bg-warpcast-purple hover:bg-farcaster-purple"
            >
              Warp on Warpcast
              <img
                className="h-4"
                src="https://raw.githubusercontent.com/vrypan/farcaster-brand/ea95543f6d1308dd52631f5e81f395a60447df0b/icons/icon-transparent/transparent-white.svg"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
