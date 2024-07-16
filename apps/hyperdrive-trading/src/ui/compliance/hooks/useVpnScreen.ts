import { useQuery } from "@tanstack/react-query";

const url = import.meta.env.VITE_VPN_SCREEN_URL;

interface VpnScreenResult {
  enabled: boolean;
  queryError?: unknown;
  screenResult?:
    | {
        isBlocked: boolean;
        error: undefined;
      }
    | {
        isBlocked: undefined;
        error: string;
      };
}

export function useVpnScreen(): VpnScreenResult {
  const enabled = !!url;
  const { data, error } = useQuery<VpnScreenResult["screenResult"]>({
    queryKey: ["vpn-screen"],
    staleTime: Infinity,
    enabled,
    retry: 2,
    retryDelay: 1000,
    queryFn: () => fetch(url, { method: "POST" }).then((res) => res.json()),
  });
  return {
    enabled,
    queryError: error,
    screenResult: data,
  };
}
