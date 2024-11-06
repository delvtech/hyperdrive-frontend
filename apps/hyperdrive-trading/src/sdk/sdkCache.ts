import { createLruSimpleCache } from "@delvtech/drift";

// 1 minute TTL to match the queryClient's staleTime
export const sdkCache = createLruSimpleCache({ max: 500, ttl: 60_000 });
