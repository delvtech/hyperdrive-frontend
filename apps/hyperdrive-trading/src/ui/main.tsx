import { XMarkIcon } from "@heroicons/react/24/outline";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";

import { QueryClientProvider } from "@tanstack/react-query";
import classNames from "classnames";
import { createRoot } from "react-dom/client";
import toast, { ToastBar, Toaster } from "react-hot-toast";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { queryClient } from "src/network/queryClient";
import { wagmiChains, wagmiConfig } from "src/network/wagmiClient";
import { App } from "src/ui/app/App/App";
import "src/ui/globals.css";
import { WagmiConfig } from "wagmi";

const container = document.getElementById("root") as HTMLDivElement;
const root = createRoot(container);

if (import.meta.env.DEV) {
  enableTailwindBreakpointsDevTool();
}

root.render(
  <QueryClientProvider client={queryClient}>
    <Toaster position="top-right">
      {(t) => (
        <ToastBar toast={t}>
          {({ icon, message }) => (
            <div className="mx-4 flex flex-row">
              {icon}
              {message}
              {t.type !== "loading" && (
                <div className="flex items-center justify-center">
                  <XMarkIcon
                    className="h-7 cursor-pointer rounded-full bg-base-200 p-2"
                    onClick={() => toast.dismiss(t.id)}
                  />
                </div>
              )}
            </div>
          )}
        </ToastBar>
      )}
    </Toaster>
    ;
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={wagmiChains} showRecentTransactions>
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
