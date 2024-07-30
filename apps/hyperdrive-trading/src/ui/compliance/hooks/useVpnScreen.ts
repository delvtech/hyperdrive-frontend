import { useQuery } from "@tanstack/react-query";
import { useMatchRoute, useNavigate } from "@tanstack/react-router";
import { makeQueryKey } from "src/base/makeQueryKey";

const url = import.meta.env.VITE_VPN_SCREEN_URL;

type VpnScreenResult = {
  isBlocked?: boolean;
  error?: string;
};

export function useVpnScreen(): VpnScreenResult & {
  enabled: boolean;
} {
  const matchRoute = useMatchRoute();
  const navigate = useNavigate();
  const enabled = !!url;
  const { data: result, error: queryError } = useQuery<VpnScreenResult>({
    queryKey: makeQueryKey("vpn-screen", url),
    staleTime: Infinity,
    enabled,
    retry: 2,
    retryDelay: 1000,
    queryFn: () => fetch(url, { method: "POST" }).then((res) => res.json()),
  });

  if (result?.isBlocked === true && !matchRoute({ to: "/vpn" })) {
    navigate({ to: "/vpn" });
  }

  const error = result?.error || queryError;
  if (error && !matchRoute({ to: "/error" })) {
    if (import.meta.env.DEV) {
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
