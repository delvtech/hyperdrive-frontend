import { useQuery } from "@tanstack/react-query";
import { useMatchRoute, useNavigate } from "@tanstack/react-router";
import { makeQueryKey } from "src/base/makeQueryKey";
import { failedRequestToast } from "src/ui/base/components/Toaster/failedRequestToast";

const url = import.meta.env.VITE_VPN_SCREEN_URL;

interface VpnScreenResult extends ApiResponse {
  enabled: boolean;
}

export function useVpnScreen(): VpnScreenResult {
  const matchRoute = useMatchRoute();
  const navigate = useNavigate();
  const enabled = !!url;
  const { data: result, error } = useQuery<ApiResponse>({
    queryKey: makeQueryKey("vpn-screen", url),
    staleTime: Infinity,
    enabled,
    retry: 2,
    retryDelay: 1000,
    queryFn: () => fetch(url, { method: "POST" }).then((res) => res.json()),
  });

  if (error) {
    failedRequestToast();
  }

  if (result?.isBlocked && !matchRoute({ to: "/vpn" })) {
    navigate({ to: "/vpn" });
  } else if (result?.error && !matchRoute({ to: "/error" })) {
    if (import.meta.env.DEV) {
      console.error(result?.error);
    }
    navigate({ to: "/error" });
  }

  return {
    enabled,
    error: result?.error ? String(result?.error) : undefined,
    isBlocked: result?.isBlocked,
  };
}

type ApiResponse = {
  isBlocked?: boolean;
  error?: string;
};
