import {
  ServerErrorResponse,
  ServerHealthHandlerResponse,
} from "@delvtech/gopher";
import { QueryStatus, useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { gopher } from "src/ui/bridge/api";

export const useChains = (): {
  health: ServerHealthHandlerResponse | undefined;
  status: QueryStatus;
} => {
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
};
