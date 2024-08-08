import { ReadHyperdrive } from "@delvtech/hyperdrive-viem";
import { AppConfig, findHyperdriveConfig } from "@hyperdrive/appconfig";
import { useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { QueryStatusWithIdle, getStatus } from "src/base/queryStatus";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import { Address } from "viem";

export function usePrepareSharesIn({
  sharesAmount,
  hyperdriveAddress,
  enabled,
}: {
  sharesAmount: bigint | undefined;
  hyperdriveAddress: Address;
  enabled: boolean;
}): {
  amount: bigint | undefined;
  status: QueryStatusWithIdle;
} {
  const appConfig = useAppConfig();
  const readHyperdrive = useReadHyperdrive(hyperdriveAddress);

  const queryEnabled =
    !!readHyperdrive && sharesAmount !== undefined && enabled;
  const { data, status, fetchStatus } = useQuery({
    queryKey: makeQueryKey("prepare-shares-amount-in", {
      hyperdrive: hyperdriveAddress,
      amount: sharesAmount?.toString(),
    }),
    enabled: queryEnabled,
    queryFn: queryEnabled
      ? () =>
          prepareSharesIn({
            appConfig,
            hyperdriveAddress,
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
  hyperdriveAddress,
  sharesAmount,
  readHyperdrive,
}: {
  appConfig: AppConfig;
  hyperdriveAddress: Address;
  sharesAmount: bigint;
  readHyperdrive: ReadHyperdrive;
}): Promise<bigint> {
  const hyperdriveConfig = findHyperdriveConfig({
    hyperdrives: appConfig.hyperdrives,
    hyperdriveAddress: hyperdriveAddress,
  });

  // If the shares token is pegged to its base token (e.g., stETH to ETH), then
  // we need to treat the amount as if it were base. To get the actual shares
  // amount then, we convert to the shares used by the pool (eg: lidoShares).
  if (
    appConfig.yieldSources[hyperdriveConfig.yieldSource].isSharesPeggedToBase
  ) {
    return readHyperdrive.convertToShares({
      baseAmount: sharesAmount,
    });
  }

  // If the shares token is already in the format required by the hyperdrive
  // pool, return the original shares amount without any conversion.
  return sharesAmount;
}
