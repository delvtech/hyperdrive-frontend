import { ReadHyperdrive } from "@delvtech/hyperdrive-viem";
import {
  findHyperdriveConfig,
  findYieldSourceToken,
} from "@hyperdrive/appconfig";
import { useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { getReadHyperdrive } from "src/hyperdrive/getReadHyperdrive";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { Address } from "viem";
import { usePublicClient } from "wagmi";

export function useReadHyperdrive(
  address: Address | undefined,
): ReadHyperdrive | undefined {
  const appConfig = useAppConfig();
  const publicClient = usePublicClient();
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

  const enabled = !!address && !!publicClient && !!sharesToken;

  const { data } = useQuery({
    queryKey: makeQueryKey("getReadHyperdrive", {
      address,
      sharesToken: sharesToken?.address,
    }),
    enabled,
    queryFn: enabled
      ? () =>
          getReadHyperdrive({
            hyperdriveAddress: address,
            publicClient,
            sharesToken,
          })
      : undefined,
  });

  return data;
}
