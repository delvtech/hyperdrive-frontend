import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { ReactElement } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Index } from "src/pages/Index";
import { Markets } from "src/pages/Markets";
import { Portfolio } from "src/pages/Portfolio";
import { Trade } from "src/pages/Trade";
import { chains, wagmiClient } from "src/wallet/wagmiClient";
import { WagmiConfig } from "wagmi";
import { BottomNavbar } from "./base/components/BottomNavbar";
import { Navbar } from "./base/components/Navbar";

const queryClient = new QueryClient();

export function App(): ReactElement {
  return (
    <QueryClientProvider client={queryClient}>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains}>
          <BrowserRouter>
            <div className="flex flex-col h-full min-h-screen bg-gradient-to-b from-base-200 to-base-300">
              <Navbar />
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/markets" element={<Markets />} />
                <Route path="/trade" element={<Trade />} />
                <Route path="/portfolio" element={<Portfolio />} />
              </Routes>
              <BottomNavbar />
            </div>
          </BrowserRouter>
        </RainbowKitProvider>
      </WagmiConfig>
    </QueryClientProvider>
  );
}
