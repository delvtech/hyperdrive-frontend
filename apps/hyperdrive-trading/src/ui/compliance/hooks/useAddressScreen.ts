import { useQuery } from "@tanstack/react-query";

const url = import.meta.env.VITE_ADDRESS_SCREEN_URL;

export default function useAddressScreen(address: string | undefined): {
  isIneligible: boolean | null | undefined;
  error: unknown;
} {
  const { data: result, error } = useQuery<APIResponse>({
    queryKey: ["address-screen", address],
    enabled: !!url && !!address,
    staleTime: Infinity,
    retry: 6,
    queryFn: () =>
      fetch(url, {
        method: "POST",
        body: JSON.stringify({ address }),
      }).then((res) => res.json()),
  });

  const eligibleStatus = result?.data;

  return {
    isIneligible:
      typeof eligibleStatus === "boolean" ? !eligibleStatus : eligibleStatus,
    error: result?.error ?? error,
  };
}

interface APIResponse {
  status: number;
  data: boolean | null;
  error: string | null;
}
