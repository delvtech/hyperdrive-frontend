import { ReactElement, StrictMode } from "react";

import { Router, RouterProvider } from "@tanstack/react-router";

// Import the generated route tree
import { routeTree } from "src/routeTree.gen";
import { useAppConfigOld } from "src/ui/appconfig/useAppConfigOld";

// Create a new router instance
const router = new Router({ routeTree });

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export function App(): ReactElement | null {
  const appConfig = useAppConfigOld();
  if (appConfig) {
    // eslint-disable-next-line no-console
    console.log("appConfig", appConfig);
  }

  if (!appConfig) {
    return null;
  }
  return (
    <div className="flex h-full flex-col overflow-auto">
      <StrictMode>
        <RouterProvider router={router} />
      </StrictMode>
    </div>
  );
}
