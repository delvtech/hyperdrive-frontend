import { ReactElement, StrictMode } from "react";

import { Router, RouterProvider } from "@tanstack/react-router";

// Import the generated route tree
import { routeTree } from "src/routeTree.gen";
import { useClearLocalStorageOnNewVersion } from "src/ui/version/useClearLocalStorageOnNewVersion";

// Create a new router instance
const router = new Router({ routeTree });

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export function App(): ReactElement | null {
  useClearLocalStorageOnNewVersion();

  return (
    <div className="flex h-full flex-col overflow-auto">
      <StrictMode>
        <RouterProvider router={router} />
      </StrictMode>
    </div>
  );
}
