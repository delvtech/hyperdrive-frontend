import { LruSimpleCache } from "@hyperdrive/sdk";
import { queryClient } from "src/network/queryClient";
import { QueryCacheSdk } from "./queryCache";

export const sdkCache = new LruSimpleCache({ max: 500 });

export const querySdkCache = new QueryCacheSdk(queryClient);
