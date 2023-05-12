import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { ReactElement, useMemo } from "react";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "react-query";
import {
  createBrowserRouter,
  Outlet,
  redirect,
  RouterProvider,
} from "react-router-dom";
import { useConfig } from "src/config/hooks/useConfig";
import { Markets } from "src/pages/Markets";
import { Portfolio } from "src/pages/Portfolio";
import { Trade } from "src/pages/Trade";
import { wagmiChains, wagmiConfig } from "src/wallet/wagmiClient";
import { WagmiConfig } from "wagmi";
import { Navbar } from "./base/components/Navbar";
import { useLocalStorage } from "./base/hooks/useLocalStorage";

const LASTED_VIEWED_MARKET_KEY = "last-viewed-market";

function BaseLayout(): ReactElement {
  return (
    <div className="flex h-full min-h-screen flex-col bg-gradient-to-b from-base-200 to-base-300">
      <Navbar />
      <Outlet />
    </div>
  );
}

const queryClient = new QueryClient();

export function App(): ReactElement {
  const config = useConfig();

  const [lastViewedMarket, setLastViewedMarket] = useLocalStorage<
    string | undefined
  >(LASTED_VIEWED_MARKET_KEY, undefined);

  const router = useMemo(() => {
    return createBrowserRouter([
      {
        path: "/",
        element: <BaseLayout />,
        children: [
          {
            path: "/",
            element: <Markets />,
          },
          {
            path: "markets",
            element: <Markets />,
          },
          {
            path: "/trade",
            loader: () => {
              if (lastViewedMarket) {
                return redirect(`/trade/${lastViewedMarket}`);
              }
              // we fall back to the first market in the config
              // this should rarely happen
              return redirect(`/trade/${config.markets[0].address}`);
            },
          },
          {
            path: "/trade/:address",
            element: <Trade />,
            loader: ({ params }) => {
              const market = config.markets.find(
                (market) => market.address === params.address,
              );

              if (market) {
                setLastViewedMarket(market.address);
                return market;
              } else {
                if (lastViewedMarket) {
                  return redirect(`/trade/${lastViewedMarket}`);
                }
                // we fall back to the first market in the config
                // this should rarely happen
                return redirect(`/trade/${config.markets[0].address}`);
              }
            },
          },
          {
            path: "/portfolio",
            element: <Portfolio />,
          },
        ],
      },
    ]);
    /* eslint-disable-next-line  react-hooks/exhaustive-deps */
  }, [config]);

  return (
    <QueryClientProvider client={queryClient}>
      <Toaster position="bottom-left" reverseOrder={false} />
      <WagmiConfig config={wagmiConfig}>
        <RainbowKitProvider chains={wagmiChains}>
          <div className="flex h-full min-h-screen flex-col bg-gradient-to-b from-base-200 to-base-300">
            <RouterProvider router={router} />
          </div>
        </RainbowKitProvider>
      </WagmiConfig>
    </QueryClientProvider>
  );
}
