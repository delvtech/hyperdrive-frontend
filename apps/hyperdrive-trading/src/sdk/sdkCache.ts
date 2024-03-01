import { createLruSimpleCache } from "@delvtech/hyperdrive-viem";

// 1 minute TTL to match the queryClient's staleTime
export const sdkCache = createLruSimpleCache({ max: 500, ttl: 60_000 });
