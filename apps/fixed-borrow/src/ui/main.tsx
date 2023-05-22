import "@rainbow-me/rainbowkit/styles.css";
import "react-loading-skeleton/dist/skeleton.css";
import "src/ui/index.css";

import { darkTheme, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import { queryClient } from "src/network/queryClient";
import { chains, wagmiConfig } from "src/network/wagmiClient";
import BorrowPage from "src/ui/graveyard/BorrowPage/BorrowPage";
import { WagmiConfig } from "wagmi";
import { SkeletonTheme } from "react-loading-skeleton";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FixedBorrowPage } from "src/ui/coverage/FixedBorrowPage/FixedBorrowPage";
import { AppHeader } from "src/ui/app/AppHeader";
import Page from "src/ui/base/Page/Page";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <WagmiConfig config={wagmiConfig}>
        <RainbowKitProvider chains={chains} theme={darkTheme()}>
          <SkeletonTheme
            baseColor="var(--color-inputBg)"
            highlightColor="var(--color-dawn)"
          >
            <BrowserRouter>
              <Routes>
                <Route
                  path="/"
                  element={
                    <Page
                      header={<AppHeader />}
                      content={<FixedBorrowPage />}
                    />
                  }
                />
                <Route
                  path="/graveyard"
                  element={
                    <Page header={<AppHeader />} content={<BorrowPage />} />
                  }
                />
              </Routes>
            </BrowserRouter>
          </SkeletonTheme>
        </RainbowKitProvider>
      </WagmiConfig>
    </QueryClientProvider>
  </React.StrictMode>,
);
