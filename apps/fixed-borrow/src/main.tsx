// TODO: Find out if vite will let us move main.tsx to ui/ instead

import "@rainbow-me/rainbowkit/styles.css";
import "react-loading-skeleton/dist/skeleton.css";
import "src/ui/index.css";

import { darkTheme, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import { queryClient } from "src/network/queryClient";
import { chains, wagmiClient } from "src/network/wagmiClient";
import App from "src/ui/app/App";
import { WagmiConfig } from "wagmi";
import { SkeletonTheme } from "react-loading-skeleton";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains} theme={darkTheme()}>
          <SkeletonTheme
            baseColor="var(--color-inputBg)"
            highlightColor="var(--color-dawn)"
          >
            <App />
          </SkeletonTheme>
        </RainbowKitProvider>
      </WagmiConfig>
    </QueryClientProvider>
  </React.StrictMode>,
);
