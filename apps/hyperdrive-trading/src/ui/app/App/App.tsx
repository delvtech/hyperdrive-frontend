import { ReactElement } from "react";
import {
  createBrowserRouter,
  Outlet,
  redirect,
  RouterProvider,
} from "react-router-dom";
import { Landing } from "src/pages/Landing";
import { Markets } from "src/pages/Markets";
import { Trade } from "src/pages/Trade";
import { Navbar } from "src/ui/app/Navbar/Navbar";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";

function BaseLayout(): ReactElement {
  return (
    <div className="flex h-full flex-col">
      <Navbar />
      <Outlet />
    </div>
  );
}

export function App(): ReactElement | null {
  const { appConfig } = useAppConfig();
  if (appConfig) {
    // eslint-disable-next-line no-console
    console.log("appConfig", appConfig);
  }

  if (!appConfig) {
    return null;
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <BaseLayout />,
      children: [
        {
          path: "/",
          element: <Landing />,
        },
        {
          path: "/markets",
          element: <Markets />,
        },
        {
          path: "/trade/:address",
          element: <Trade />,
          loader: ({ params }) => {
            const market = appConfig?.hyperdrives.find(
              (market) => market.address === params.address,
            );

            if (market) {
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

  return (
    <div className="flex h-full flex-col overflow-auto bg-base-100">
      <RouterProvider router={router} />
    </div>
  );
}
