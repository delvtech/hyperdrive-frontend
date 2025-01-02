import { useMatch } from "@tanstack/react-router";
import { getMarketAnalyticsUrl } from "src/ui/analytics/getMarketAnalyticsUrl";
import { MARKET_DETAILS_ROUTE } from "src/ui/markets/routes";
import { Address } from "viem";

// Default analytics URL
const DEFAULT_ANALYTICS_URL = "https://hyperdrive.blockanalitica.com";

/**
 * Returns the market-specific BlockAnalytica URL or the default URL if not on a
 * market details page.
 */
export function useAnalyticsUrl(): string {
  // Check if the current route matches the market details page
  // https://tanstack.com/router/latest/docs/framework/react/api/router/useMatchHook#checking-if-a-specific-route-is-currently-rendered
  const matchesMarketDetailsRoute = useMatch({
    from: MARKET_DETAILS_ROUTE,
    shouldThrow: false,
  });

  // Return default URL if not on a market details page
  if (!matchesMarketDetailsRoute) {
    return DEFAULT_ANALYTICS_URL;
  }

  // Generate market-specific analytics URL, this returns undefined for testnet chains
  const marketAnalyticsUrl = getMarketAnalyticsUrl({
    chainId: Number(matchesMarketDetailsRoute.params.chainId),
    hyperdrive: matchesMarketDetailsRoute.params.address as Address,
  });

  // Return the market-specific URL if available, otherwise default URL
  return marketAnalyticsUrl || DEFAULT_ANALYTICS_URL;
}
