// This file is auto-generated by TanStack Router

// Import Routes

import { Route as IndexImport } from "./ui/routes/index";
import { Route as MarketAddressImport } from "./ui/routes/market.$address";
import { Route as MarketsImport } from "./ui/routes/markets";
import { Route as rootRoute } from "./ui/routes/__root";

// Create/Update Routes

const MarketsRoute = MarketsImport.update({
  path: "/markets",
  getParentRoute: () => rootRoute,
} as any);

const IndexRoute = IndexImport.update({
  path: "/",
  getParentRoute: () => rootRoute,
} as any);

const MarketAddressRoute = MarketAddressImport.update({
  path: "/market/$address",
  getParentRoute: () => rootRoute,
} as any);

// Populate the FileRoutesByPath interface

declare module "@tanstack/react-router" {
  interface FileRoutesByPath {
    "/": {
      preLoaderRoute: typeof IndexImport;
      parentRoute: typeof rootRoute;
    };
    "/markets": {
      preLoaderRoute: typeof MarketsImport;
      parentRoute: typeof rootRoute;
    };
    "/market/$address": {
      preLoaderRoute: typeof MarketAddressImport;
      parentRoute: typeof rootRoute;
    };
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexRoute,
  MarketsRoute,
  MarketAddressRoute,
]);
