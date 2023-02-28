// TODO: Find out if vite will let us move this to ui/ instead

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./ui/App";

import { QueryClientProvider } from "@tanstack/react-query";
import { WagmiConfig } from "wagmi";
import { chains, wagmiClient } from "./network/wagmiClient";
import { darkTheme, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { queryClient } from "./network/queryClient";

import "@rainbow-me/rainbowkit/styles.css";
import "./ui/index.css";

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
