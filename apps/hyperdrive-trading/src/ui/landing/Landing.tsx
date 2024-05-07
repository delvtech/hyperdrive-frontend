import { ReactElement } from "react";
import { CommonHeadTags } from "src/ui/app/Head/CommonHeadTags";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { useFeatureFlag } from "src/ui/base/featureFlags/featureFlags";
import { useIsTailwindSmallScreen } from "src/ui/base/mediaBreakpoints";
import { Hero } from "src/ui/landing/Hero/Hero";
import { AllMarketsTable } from "src/ui/markets/AllMarketsTable/AllMarketsTable";
import { YieldSourceCard } from "src/ui/markets/YieldSourceCard/YieldSourceCard";
import { FAQ } from "src/ui/onboarding/FAQ/FAQ";
import { MobileFaq } from "src/ui/onboarding/FAQ/MobileFaq";
import { PositionCards } from "./PositionCards/PositionCards";

export function Landing(): ReactElement | null {
  const isSmallScreenView = useIsTailwindSmallScreen();
  const { isFlagEnabled: showCardView } = useFeatureFlag("card-view");

  return (
    <div className="flex flex-col items-center gap-14 px-4 py-8">
      <CommonHeadTags />
      <Hero />
      <div className="flex w-full flex-col items-center">
        {!showCardView ? (
          <>
            <h3 className="gradient-text mb-8 text-center">
              Available Markets
            </h3>
            <div className="daisy-card daisy-card-bordered flex w-full md:w-auto md:p-6">
              <AllMarketsTable />
            </div>
          </>
        ) : (
          <YieldSourceCards />
        )}
      </div>

      <PositionCards />
      {isSmallScreenView ? <MobileFaq /> : <FAQ />}
    </div>
  );
}

function YieldSourceCards() {
  const appConfig = useAppConfig();

  return (
    <div className="flex flex-wrap justify-center gap-16">
      {Object.entries(appConfig.protocols).map(([key, protocol]) => (
        <YieldSourceCard key={key} protocol={protocol} />
      ))}
    </div>
  );
}
