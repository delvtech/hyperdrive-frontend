import { HyperdriveConfig } from "@delvtech/hyperdrive-appconfig";
import { getHyperdrive } from "@delvtech/hyperdrive-js";
import { useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { getDrift } from "src/network/drift";
import { useAppConfigForConnectedChain } from "src/ui/appconfig/useAppConfigForConnectedChain";
import { Address } from "viem";

type LpPosition = {
  hyperdrive: HyperdriveConfig;
  lpShares: bigint;
  withdrawalShares: bigint;
};

export function usePortfolioLpDataFromHyperdrives({
  hyperdrives,
  account,
}: {
  hyperdrives: HyperdriveConfig[];
  account: Address | undefined;
}): {
  openLpPositions: LpPosition[] | undefined;
  openLpPositionStatus: "error" | "success" | "loading";
} {
  const queryEnabled = !!account && !!hyperdrives.length;
  const { data, status } = useQuery({
    queryKey: makeQueryKey("portfolioLp", {
      account,
      hyperdrives: hyperdrives.map((h) => ({
        chainId: h.chainId.toString(),
        address: h.address,
      })),
    }),
    queryFn: queryEnabled
      ? async () => {
          const results = await Promise.all(
            hyperdrives.map(async (hyperdrive) => {
              const readHyperdrive = await getHyperdrive({
                address: hyperdrive.address,
                drift: getDrift({ chainId: hyperdrive.chainId }),
                earliestBlock: hyperdrive.initializationBlock,
              });

              const [lpShares, withdrawalShares] = await Promise.all([
                readHyperdrive.getLpShares({ account }),
                readHyperdrive.getWithdrawalShares({ account }),
              ]);

              return {
                hyperdrive,
                lpShares,
                withdrawalShares,
              };
            }),
          );
          return results;
        }
      : undefined,
    enabled: queryEnabled,
  });

  return {
    openLpPositions: data,
    openLpPositionStatus: status,
  };
}

// TODO: This eventually will need to be removed but it's currently being used at the top level of the LP Portfolio container to determine if there are any LP positions to display.
export function usePortfolioLpData({
  account,
}: {
  account: Address | undefined;
}): {
  openLpPositions: LpPosition[] | undefined;
  openLpPositionStatus: "error" | "success" | "loading";
} {
  const appConfigForConnectedChain = useAppConfigForConnectedChain();
  const queryEnabled =
    !!account && !!appConfigForConnectedChain.hyperdrives.length;

  const { data, status } = useQuery({
    queryKey: makeQueryKey("portfolioLp", { account }),
    queryFn: queryEnabled
      ? async () => {
          const results = await Promise.all(
            appConfigForConnectedChain.hyperdrives.map(async (hyperdrive) => {
              const readHyperdrive = await getHyperdrive({
                address: hyperdrive.address,
                drift: getDrift({ chainId: hyperdrive.chainId }),
                earliestBlock: hyperdrive.initializationBlock,
              });

              const [lpShares, withdrawalShares] = await Promise.all([
                readHyperdrive.getLpShares({ account }),
                readHyperdrive.getWithdrawalShares({ account }),
              ]);

              return {
                hyperdrive,
                lpShares,
                withdrawalShares,
              };
            }),
          );

          return results;
        }
      : undefined,
    enabled: queryEnabled,
  });

  return {
    openLpPositions: data,
    openLpPositionStatus: status,
  };
}
