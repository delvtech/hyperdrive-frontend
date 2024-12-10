import { ReactElement } from "react";

export function PointsMarkets(): ReactElement | null {
  return (
    <div className="mx-[2vw] mt-4 space-y-8 lg:w-[1064px]">
      <div className="space-y-4">
        <h1 className="gradient-text text-h4 font-medium md:text-h4">
          Points Markets
        </h1>
        <p className="font-inter text-lg leading-bodyText text-neutral-content">
          Maximize your returns on DeFi&apos;s top yield sources and boost your
          exposure to points and rewards.
        </p>
      </div>
    </div>
  );
}
