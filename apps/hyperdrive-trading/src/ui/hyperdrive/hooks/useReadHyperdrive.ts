import { ReadHyperdrive } from "@delvtech/hyperdrive-viem";
import {
  findHyperdriveConfig,
  findYieldSourceToken,
} from "@hyperdrive/appconfig";
import { useMemo } from "react";
import { getReadHyperdrive } from "src/hyperdrive/getReadHyperdrive";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { Address } from "viem";
import { usePublicClient } from "wagmi";

export function useReadHyperdrive(
  address: Address | undefined,
): ReadHyperdrive | undefined {
  const publicClient = usePublicClient();

  const appConfig = useAppConfig();

  const hyperdriveConfig = address
    ? findHyperdriveConfig({
        hyperdriveAddress: address,
        hyperdrives: appConfig.hyperdrives,
      })
    : undefined;
  const sharesToken = hyperdriveConfig
    ? findYieldSourceToken({
        yieldSourceTokenAddress: hyperdriveConfig.sharesToken,
        tokens: appConfig.tokens,
      })
    : undefined;

  return useMemo(() => {
    if (!address || !publicClient || !sharesToken) {
      return undefined;
    }

    return getReadHyperdrive({
      hyperdriveAddress: address,
      publicClient,
      sharesToken,
    });
  }, [address, publicClient, sharesToken]);
}
