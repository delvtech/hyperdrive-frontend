import { darkTheme, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";

import { QueryClientProvider } from "@tanstack/react-query";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { queryClient } from "src/network/queryClient";
import {
  chains,
  publicClient,
  webSocketPublicClient,
} from "src/network/wagmiClient";
import { connectors } from "src/network/walletConnectors";
import { App } from "src/ui/app/App/App";
import "src/ui/globals.css";
import { createConfig, WagmiConfig } from "wagmi";

const container = document.getElementById("root") as HTMLDivElement;
const root = createRoot(container);

const wagmiConfig = createConfig({
  publicClient,
  autoConnect: true,
  connectors,
  webSocketPublicClient,
});

root.render(
  <QueryClientProvider client={queryClient}>
    <Toaster position="bottom-left" reverseOrder={false} />
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider
        chains={chains}
        showRecentTransactions
        theme={darkTheme()}
      >
        <SkeletonTheme
          baseColor="hsl(var(--nc))"
          highlightColor="hsl(var(--bc))"
        >
          <App />
        </SkeletonTheme>
      </RainbowKitProvider>
    </WagmiConfig>
  </QueryClientProvider>,
);
