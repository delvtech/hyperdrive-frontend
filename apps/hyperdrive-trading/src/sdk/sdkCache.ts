import { createLruSimpleCache } from "@delvtech/hyperdrive-viem";

export const querySdkCache = createLruSimpleCache({ max: 500 });
