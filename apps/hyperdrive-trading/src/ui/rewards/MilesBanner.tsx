import { XMarkIcon } from "@heroicons/react/24/outline";
import { ReactElement } from "react";
import { useLocalStorage } from "react-use";
import { ExternalLink } from "src/ui/analytics/ExternalLink";
import CustomBanner from "src/ui/base/components/CustomBanner";

export function MilesBanner(): ReactElement | null {
  const { isBannerDismissed, setIsBannerDismissed } = useMilesBannerDismissed();
  if (isBannerDismissed) {
    return null;
  }
  return (
    <CustomBanner
      className="gradient-hypervue rounded-none"
      icon={<img src="/hyperdrive-solo-logo-white.svg" className="size-8" />}
      description={
        <div className="flex w-full justify-between">
          <span className="text-base-content">
            You can now earn Miles by providing liquidity on Hyperdrive! Learn
            more about the{" "}
            <ExternalLink
              newTab
              href="https://mirror.xyz/0xdB081d7cedeDB2cFb4fff2330D9a31f54A025E38/qVENDIYTfUiZw6QZroXBpNxF8UjTGV8YkVq0lOaTznU"
              className="daisy-link font-medium text-white"
            >
              HyperVue Foundation points program
            </ExternalLink>
            .
          </span>
          <button onClick={() => setIsBannerDismissed(true)}>
            <XMarkIcon className="h-6 cursor-pointer" />
          </button>
        </div>
      }
    />
  );
}
function useMilesBannerDismissed(): {
  isBannerDismissed: boolean;
  setIsBannerDismissed: (isDismissed: boolean) => void;
} {
  const [isBannerDismissed, setIsBannerDismissed] = useLocalStorage(
    "miles-banner-dismissed",
    false,
  );
  return {
    // safe to case because default value is set to false
    isBannerDismissed: isBannerDismissed as boolean,
    setIsBannerDismissed,
  };
}