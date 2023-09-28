import { queryClient } from "src/network/queryClient";
import { QueryClientSimpleCache } from "./queryCache";

export const querySdkCache = new QueryClientSimpleCache(queryClient);
