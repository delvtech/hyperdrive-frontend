import { lightTheme, RainbowKitProvider, Theme } from "@rainbow-me/rainbowkit";
import { Index } from "pages/Index";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { WagmiConfig } from "wagmi";
import { chains, wagmiClient } from "wallet/wagmiClient";
import { Navbar } from "./Navbar";

import merge from "lodash.merge";
import { TermPage } from "pages/term";

const queryClient = new QueryClient();

export function App() {
  return (
    <div className="h-screen bg-zinc-900">
      <QueryClientProvider client={queryClient}>
        <WagmiConfig client={wagmiClient}>
          <RainbowKitProvider
            chains={chains}
            theme={merge(lightTheme(), {
              fonts: {
                body: "Akira",
              },
              radii: {
                connectButton: "none",
                actionButton: "none",
                menuButton: "none",
                modal: "none",
              },
              colors: {
                connectButtonBackground: "#D5FF90",
                closeButtonBackground: "#F4B1FF",

                // TODO custom rainbow kit theme
              },
            } as Theme)}
          >
            <Navbar />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/term" element={<TermPage />} />
              </Routes>
            </BrowserRouter>
          </RainbowKitProvider>
        </WagmiConfig>
      </QueryClientProvider>
    </div>
  );
}
