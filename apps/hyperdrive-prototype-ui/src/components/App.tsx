import { lightTheme, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import merge from "lodash.merge";
import { ReactElement } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { IndexPage } from "src/pages/IndexPage";
import { MarketPage } from "src/pages/MarketPage";
import { chains, wagmiClient } from "src/wallet/wagmiClient";
import { WagmiConfig } from "wagmi";
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
            })}
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
