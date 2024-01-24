import { ReactElement, StrictMode } from "react";
import Footer from "src/ui/app/Footer/Footer";
import { Navbar } from "src/ui/app/Navbar/Navbar";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";

import { Router, RouterProvider } from "@tanstack/react-router";

// Import the generated route tree
import { Landing } from "src/pages/Landing";
import { routeTree } from "src/routeTree.gen";

// Create a new router instance
const router = new Router({ routeTree });

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function BaseLayout(): ReactElement {
  return (
    <div className="flex h-full flex-col items-center">
      <Navbar />
      <Landing />
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

  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <BaseLayout />,
  //     children: [
  //       {
  //         path: "/",
  //         element: <Landing />,
  //       },
  //       {
  //         path: "/markets",
  //         element: <Markets />,
  //       },
  //       {
  //         path: "/market/:address",
  //         element: <Market />,
  //         loader: ({ params }) => {
  //           const market = appConfig?.hyperdrives.find(
  //             (market) => market.address === params.address,
  //           );

  //           if (market) {
  //             return market;
  //           }

  //           // we fall back to the first market in the config
  //           // this should rarely happen
  //           return redirect(`/market/${appConfig?.hyperdrives[0].address}`);
  //         },
  //       },
  //     ],
  //   },
  // ]);

  return (
    <div className="flex h-full flex-col overflow-auto">
      <StrictMode>
        <RouterProvider router={router} />
      </StrictMode>
    </div>
  );
}
