import { createLruSimpleCache } from "@delvtech/hyperdrive-viem";

export const sdkCache = createLruSimpleCache({ max: 500 });
