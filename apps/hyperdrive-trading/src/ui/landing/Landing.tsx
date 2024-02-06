import { ReactElement } from "react";
import { CommonHeadTags } from "src/ui/app/Head/CommonHeadTags";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { useIsTailwindSmallScreen } from "src/ui/base/mediaBreakpoints";
import { Hero } from "src/ui/landing/Hero/Hero";
import { FAQ } from "src/ui/onboarding/FAQ/FAQ";
import { MobileFaq } from "src/ui/onboarding/FAQ/MobileFaq";
import { PositionCards } from "./PositionCards/PositionCards";

export function Landing(): ReactElement | null {
  const appConfig = useAppConfig();
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
