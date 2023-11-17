import {
  BoltIcon,
  ClockIcon,
  SquaresPlusIcon,
} from "@heroicons/react/24/outline";
import { ReactElement } from "react";
import { Link } from "react-router-dom";
import { Hyperdrive } from "src/appconfig/types";
import { CommonHeadTags } from "src/ui/app/Head/CommonHeadTags";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { PositionCard } from "src/ui/hyperdrive/PositionCard";
import { FAQ } from "src/ui/onboarding/FAQ/FAQ";

export function Landing(): ReactElement | null {
  const { appConfig } = useAppConfig();
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
      <PositionCards hyperdrive={hyperdrive} />
      <Footer />
    </div>
  );
}

function PositionCards({
  hyperdrive,
}: {
  hyperdrive: Hyperdrive;
}): ReactElement {
  return (
    <div className="flex max-w-6xl flex-col items-center justify-evenly gap-10">
      <div className="flex flex-wrap justify-center gap-16 ">
        <PositionCard
          title={"Long Assets"}
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
          title={`Short Assets`}
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
        href={`/trade/${hyperdrive.address}?position=Longs&openOrClosed=Open`}
        className="daisy-btn-neutral daisy-btn-md daisy-btn mt-10 w-60 justify-between gap-0 hover:daisy-btn-ghost"
      >
        <span className="flex-1 text-center">Choose Market</span>
      </a>
      <FAQ />
    </div>
  );
}

function Hero() {
  return (
    <div className="daisy-hero">
      <div className="daisy-hero-content text-center">
        <div className="max-w-2xl">
          <span className="mb-5  text-h2 font-bold">Hyperdrive</span>
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

function Footer() {
  return (
    <footer className="daisy-footer p-10 text-base-content">
      <aside>
        <Link
          to={"/"}
          className="inline-flex items-center gap-2 font-lato text-h6 font-extrabold uppercase tracking-widest"
        >
          <div className="inline-flex w-full">
            <div className="h-4 w-2.5 -skew-x-12 bg-[#007eed]"></div>
            <div className="h-4 w-2.5 -skew-x-12 bg-[#522dae]"></div>
            <div className="h-4 w-2.5 -skew-x-12 bg-[#f40000]"></div>
          </div>
          Hyperdrive
        </Link>
        <p className="max-w-[160px]">
          Revolutionize DeFi with Everlasting Liquidity
        </p>
      </aside>
      <nav>
        <header className="daisy-footer-title">Services</header>
        <Link
          to={
            "https://delv-tech.notion.site/Hyperdrive-Docs-6c014b9270af4483861b1c2ffa7f3a88"
          }
          className="link link-hover"
        >
          Documentation
        </Link>
      </nav>
      <nav>
        <header className="daisy-footer-title">Company</header>
        <a className="link link-hover">About us</a>
      </nav>
      <nav>
        <header className="daisy-footer-title">Legal</header>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  );
}
