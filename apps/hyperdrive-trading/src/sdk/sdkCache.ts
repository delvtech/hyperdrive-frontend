import { LruSimpleCache } from "@hyperdrive/sdk";

export const sdkCache = new LruSimpleCache({ max: 500 });
