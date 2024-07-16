import { useQuery } from "@tanstack/react-query";

const url = import.meta.env.VITE_VPN_SCREEN_URL;

type VpnScreenData =
  | {
      isBlocked: boolean;
      error: undefined;
    }
  | {
      isBlocked: undefined;
      error: string;
    };

export function useVpnScreen(): VpnScreenData | undefined {
  const { data } = useQuery<VpnScreenData>({
    queryKey: ["vpn-screen"],
    staleTime: Infinity,
    retry: 6,
    queryFn: () => fetch(url, { method: "POST" }).then((res) => res.json()),
  });

  return data;
}
