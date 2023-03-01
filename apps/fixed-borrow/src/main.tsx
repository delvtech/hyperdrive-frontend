// TODO: Find out if vite will let us move main.tsx to ui/ instead

import "@rainbow-me/rainbowkit/styles.css";
import "src/ui/index.css";

import { darkTheme, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import { queryClient } from "src/network/queryClient";
import { chains, wagmiClient } from "src/network/wagmiClient";
import App from "src/ui/App";
import { WagmiConfig } from "wagmi";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains} theme={darkTheme()}>
          <App />
        </RainbowKitProvider>
      </WagmiConfig>
    </QueryClientProvider>
  </React.StrictMode>,
);
