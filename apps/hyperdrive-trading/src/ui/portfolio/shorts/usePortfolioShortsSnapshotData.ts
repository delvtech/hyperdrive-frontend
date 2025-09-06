import { HyperdriveConfig } from "@delvtech/hyperdrive-appconfig";
import { hyperdriveAbi, OpenShort } from "@delvtech/hyperdrive-js";
import { useQuery } from "@tanstack/react-query";
import { makeQueryKey, makeQueryKey2 } from "src/base/makeQueryKey";
import { getDrift } from "src/drift/getDrift";
import { POSITIONS_SNAPSHOT } from "src/hyperdrive/positionsSnapshot";
import { useAppConfigForConnectedChain } from "src/ui/appconfig/useAppConfigForConnectedChain";
import type { OpenShortPositionsData } from "src/ui/portfolio/shorts/usePortfolioShortsData";
import { Address } from "viem";

export function usePortfolioShortsSnapshotData({
  account,
}: {
  account: Address | undefined;
}): {
  openShortPositions: OpenShortPositionsData | undefined;
  openShortPositionsStatus: "error" | "success" | "loading";
} {
  const appConfigForConnectedChain = useAppConfigForConnectedChain();
  const queryEnabled = !!account && !!appConfigForConnectedChain;

  const { data: openShortPositions, status: openShortPositionsStatus } =
    useQuery({
      queryKey: makeQueryKey("portfolioShorts", { account }),
      enabled: queryEnabled,
      queryFn: queryEnabled
        ? async () => {
            const openShortsByHyperdrive = new Map<
              HyperdriveConfig,
              {
                hyperdrive: HyperdriveConfig;
                openShorts: OpenShort[];
              }
            >();

            await Promise.all(
              POSITIONS_SNAPSHOT.shorts.map(async (short) => {
                if (
                  short.accountAddress.toLowerCase() !== account.toLowerCase()
                ) {
                  return;
                }

                const hyperdrive = appConfigForConnectedChain.hyperdrives.find(
                  (h) =>
                    h.chainId === short.chainId &&
                    h.address.toLowerCase() ===
                      short.hyperdriveAddress.toLowerCase(),
                );
                if (!hyperdrive) {
                  return;
                }

                const drift = await getDrift({ chainId: short.chainId });
                const currentBalance = await drift.read({
                  abi: hyperdriveAbi,
                  address: short.hyperdriveAddress,
                  fn: "balanceOf",
                  args: {
                    owner: short.accountAddress,
                    tokenId: short.assetId,
                  },
                });
                if (!currentBalance) {
                  return;
                }

                if (!openShortsByHyperdrive.has(hyperdrive)) {
                  openShortsByHyperdrive.set(hyperdrive, {
                    hyperdrive,
                    openShorts: [],
                  });
                }

                openShortsByHyperdrive.get(hyperdrive)!.openShorts.push({
                  assetId: short.assetId,
                  baseAmountPaid: short.baseAmountPaid,
                  baseProceeds: short.baseProceeds,
                  bondAmount: short.bondAmount,
                  checkpointTime: short.checkpointTime,
                  fixedRatePaid: short.fixedRatePaid,
                  hyperdriveAddress: short.hyperdriveAddress,
                  maturity: short.maturity,
                  openedTimestamp: short.openedTimestamp,
                });
              }),
            );

            return Array.from(openShortsByHyperdrive.values());
          }
        : undefined,
    });
  return {
    openShortPositions,
    openShortPositionsStatus,
  };
}

export function usePortfolioShortsSnapshotDataFromHyperdrives({
  hyperdrives,
  account,
}: {
  hyperdrives: HyperdriveConfig[];
  account: Address | undefined;
}): {
  openShortPositions:
    | (OpenShort & { hyperdrive: HyperdriveConfig })[]
    | undefined;
  openShortPositionsStatus: "error" | "success" | "loading";
} {
  const queryEnabled = !!account && !!hyperdrives.length;
  const { data: openShortPositions, status: openShortPositionsStatus } =
    useQuery({
      queryKey: makeQueryKey2({
        namespace: "portfolio",
        queryId: "openShortPositions",
        params: { account, hyperdrives },
      }),
      queryFn: queryEnabled
        ? async () => {
            const openShorts: (OpenShort & {
              hyperdrive: HyperdriveConfig;
            })[] = [];

            await Promise.all(
              POSITIONS_SNAPSHOT.shorts.map(async (short) => {
                if (
                  short.accountAddress.toLowerCase() !== account.toLowerCase()
                ) {
                  return;
                }

                const hyperdrive = hyperdrives.find(
                  (h) =>
                    h.chainId === short.chainId &&
                    h.address.toLowerCase() ===
                      short.hyperdriveAddress.toLowerCase(),
                );
                if (!hyperdrive) {
                  return;
                }

                const drift = await getDrift({ chainId: short.chainId });
                const currentBalance = await drift.read({
                  abi: hyperdriveAbi,
                  address: short.hyperdriveAddress,
                  fn: "balanceOf",
                  args: {
                    owner: short.accountAddress,
                    tokenId: short.assetId,
                  },
                });
                if (!currentBalance) {
                  return;
                }

                openShorts.push({
                  hyperdrive,
                  assetId: short.assetId,
                  baseAmountPaid: short.baseAmountPaid,
                  baseProceeds: short.baseProceeds,
                  bondAmount: short.bondAmount,
                  checkpointTime: short.checkpointTime,
                  fixedRatePaid: short.fixedRatePaid,
                  hyperdriveAddress: short.hyperdriveAddress,
                  maturity: short.maturity,
                  openedTimestamp: short.openedTimestamp,
                });
              }),
            );

            return openShorts;
          }
        : undefined,
      enabled: queryEnabled,
    });

  return {
    openShortPositions,
    openShortPositionsStatus,
  };
}
