import { ReadHyperdrive } from "@delvtech/hyperdrive-viem";
import {
  findHyperdriveConfig,
  findYieldSourceToken,
} from "@hyperdrive/appconfig";
import { useEffect, useState } from "react";
import { getReadHyperdrive } from "src/hyperdrive/getReadHyperdrive";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { Address } from "viem";
import { usePublicClient } from "wagmi";

export function useReadHyperdrive(
  address: Address | undefined
): ReadHyperdrive | undefined {
  const [readHyperdrive, setReadHyperdrive] = useState<ReadHyperdrive>();

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

  const publicClient = usePublicClient();
  useEffect(() => {
    if (!address || !publicClient || !sharesToken) {
      return undefined;
    }
    getReadHyperdrive({
      hyperdriveAddress: address,
      publicClient,
      sharesToken,
    }).then(setReadHyperdrive);
  }, [address, publicClient, sharesToken]);

  return readHyperdrive;
}
