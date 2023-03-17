import { midnightTheme, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { Index } from "pages/Index";
import { ReactElement } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { WagmiConfig } from "wagmi";
import { chains, wagmiClient } from "wallet/wagmiClient";
import { Navbar } from "./Navbar";

const queryClient = new QueryClient();

export function App(): ReactElement {
  return (
    <div className="h-screen">
      <QueryClientProvider client={queryClient}>
        <WagmiConfig client={wagmiClient}>
          <RainbowKitProvider chains={chains} theme={midnightTheme()}>
            <Navbar />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
              </Routes>
            </BrowserRouter>
          </RainbowKitProvider>
        </WagmiConfig>
      </QueryClientProvider>
    </div>
  );
}
