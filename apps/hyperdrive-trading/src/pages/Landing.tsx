import {
  ArrowRightIcon,
  BoltIcon,
  ClockIcon,
  SquaresPlusIcon,
} from "@heroicons/react/24/outline";
import { ReactElement } from "react";
import { CommonHeadTags } from "src/ui/app/Head/CommonHeadTags";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { useIsTailwindSmallScreen } from "src/ui/base/mediaBreakpoints";
import { PositionCard } from "src/ui/hyperdrive/PositionCard";
import { FAQ } from "src/ui/onboarding/FAQ/FAQ";
import { MobileFaq } from "src/ui/onboarding/FAQ/MobileFaq";

export function Landing(): ReactElement | null {
  const { appConfig } = useAppConfig();
  const isSmallScreenView = useIsTailwindSmallScreen();
  if (appConfig) {
    // eslint-disable-next-line no-console
    console.log("appConfig", appConfig);
  }

  if (!appConfig) {
    return null;
  }
  return (
    <div className="flex flex-col items-center gap-10 px-4 py-8">
      <CommonHeadTags />
      <Hero />
      <PositionCards />
      {isSmallScreenView ? <MobileFaq /> : <FAQ />}
    </div>
  );
}

function PositionCards(): ReactElement {
  return (
    <div className="flex max-w-7xl flex-col items-center justify-evenly gap-10">
      <div className="flex flex-wrap justify-center gap-16 ">
        <PositionCard
          title="Long"
          subtitle="Go long fixed rates and earn passive yield on your favourite assets."
          icon={<ClockIcon className="h-4 shrink-0" />}
          checklist={[
            "Fixed rate included in the price",
            "Minimal risk and maintenance",
            "Redeemable before term ends",
          ]}
        />
        <PositionCard
          title="Short"
          subtitle="Profit when the price of hy-asset drops, maximize exposure to the yield source."
          icon={<BoltIcon className="h-4 shrink-0" />}
          checklist={[
            `Fixed rate up, hy-asset price down`,
            "Maximize exposure to yield source",
            "Redeemable before term ends",
          ]}
        />
        <PositionCard
          title="Add Liquidity"
          subtitle="Take the other side of every Long and Short. Earn fees and the
          yield source rate."
          icon={<SquaresPlusIcon className="h-4 shrink-0" />}
          checklist={[
            `Single-sided deposit with hy-asset`,
            "Idle liquidity earns yield source rate",
            "No terms or manual LP rollovers",
          ]}
          emphasized
        />
      </div>
      <a
        href={"/markets"}
        className="daisy-btn-primary daisy-btn daisy-btn-md daisy-btn-circle mt-8 w-60 justify-between gap-0"
      >
        <span className="flex-1 text-center">View Markets</span>
      </a>
    </div>
  );
}

function Hero() {
  return (
    <div className="daisy-hero">
      <div className="daisy-hero-content text-center">
        <div className="max-w-4xl">
          <h2 className="gradient-text mb-5 text-h3 font-bold md:text-h2">
            DeFi yields that match your risk tolerance
          </h2>
          <h4 className="mb-5 text-h5 text-gray-400">
            Hyperdrive is an AMM that lets you buy fixed rates upfront, or
            maximize your exposure to variable rates like stETH and sDAI.
          </h4>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://delv-tech.notion.site/Hyperdrive-Docs-6c014b9270af4483861b1c2ffa7f3a88"
            className="daisy-btn-ghost daisy-btn text-accent"
          >
            Learn more <ArrowRightIcon className="inline h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
