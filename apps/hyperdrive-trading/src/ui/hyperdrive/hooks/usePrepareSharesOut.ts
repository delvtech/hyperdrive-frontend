import { ReadHyperdrive } from "@delvtech/hyperdrive-viem";
import { AppConfig, findHyperdriveConfig } from "@hyperdrive/appconfig";
import { useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { QueryStatusWithIdle, getStatus } from "src/base/queryStatus";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import { Address } from "viem";

export function usePrepareSharesOut({
  sharesAmount,
  hyperdriveAddress,
  chainId,
  enabled = true,
}: {
  sharesAmount: bigint | undefined;
  chainId: number;
  hyperdriveAddress: Address;
  enabled?: boolean;
}): {
  amount: bigint | undefined;
  status: QueryStatusWithIdle;
} {
  const appConfig = useAppConfig();
  const readHyperdrive = useReadHyperdrive({
    chainId,
    address: hyperdriveAddress,
  });

  const queryEnabled =
    !!readHyperdrive && sharesAmount !== undefined && enabled;
  const { data, status, fetchStatus } = useQuery({
    queryKey: makeQueryKey("prepare-shares-amount-out", {
      hyperdrive: hyperdriveAddress,
      amount: sharesAmount?.toString(),
    }),
    enabled: queryEnabled,
    queryFn: queryEnabled
      ? () =>
          prepareSharesOut({
            appConfig,
            chainId,
            sharesAmount,
            readHyperdrive,
          })
      : undefined,
  });

  return {
    amount: data,
    status: getStatus(status, fetchStatus),
  };
}

export async function prepareSharesOut({
  appConfig,
  chainId,
  sharesAmount,
  readHyperdrive,
}: {
  appConfig: AppConfig;
  chainId: number;
  sharesAmount: bigint;
  readHyperdrive: ReadHyperdrive;
}): Promise<bigint> {
  if (sharesAmount === 0n) {
    return sharesAmount;
  }

  const hyperdriveConfig = findHyperdriveConfig({
    hyperdriveChainId: chainId,
    hyperdrives: appConfig.hyperdrives,
    hyperdriveAddress: readHyperdrive.address,
  });

  // If the shares token is pegged to its base token (e.g., stETH to ETH), then
  // we need to treat the shares amount out as base. To get the actual shares
  // amount then, we convert to base. For example, when preparing lido shares
  // received back from a steth hyperdrive, this will convert lido shares to
  // eth, and since 1 eth = 1 steth we return this as the shares value.
  if (
    appConfig.yieldSources[hyperdriveConfig.yieldSource].isSharesPeggedToBase
  ) {
    return readHyperdrive.convertToBase({
      sharesAmount,
    });
  }

  // If the shares token from the hyperdrive pool is already in the format
  // required by ui, return the original shares amount without any conversion.
  return sharesAmount;
}
