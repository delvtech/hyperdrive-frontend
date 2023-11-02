import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";

import { QueryClientProvider } from "@tanstack/react-query";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { queryClient } from "src/network/queryClient";
import { wagmiChains, wagmiConfig } from "src/network/wagmiClient";
import { App } from "src/ui/app/App/App";
import "src/ui/globals.css";
import { WagmiConfig } from "wagmi";

const container = document.getElementById("root") as HTMLDivElement;
const root = createRoot(container);

root.render(
  <QueryClientProvider client={queryClient}>
    <Toaster position="bottom-left" reverseOrder={false} />
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
