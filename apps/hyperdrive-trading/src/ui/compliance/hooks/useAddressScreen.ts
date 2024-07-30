import { useQuery } from "@tanstack/react-query";
import { useMatchRoute, useNavigate } from "@tanstack/react-router";
import { useAccount } from "wagmi";

const url = import.meta.env.VITE_ADDRESS_SCREEN_URL;

type AddressScreenResult = {
  isBlocked?: boolean;
  error?: string;
};

export function useAddressScreen(): AddressScreenResult & {
  enabled: boolean;
} {
  const { address } = useAccount();
  const navigate = useNavigate();
  const enabled = !!url && !!address;
  const { data: result, error: queryError } = useQuery<APIResponse>({
    queryKey: ["address-screen", address],
    enabled,
    staleTime: Infinity,
    retry: 6,
    queryFn: () =>
      fetch(url, {
        method: "POST",
        body: JSON.stringify({ address }),
      }).then((res) => res.json()),
  });

  const isBlocked = result?.data === false;
  const isIneligibleRoute = !!useMatchRoute()({ to: "/ineligible" });
  if (isBlocked && !isIneligibleRoute) {
    navigate({ to: "/ineligible" });
  }

  const error = result?.error || queryError;
  const isErrorRoute = !!useMatchRoute()({ to: "/error" });
  if (error && !isErrorRoute) {
    if (import.meta.env.DEV) {
      console.error(error);
    }
    navigate({ to: "/error" });
  }

  return {
    enabled,
    error: error ? String(error) : undefined,
    isBlocked,
  };
}

interface APIResponse {
  /**
   * false if the address is ineligible
   */
  status: number;
  data: boolean | null;
  error: string | null;
}
