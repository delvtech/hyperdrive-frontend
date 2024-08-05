import { useQuery } from "@tanstack/react-query";
import { useMatchRoute, useNavigate } from "@tanstack/react-router";
import { makeQueryKey } from "src/base/makeQueryKey";

const url = import.meta.env.VITE_VPN_SCREEN_URL;

interface VpnScreenResult extends ApiResponse {
  enabled: boolean;
}

export function useVpnScreen(): VpnScreenResult {
  const matchRoute = useMatchRoute();
  const navigate = useNavigate();
  const enabled = !!url;
  const { data: result, error: queryError } = useQuery<ApiResponse>({
    queryKey: makeQueryKey("vpn-screen", url),
    staleTime: Infinity,
    enabled,
    retry: 2,
    retryDelay: 1000,
    queryFn: () => fetch(url, { method: "POST" }).then((res) => res.json()),
  });

  const error = result?.error || queryError;

  if (result?.isBlocked && !matchRoute({ to: "/vpn" })) {
    navigate({ to: "/vpn" });
  } else if (error && !matchRoute({ to: "/error" })) {
    if (import.meta.env.DEV) {
      // biome-ignore lint/nursery/noConsole:
      console.error(error);
    }
    navigate({ to: "/error" });
  }

  return {
    enabled,
    error: error ? String(error) : undefined,
    isBlocked: result?.isBlocked,
  };
}

type ApiResponse = {
  isBlocked?: boolean;
  error?: string;
};
