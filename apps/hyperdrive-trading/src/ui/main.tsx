// Importing Why Did You Render (WDYR) must happen before anything that
// imports React. This is because WDYR monkeypatches React's render method to
// detect unnecessary re-renders.
import "src/ui/base/debugging/wdyr";

import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import "@usecapsule/react-sdk/styles.css";

import {
  ErrorBoundary as RollbarErrorBoundary,
  Provider as RollbarProvider,
} from "@rollbar/react"; // Provider imports 'rollbar'
import { QueryClientProvider } from "@tanstack/react-query";
import classNames from "classnames";
import { createRoot } from "react-dom/client";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { queryClient } from "src/network/queryClient";
import { wagmiConfig } from "src/network/wagmiClient";
import { Plausible } from "src/ui/analytics/Plausible";
import { App } from "src/ui/app/App/App";
import ToastProvider from "src/ui/base/components/Toaster/ToastProvider";
import { RegionInfoProvider } from "src/ui/compliance/hooks/useRegionInfo";
import "src/ui/globals.css";
import { logAppVersion } from "src/ui/version/logAppVersion";
import { customRainbowTheme } from "src/ui/wallet/customTheme";
import { WagmiProvider } from "wagmi";

const container = document.getElementById("root") as HTMLDivElement;
const root = createRoot(container);

if (import.meta.env.DEV) {
  enableTailwindBreakpointsDevTool();
}

logAppVersion();

root.render(
  <WagmiProvider config={wagmiConfig}>
    <Plausible />
    <QueryClientProvider client={queryClient}>
      <ToastProvider />
      <RainbowKitProvider
        appInfo={{
          appName: "Hyperdrive",
          disclaimer: () => (
            <span className="text-xs text-neutral-content">
              Note: If you choose to log in with Capsule, please review their{" "}
              <a
                href="https://capsule-org.notion.site/Capsule-Labs-Inc-Privacy-Policy-7421971b985d4320abfe8454c4ba185c"
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                privacy
              </a>{" "}
              policy.{" "}
            </span>
          ),
        }}
        showRecentTransactions
        theme={customRainbowTheme}
      >
        <SkeletonTheme baseColor="#202F36" highlightColor="#243942">
          <RollbarProvider
            config={{
              accessToken: import.meta.env.VITE_ROLLBAR_ACCESS_TOKEN as string,
              environment: import.meta.env.VITE_ROLLBAR_ENV as string,
              captureIp: "anonymize",
              captureUncaught: true,
              captureUnhandledRejections: true,
            }}
          >
            <RollbarErrorBoundary>
              <RegionInfoProvider>
                <App />
              </RegionInfoProvider>
            </RollbarErrorBoundary>
          </RollbarProvider>
        </SkeletonTheme>
      </RainbowKitProvider>
    </QueryClientProvider>
  </WagmiProvider>,
);

/**
 * Enable Tailwind Debug Screens plugin in development mode for showing active
 * breakpoints in bottom left corner, ie: 'screen: sm', 'screen: 2xl', etc..
 */
function enableTailwindBreakpointsDevTool() {
  document.body.className = classNames(
    document.body.className,
    "debug-screens",
  );
}
