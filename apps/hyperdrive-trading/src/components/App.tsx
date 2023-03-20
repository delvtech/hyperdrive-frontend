import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { Index } from "pages/Index";
import { Markets } from "pages/Markets";
import { Portfolio } from "pages/Portfolio";
import { Trade } from "pages/Trade";
import { ReactElement } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { WagmiConfig } from "wagmi";
import { chains, wagmiClient } from "wallet/wagmiClient";
import { Navbar } from "./Navbar";

const queryClient = new QueryClient();

export function App(): ReactElement {
  return (
    <div className="h-screen bg-bg-base">
      <QueryClientProvider client={queryClient}>
        <WagmiConfig client={wagmiClient}>
          <RainbowKitProvider chains={chains}>
            <BrowserRouter>
              <Navbar />
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/markets" element={<Markets />} />
                <Route path="/trade" element={<Trade />} />
                <Route path="/portfolio" element={<Portfolio />} />
              </Routes>
            </BrowserRouter>
          </RainbowKitProvider>
        </WagmiConfig>
      </QueryClientProvider>
    </div>
  );
}
