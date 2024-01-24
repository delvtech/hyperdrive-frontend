// This file is auto-generated by TanStack Router

// Import Routes

import { Route as MarketsImport } from "./routes/Markets";
import { Route as rootRoute } from "./routes/__root";

// Create/Update Routes

const MarketsRoute = MarketsImport.update({
  path: "/Markets",
  getParentRoute: () => rootRoute,
} as any);

// Populate the FileRoutesByPath interface

declare module "@tanstack/react-router" {
  interface FileRoutesByPath {
    "/Markets": {
      preLoaderRoute: typeof MarketsImport;
      parentRoute: typeof rootRoute;
    };
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([MarketsRoute]);
