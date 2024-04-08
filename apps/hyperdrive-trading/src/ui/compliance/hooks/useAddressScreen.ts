import { useQuery } from "@tanstack/react-query";

const url = import.meta.env.VITE_ADDRESS_SCREEN_URL;

export default function useAddressScreen(address: string | null | undefined): {
  pass: boolean | null | undefined;
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
  return {
    pass: result?.data ?? undefined,
    error: result?.error ?? error,
  };
}

interface APIResponse {
  status: number;
  data: boolean | null;
  error: string | null;
}
