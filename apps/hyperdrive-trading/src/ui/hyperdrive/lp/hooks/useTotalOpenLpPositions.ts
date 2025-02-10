import {
  getHyperdriveConfig,
  HyperdriveConfig,
} from "@delvtech/hyperdrive-appconfig";
import { getHyperdrive } from "@delvtech/hyperdrive-js";
import { useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { getDrift } from "src/drift/getDrift";
import { useAppConfigForConnectedChain } from "src/ui/appconfig/useAppConfigForConnectedChain";
import { Address } from "viem";
export function useTotalOpenLpPositions({
  account,
  openLpPositions,
  enabled = true,
}: {
  account: Address | undefined;
  openLpPositions:
    | {
        hyperdrive: HyperdriveConfig;
        lpShares: bigint;
        withdrawalShares: bigint;
      }[]
    | undefined;
  enabled: boolean;
}): {
  totalOpenLpPositions: bigint | undefined;
  isLoading: boolean;
  totalOpenLpPositionsError: Error;
} {
  const queryEnabled = !!account && !!openLpPositions && enabled;
  const appConfig = useAppConfigForConnectedChain();
  const {
    data: totalOpenLpPositions,
    isLoading,
    error: totalOpenLpPositionsError,
  } = useQuery({
    queryKey: makeQueryKey("totalLpPositions", {
      account,
      openLpPositions: openLpPositions?.map((p) => ({
        hyperdrive: p.hyperdrive.address,
        lpShares: p.lpShares.toString(),
        withdrawalShares: p.withdrawalShares.toString(),
      })),
    }),
    enabled: queryEnabled,
    queryFn: queryEnabled
      ? async () => {
          const openLpPositionValues = await Promise.all(
            openLpPositions.map(async (position) => {
              const readHyperdrive = await getHyperdrive({
                address: position.hyperdrive.address,
                drift: getDrift({ chainId: position.hyperdrive.chainId }),
                earliestBlock: position.hyperdrive.initializationBlock,
                zapContractAddress:
                  appConfig.zaps[position.hyperdrive.chainId].address,
              });
              const openLpPosition = await readHyperdrive.getOpenLpPosition({
                account,
                asBase: getHyperdriveConfig({
                  hyperdriveChainId: position.hyperdrive.chainId,
                  hyperdriveAddress: position.hyperdrive.address,
                  appConfig,
                }).withdrawOptions.isBaseTokenWithdrawalEnabled,
              });
              return {
                baseValue: openLpPosition.baseValue,
              };
            }),
          );

          let total = 0n;
          openLpPositionValues.forEach((openLpPositionValue) => {
            total += openLpPositionValue.baseValue || 0n;
          });

          return total;
        }
      : undefined,
  });

  return {
    totalOpenLpPositions,
    isLoading,
    totalOpenLpPositionsError: totalOpenLpPositionsError as Error,
  };
}
