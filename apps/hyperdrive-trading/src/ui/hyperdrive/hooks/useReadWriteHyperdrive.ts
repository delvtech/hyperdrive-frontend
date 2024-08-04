import type { ReadWriteHyperdrive } from "@delvtech/hyperdrive-viem";
import {
  findHyperdriveConfig,
  findYieldSourceToken,
} from "@hyperdrive/appconfig";
import { useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { getReadWriteHyperdrive } from "src/hyperdrive/getReadWriteHyperdrive";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import type { Address } from "viem";
import { usePublicClient, useWalletClient } from "wagmi";

export function useReadWriteHyperdrive(
  address: Address | undefined,
): ReadWriteHyperdrive | undefined {
  const publicClient = usePublicClient();
  const { data: walletClient } = useWalletClient();

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

  const enabled =
    !!address && !!publicClient && !!walletClient && !!sharesToken;

  const { data } = useQuery({
    queryKey: makeQueryKey("getReadWriteHyperdrive", {
      address,
      sharesToken: sharesToken?.address,
    }),
    enabled,
    queryFn: enabled
      ? () =>
          getReadWriteHyperdrive({
            hyperdriveAddress: address,
            publicClient,
            walletClient,
            sharesToken,
          })
      : undefined,
  });

  return data;
}
