import {
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
  const hyperdrive = appConfig?.hyperdrives[0];
  return (
    <div className="flex flex-col items-center gap-10 bg-base-100 py-8 px-4">
      <CommonHeadTags />
      <Hero />
      <PositionCards />
      {isSmallScreenView ? <MobileFaq /> : <FAQ />}
    </div>
  );
}

function PositionCards(): ReactElement {
  return (
    <div className="flex max-w-6xl flex-col items-center justify-evenly gap-10">
      <div className="flex flex-wrap justify-center gap-16 ">
        <PositionCard
          title={"Long"}
          subtitle={
            "Go long fixed rates and earn passive yield on your favourite assets."
          }
          icon={<ClockIcon className="mb-2 h-16" />}
          checklist={[
            "Fixed rate included in the price",
            "Minimal risk and maintenance",
            "Redeemable before term ends",
          ]}
        />
        <PositionCard
          title={`Short`}
          subtitle={
            "Profit when the price of hy-asset drops, maximize exposure to the yield source."
          }
          icon={<BoltIcon className="mb-2 h-16" />}
          checklist={[
            `Fixed rate up, hy-asset price down`,
            "Maximize exposure to yield source",
            "Redeemable before term ends",
          ]}
        />
        <PositionCard
          title="Add Liquidity"
          subtitle={`Earn trading fees and interest`}
          description="Take the other side of every Long and Short. Earn fees and the
          yield source rate."
          icon={<SquaresPlusIcon className="mb-2 h-16" />}
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
        className="daisy-btn-neutral daisy-btn daisy-btn-md mt-10 w-60 justify-between gap-0 hover:daisy-btn-ghost"
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
        <div className="max-w-2xl">
          <span className="mb-5 text-h3 font-bold md:text-h2">Hyperdrive</span>
          <p className="mb-5">
            Hyperdrive marks a significant stride forward in exploring variable
            and fixed rate primitives. With no preset expiration dates, unified
            liquidity, and the elimination of LP rollovers, we introduce the
            convenience of everlasting liquidity.
          </p>
        </div>
      </div>
    </div>
  );
}
