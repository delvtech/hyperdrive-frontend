import type { HyperdriveConfig } from "src/index";
import type { Address } from "viem";

/**
 * Returns a strongly typed TokenConfig for the yield source token.
 */
export function findHyperdriveConfig({
  hyperdrives,
  hyperdriveAddress,
}: {
  hyperdrives: HyperdriveConfig[];
  hyperdriveAddress: Address;
}): HyperdriveConfig {
  const hyperdriveConfig = hyperdrives.find(
    (hyperdriveConfig) => hyperdriveConfig.address === hyperdriveAddress,
  );

  if (!hyperdriveConfig) {
    throw new Error(
      `Missing hyperdrive config ${hyperdriveAddress}. Make sure your appconfig's "hyperdrives" property is properly constructed.`,
    );
  }

  return hyperdriveConfig;
}
