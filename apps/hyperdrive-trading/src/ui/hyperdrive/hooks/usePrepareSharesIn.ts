import {
  AppConfig,
  appConfig,
  getHyperdriveConfig,
  getYieldSource,
} from "@delvtech/hyperdrive-appconfig";
import { ReadHyperdrive } from "@delvtech/hyperdrive-js";
import { useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { QueryStatusWithIdle, getStatus } from "src/base/queryStatus";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import { Address } from "viem";

export function usePrepareSharesIn({
  sharesAmount,
  hyperdriveAddress,
  chainId,
  enabled,
}: {
  sharesAmount: bigint | undefined;
  hyperdriveAddress: Address;
  chainId: number;
  enabled: boolean;
}): {
  amount: bigint | undefined;
  status: QueryStatusWithIdle;
} {
  const readHyperdrive = useReadHyperdrive({
    chainId,
    address: hyperdriveAddress,
  });

  const queryEnabled =
    !!readHyperdrive && sharesAmount !== undefined && enabled;
  const { data, status, fetchStatus } = useQuery({
    queryKey: makeQueryKey("prepare-shares-amount-in", {
      hyperdrive: hyperdriveAddress,
      chainId,
      amount: sharesAmount?.toString(),
    }),
    enabled: queryEnabled,
    queryFn: queryEnabled
      ? () =>
          prepareSharesIn({
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

export async function prepareSharesIn({
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
  const hyperdriveConfig = getHyperdriveConfig({
    hyperdriveChainId: chainId,
    hyperdriveAddress: readHyperdrive.address,
    appConfig,
  });

  // If the shares token is pegged to its base token (e.g., stETH to ETH), then
  // we need to treat the amount as if it were base. To get the actual shares
  // amount then, we convert to the shares used by the pool (eg: lidoShares).
  const yieldSource = getYieldSource({
    hyperdriveAddress: hyperdriveConfig.address,
    hyperdriveChainId: hyperdriveConfig.chainId,
    appConfig,
  });
  if (yieldSource.isSharesPeggedToBase) {
    return readHyperdrive.convertToShares({
      baseAmount: sharesAmount,
    });
  }

  // If the shares token is already in the format required by the hyperdrive
  // pool, return the original shares amount without any conversion.
  return sharesAmount;
}
