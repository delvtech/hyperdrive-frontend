import { useQuery } from "@tanstack/react-query";
import { useMatchRoute, useNavigate } from "@tanstack/react-router";
import { failedRequestToast } from "src/ui/base/components/Toaster/failedRequestToast";
import { useAccount } from "wagmi";

const url = import.meta.env.VITE_ADDRESS_SCREEN_URL;

type AddressScreenResult = {
  isBlocked?: boolean;
  error?: string;
  enabled: boolean;
};

export function useAddressScreen(): AddressScreenResult {
  const matchRoute = useMatchRoute();
  const { address } = useAccount();
  const navigate = useNavigate();
  const enabled = !!url && !!address;
  const { data: result, error } = useQuery<APIResponse>({
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

  if (error) {
    failedRequestToast();
  }

  const isBlocked = result?.data === false;

  if (isBlocked && !matchRoute({ to: "/ineligible" })) {
    navigate({ to: "/ineligible" });
  } else if (result?.error && !matchRoute({ to: "/error" })) {
    if (import.meta.env.DEV) {
      console.error(result?.error);
    }
    navigate({ to: "/error" });
  }

  return {
    enabled,
    error: result?.error ? String(result?.error) : undefined,
    isBlocked,
  };
}

interface APIResponse {
  status: number;
  /**
   * false if the address is ineligible
   */
  data: boolean | null;
  error: string | null;
}
