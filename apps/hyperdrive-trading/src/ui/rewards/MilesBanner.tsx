import { XMarkIcon } from "@heroicons/react/24/outline";
import { ReactElement } from "react";
import { useLocalStorage } from "react-use";
import { ExternalLink } from "src/ui/analytics/ExternalLink";
import CustomBanner from "src/ui/base/components/CustomBanner";
import { HyperVueMilesIconUrl } from "src/ui/rewards/HyperVueMilesIconUrl";

export function MilesBanner(): ReactElement | null {
  const { isBannerDismissed, setIsBannerDismissed } = useMilesBannerDismissed();
  if (isBannerDismissed) {
    return null;
  }

  return (
    <CustomBanner
      className="border border-hypervue-red/30 bg-hypervue-pink/20"
      description={
        <>
          <div className="flex w-full justify-between">
            <div className="flex w-full flex-1 items-center justify-center gap-4">
              <img src={HyperVueMilesIconUrl} className="size-8 rounded-full" />
              <span className="drop-shadow-glow">
                You can now earn Miles by{" "}
                <strong className="">providing liquidity</strong> or{" "}
                <strong className="">opening a short</strong>! Learn more about
                the{" "}
                <ExternalLink
                  newTab
                  href="https://mirror.xyz/0xdB081d7cedeDB2cFb4fff2330D9a31f54A025E38/qVENDIYTfUiZw6QZroXBpNxF8UjTGV8YkVq0lOaTznU"
                  className="daisy-link font-medium text-white"
                >
                  HyperVue Foundation points program
                </ExternalLink>
                .
              </span>
            </div>
          </div>
          <button
            className="justify-self-end"
            onClick={() => setIsBannerDismissed(true)}
          >
            <XMarkIcon className="h-6 cursor-pointer" />
          </button>
        </>
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
