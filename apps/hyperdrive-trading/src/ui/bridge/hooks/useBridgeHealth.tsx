import type {
  ServerErrorResponse,
  ServerHealthHandlerResponse,
} from "@delvtech/gopher";
import { type QueryStatus, useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { gopher } from "src/bridge/api";

export function useBridgeHealth(): {
  health: ServerHealthHandlerResponse | undefined;
  status: QueryStatus;
} {
  const result = useQuery<ServerHealthHandlerResponse, ServerErrorResponse>({
    queryKey: makeQueryKey("gopher", {
      route: "health/healthList",
    }),
    queryFn: async () => {
      const response = await gopher.health.healthList();
      return response.data;
    },
  });

  return { health: result.data, status: result.status };
}
