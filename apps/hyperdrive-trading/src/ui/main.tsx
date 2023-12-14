import { darkTheme, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";

import { QueryClientProvider } from "@tanstack/react-query";
import classNames from "classnames";
import { createRoot } from "react-dom/client";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { queryClient } from "src/network/queryClient";
import { wagmiChains, wagmiConfig } from "src/network/wagmiClient";
import { App } from "src/ui/app/App/App";
import { customRainbowTheme } from "src/ui/appconfig/customTheme";
import ToastProvider from "src/ui/base/components/Toaster/ToastProvider";
import "src/ui/globals.css";
import { WagmiConfig } from "wagmi";
const container = document.getElementById("root") as HTMLDivElement;
const root = createRoot(container);

if (import.meta.env.DEV) {
  enableTailwindBreakpointsDevTool();
}

root.render(
  <QueryClientProvider client={queryClient}>
    <ToastProvider />
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider
        chains={wagmiChains}
        showRecentTransactions
        theme={{
          ...darkTheme(),
          ...customRainbowTheme(),
        }}
      >
        <SkeletonTheme
          baseColor="hsl(var(--b1))"
          highlightColor="hsl(var(--b3))"
        >
          <App />
        </SkeletonTheme>
      </RainbowKitProvider>
    </WagmiConfig>
  </QueryClientProvider>,
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
