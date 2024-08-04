import { type ReactElement, StrictMode } from "react";

import { RouterProvider, createRouter } from "@tanstack/react-router";

// Import the generated route tree
import { routeTree } from "src/routeTree.gen";
import { useClearLocalStorageOnNewVersion } from "src/ui/version/useClearLocalStorageOnNewVersion";

// Create a new router instance
const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export function App(): ReactElement | null {
  useClearLocalStorageOnNewVersion();

  return (
    <div className="flex h-full flex-col">
      <StrictMode>
        <RouterProvider router={router} />
      </StrictMode>
    </div>
  );
}
