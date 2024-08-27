/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from "./ui/routes/__root";
import { Route as BridgeImport } from "./ui/routes/bridge";
import { Route as ChainlogImport } from "./ui/routes/chainlog";
import { Route as ErrorImport } from "./ui/routes/error";
import { Route as IndexImport } from "./ui/routes/index";
import { Route as IneligibleImport } from "./ui/routes/ineligible";
import { Route as MarketChainIdAddressImport } from "./ui/routes/market.$chainId.$address";
import { Route as MarketsImport } from "./ui/routes/markets";
import { Route as PortfolioImport } from "./ui/routes/portfolio";
import { Route as RestrictedcountriesImport } from "./ui/routes/restricted_countries";
import { Route as VpnImport } from "./ui/routes/vpn";

// Create/Update Routes

const VpnRoute = VpnImport.update({
  path: "/vpn",
  getParentRoute: () => rootRoute,
} as any);

const RestrictedcountriesRoute = RestrictedcountriesImport.update({
  path: "/restricted_countries",
  getParentRoute: () => rootRoute,
} as any);

const PortfolioRoute = PortfolioImport.update({
  path: "/portfolio",
  getParentRoute: () => rootRoute,
} as any);

const MarketsRoute = MarketsImport.update({
  path: "/markets",
  getParentRoute: () => rootRoute,
} as any);

const IneligibleRoute = IneligibleImport.update({
  path: "/ineligible",
  getParentRoute: () => rootRoute,
} as any);

const ErrorRoute = ErrorImport.update({
  path: "/error",
  getParentRoute: () => rootRoute,
} as any);

const ChainlogRoute = ChainlogImport.update({
  path: "/chainlog",
  getParentRoute: () => rootRoute,
} as any);

const BridgeRoute = BridgeImport.update({
  path: "/bridge",
  getParentRoute: () => rootRoute,
} as any);

const IndexRoute = IndexImport.update({
  path: "/",
  getParentRoute: () => rootRoute,
} as any);

const MarketChainIdAddressRoute = MarketChainIdAddressImport.update({
  path: "/market/$chainId/$address",
  getParentRoute: () => rootRoute,
} as any);

// Populate the FileRoutesByPath interface

declare module "@tanstack/react-router" {
  interface FileRoutesByPath {
    "/": {
      preLoaderRoute: typeof IndexImport;
      parentRoute: typeof rootRoute;
    };
    "/bridge": {
      preLoaderRoute: typeof BridgeImport;
      parentRoute: typeof rootRoute;
    };
    "/chainlog": {
      preLoaderRoute: typeof ChainlogImport;
      parentRoute: typeof rootRoute;
    };
    "/error": {
      preLoaderRoute: typeof ErrorImport;
      parentRoute: typeof rootRoute;
    };
    "/ineligible": {
      preLoaderRoute: typeof IneligibleImport;
      parentRoute: typeof rootRoute;
    };
    "/markets": {
      preLoaderRoute: typeof MarketsImport;
      parentRoute: typeof rootRoute;
    };
    "/portfolio": {
      preLoaderRoute: typeof PortfolioImport;
      parentRoute: typeof rootRoute;
    };
    "/restricted_countries": {
      preLoaderRoute: typeof RestrictedcountriesImport;
      parentRoute: typeof rootRoute;
    };
    "/vpn": {
      preLoaderRoute: typeof VpnImport;
      parentRoute: typeof rootRoute;
    };
    "/market/$chainId/$address": {
      preLoaderRoute: typeof MarketChainIdAddressImport;
      parentRoute: typeof rootRoute;
    };
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexRoute,
  BridgeRoute,
  ChainlogRoute,
  ErrorRoute,
  IneligibleRoute,
  MarketsRoute,
  PortfolioRoute,
  RestrictedcountriesRoute,
  VpnRoute,
  MarketChainIdAddressRoute,
]);

/* prettier-ignore-end */
