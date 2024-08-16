import { ReactElement } from "react";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { useFeatureFlag } from "src/ui/base/featureFlags/featureFlags";
import { useIsTailwindSmallScreen } from "src/ui/base/mediaBreakpoints";
import { Hero } from "src/ui/landing/Hero/Hero";
import { YieldSourceCard } from "src/ui/markets/YieldSourceCard/YieldSourceCard";
import { FAQ } from "src/ui/onboarding/FAQ/FAQ";
import { MobileFaq } from "src/ui/onboarding/FAQ/MobileFaq";
import { PositionCards } from "./PositionCards/PositionCards";

export function Landing(): ReactElement | null {
  const isSmallScreenView = useIsTailwindSmallScreen();
  const { isFlagEnabled: isNewPoolsView } = useFeatureFlag("pools-view");

  return (
    <div className="flex flex-col items-center gap-16 px-4 py-8">
      <Hero />
      <div className="flex w-full flex-col items-center">
        {isNewPoolsView ? null : <YieldSourceCards />}
      </div>

      {isNewPoolsView ? null : (
        <>
          <PositionCards />
          {isSmallScreenView ? <MobileFaq /> : <FAQ />}
        </>
      )}
    </div>
  );
}

/**
 * @deprecated
 */
function YieldSourceCards() {
  const { yieldSources } = useAppConfig();

  return (
    <div className="flex max-w-[1610px] flex-wrap justify-center gap-16">
      {Object.entries(yieldSources).map(([key, yieldSource]) => (
        <YieldSourceCard key={key} yieldSource={yieldSource} />
      ))}
    </div>
  );
}
