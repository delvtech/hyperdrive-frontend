import {
  ServerErrorResponse,
  ServerHealthHandlerResponse,
} from "@delvtech/gopher";
import { QueryStatus, useQuery } from "@tanstack/react-query";
import { gopher } from "src/ui/bridge/api";

export const useChains = (): {
  health: ServerHealthHandlerResponse | undefined;
  status: QueryStatus;
} => {
  const result = useQuery<ServerHealthHandlerResponse, ServerErrorResponse>({
    queryKey: ["gopher", "health"],
    queryFn: async () => {
      const response = await gopher.health.healthList();
      return response.data;
    },
  });

  return result;
};
