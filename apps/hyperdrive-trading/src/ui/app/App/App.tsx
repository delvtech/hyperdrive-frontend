import { ReactElement, StrictMode } from "react";

import { createRouter, RouterProvider } from "@tanstack/react-router";

// Import the generated route tree
import { routeTree } from "src/routeTree.gen";
import { useClearLocalStorageOnNewVersion } from "src/ui/version/useClearLocalStorageOnNewVersion";
import { useAccountEffect } from "wagmi";

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
  useAccountEffect({
    onConnect: () => window.plausible("wallet:connect"),
    onDisconnect: () => window.plausible("wallet:disconnect"),
  });

  return (
    <div className="flex h-full flex-col">
      <StrictMode>
        <RouterProvider router={router} />
      </StrictMode>
    </div>
  );
}
