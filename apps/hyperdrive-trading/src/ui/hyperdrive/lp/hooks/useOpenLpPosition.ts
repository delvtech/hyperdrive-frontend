import { getHyperdriveConfig } from "@delvtech/hyperdrive-appconfig";
import { useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { useAppConfigForConnectedChain } from "src/ui/appconfig/useAppConfigForConnectedChain";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import { Address } from "viem";
export function useOpenLpPosition({
  account,
  chainId,
  hyperdriveAddress,
}: {
  account: Address | undefined;
  chainId: number;
  hyperdriveAddress: Address | undefined;
}): {
  lpShareBalance: bigint;
  baseAmountPaid: bigint;
  baseValue: bigint;
  sharesValue: bigint;
  openLpPositionStatus: "loading" | "error" | "success";
} {
  const readHyperdrive = useReadHyperdrive({
    chainId,
    address: hyperdriveAddress,
  });
  const appConfig = useAppConfigForConnectedChain();
  const queryEnabled = !!hyperdriveAddress && !!readHyperdrive && !!account;
  const { data, status: openLpPositionStatus } = useQuery({
    queryKey: makeQueryKey("openLpPosition", {
      account,
      hyperdriveAddress,
      chainId,
    }),
    queryFn: queryEnabled
      ? () => {
          const hyperdriveConfig = getHyperdriveConfig({
            hyperdriveChainId: chainId,
            hyperdriveAddress,
            appConfig,
          });
          return readHyperdrive.getOpenLpPosition({
            account,
            asBase:
              hyperdriveConfig.withdrawOptions.isBaseTokenWithdrawalEnabled,
          });
        }
      : undefined,
    enabled: queryEnabled,
  });
  return {
    lpShareBalance: data?.lpShareBalance ?? 0n,
    baseAmountPaid: data?.baseAmountPaid ?? 0n,
    baseValue: data?.baseValue ?? 0n,
    sharesValue: data?.sharesValue ?? 0n,
    openLpPositionStatus,
  };
}
