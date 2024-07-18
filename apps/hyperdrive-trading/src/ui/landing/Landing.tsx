import { ReactElement } from "react";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { useIsTailwindSmallScreen } from "src/ui/base/mediaBreakpoints";
import { Hero } from "src/ui/landing/Hero/Hero";
import { YieldSourceCard } from "src/ui/markets/YieldSourceCard/YieldSourceCard";
import { FAQ } from "src/ui/onboarding/FAQ/FAQ";
import { MobileFaq } from "src/ui/onboarding/FAQ/MobileFaq";
import { PositionCards } from "./PositionCards/PositionCards";

export function Landing(): ReactElement | null {
  const isSmallScreenView = useIsTailwindSmallScreen();

  return (
    <div className="flex flex-col items-center gap-16 px-4 py-8">
      <Hero />
      <div className="flex w-full flex-col items-center">
        <YieldSourceCards />
      </div>

      <PositionCards />
      {isSmallScreenView ? <MobileFaq /> : <FAQ />}
    </div>
  );
}

function YieldSourceCards() {
  const { protocols } = useAppConfig();

  return (
    <div className="flex max-w-[1610px] flex-wrap justify-center gap-16">
      {Object.entries(protocols).map(([key, protocol]) => (
        <YieldSourceCard key={key} yieldSourceProtocol={protocol} />
      ))}
    </div>
  );
}
