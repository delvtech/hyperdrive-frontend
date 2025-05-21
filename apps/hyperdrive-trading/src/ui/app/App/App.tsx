import { ReactElement, StrictMode } from "react";

import { createRouter, RouterProvider } from "@tanstack/react-router";

// Import the generated route tree
import { routeTree } from "src/routeTree.gen";
import { useClearLocalStorageOnNewVersion } from "src/ui/version/useClearLocalStorageOnNewVersion";
import { useAccount, useAccountEffect } from "wagmi";

// Create a new router instance
const router = createRouter({
  routeTree,
  basepath: import.meta.env.VITE_BASE_PATH,
});

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export function App(): ReactElement | null {
  useClearLocalStorageOnNewVersion();

  const { address: account } = useAccount();
  useAccountEffect({
    onConnect: ({ address }) =>
      window.plausible("walletConnect", {
        props: { connectedWallet: address },
      }),
    onDisconnect: () =>
      window.plausible("walletDisconnect", {
        props: { connectedWallet: account },
      }),
  });

  return (
    <div className="flex h-full flex-col">
      <StrictMode>
        <RouterProvider router={router} />
      </StrictMode>
    </div>
  );
}
