import { ReactElement } from "react";
import { CommonHeadTags } from "src/ui/app/Head/CommonHeadTags";
import { useIsTailwindSmallScreen } from "src/ui/base/mediaBreakpoints";
import { Hero } from "src/ui/landing/Hero/Hero";
import { AllMarketsTable } from "src/ui/markets/AllMarketsTable/AllMarketsTable";
import { FAQ } from "src/ui/onboarding/FAQ/FAQ";
import { MobileFaq } from "src/ui/onboarding/FAQ/MobileFaq";
import { PositionCards } from "./PositionCards/PositionCards";

export function Landing(): ReactElement | null {
  const isSmallScreenView = useIsTailwindSmallScreen();

  return (
    <div className="flex flex-col items-center gap-10 px-4 py-8">
      <CommonHeadTags />
      <Hero />
      <PositionCards />
      <AllMarketsTable />
      {isSmallScreenView ? <MobileFaq /> : <FAQ />}
    </div>
  );
}
