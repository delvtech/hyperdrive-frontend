import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { App } from "src/ui/App";
import "src/ui/globals.css";
import { wagmiChains, wagmiConfig } from "src/wallet/wagmiClient";
import { WagmiConfig } from "wagmi";

const container = document.getElementById("root") as HTMLDivElement;
const root = createRoot(container);

const queryClient = new QueryClient();

root.render(
  <QueryClientProvider client={queryClient}>
    <Toaster position="bottom-left" reverseOrder={false} />
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={wagmiChains}>
        <App />
      </RainbowKitProvider>
    </WagmiConfig>
  </QueryClientProvider>,
);
