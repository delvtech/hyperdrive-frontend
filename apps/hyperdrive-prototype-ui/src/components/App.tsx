import { lightTheme, RainbowKitProvider, Theme } from "@rainbow-me/rainbowkit";
import merge from "lodash.merge";
import { IndexPage } from "pages/IndexPage";
import { MarketPage } from "pages/MarketPage";
import { ReactElement } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { WagmiConfig } from "wagmi";
import { chains, wagmiClient } from "wallet/wagmiClient";
import { Navbar } from "./Navbar";

const queryClient = new QueryClient();

export function App(): ReactElement {
  return (
    <div className="box-border h-full min-h-screen bg-zinc-900 pb-12">
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
                <Route path="/" element={<IndexPage />} />
                <Route path="/market/:address" element={<MarketPage />} />
              </Routes>
            </BrowserRouter>
          </RainbowKitProvider>
        </WagmiConfig>
      </QueryClientProvider>
    </div>
  );
}
