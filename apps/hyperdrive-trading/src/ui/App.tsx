import { ReactElement, useMemo } from "react";
import {
  createBrowserRouter,
  Outlet,
  redirect,
  RouterProvider,
} from "react-router-dom";
import { Markets } from "src/pages/Markets";
import { Trade } from "src/pages/Trade";
import { Navbar } from "src/ui/app/Navbar/Navbar";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { useLocalStorage } from "src/ui/base/hooks/useLocalStorage";

const LASTED_VIEWED_MARKET_KEY = "last-viewed-market";

function BaseLayout(): ReactElement {
  return (
    <div className="flex h-full flex-col">
      <Navbar />
      <Outlet />
    </div>
  );
}

export function App(): ReactElement {
  const { appConfig } = useAppConfig();
  if (appConfig) {
    // eslint-disable-next-line no-console
    console.log("appConfig", appConfig);
  }

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
              return redirect(`/trade/${appConfig?.hyperdrives[0].address}`);
            },
          },
          {
            path: "/trade/:address",
            element: <Trade />,
            loader: ({ params }) => {
              const market = appConfig?.hyperdrives.find(
                (market) => market.address === params.address,
              );

              if (market) {
                setLastViewedMarket(market.address);
                return market;
              }

              // we fall back to the first market in the config
              // this should rarely happen
              return redirect(`/trade/${appConfig?.hyperdrives[0].address}`);
            },
          },
        ],
      },
    ]);
    /* eslint-disable-next-line  react-hooks/exhaustive-deps */
  }, [appConfig]);

  return (
    <div className="flex h-full flex-col overflow-auto bg-base-100">
      <RouterProvider router={router} />
    </div>
  );
}
