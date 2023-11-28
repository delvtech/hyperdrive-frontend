import { ReactElement } from "react";
import {
  Outlet,
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom";
import { Landing } from "src/pages/Landing";
import { Markets } from "src/pages/Markets";
import TestPage from "src/pages/Test";
import { Market } from "src/pages/market";
import Footer from "src/ui/app/Footer/Footer";
import { Navbar } from "src/ui/app/Navbar/Navbar";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";

function BaseLayout(): ReactElement {
  return (
    <div className="flex h-full flex-col items-center">
      <Navbar />
      <Outlet />
      <Footer />
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
          path: "/test",
          element: <TestPage />,
        },
        {
          path: "/market/:address",
          element: <Market />,
          loader: ({ params }) => {
            const market = appConfig?.hyperdrives.find(
              (market) => market.address === params.address,
            );

            if (market) {
              return market;
            }

            // we fall back to the first market in the config
            // this should rarely happen
            return redirect(`/market/${appConfig?.hyperdrives[0].address}`);
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
