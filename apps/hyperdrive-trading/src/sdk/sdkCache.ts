import { LruSimpleCache } from "@hyperdrive/sdk";
import { QueryCacheSdk } from "./queryCache";

export const sdkCache = new LruSimpleCache({ max: 500 });

export const querySdkCache = new QueryCacheSdk();
