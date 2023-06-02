import { ReactElement, useMemo } from "react";
import {
  createBrowserRouter,
  Outlet,
  redirect,
  RouterProvider,
} from "react-router-dom";
import { Markets } from "src/pages/Markets";
import { Trade } from "src/pages/Trade";
import { Navbar } from "src/ui/base/components/Navbar";
import { useLocalStorage } from "src/ui/base/hooks/useLocalStorage";
import { useAppConfig } from "src/ui/config/useAppConfig";

const LASTED_VIEWED_MARKET_KEY = "last-viewed-market";

function BaseLayout(): ReactElement {
  return (
    <div className="flex h-full min-h-screen flex-col bg-gradient-to-b from-base-200 to-base-300">
      <Navbar />
      <Outlet />
    </div>
  );
}

export function App(): ReactElement {
  const { appConfig } = useAppConfig();

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
              return redirect(`/trade/${appConfig?.markets[0].address}`);
            },
          },
          {
            path: "/trade/:address",
            element: <Trade />,
            loader: ({ params }) => {
              const market = appConfig?.markets.find(
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
                return redirect(`/trade/${appConfig?.markets[0].address}`);
              }
            },
          },
        ],
      },
    ]);
    /* eslint-disable-next-line  react-hooks/exhaustive-deps */
  }, [appConfig]);

  return (
    <div className="flex h-full min-h-screen flex-col bg-gradient-to-b from-base-200 to-base-300">
      <RouterProvider router={router} />
    </div>
  );
}
