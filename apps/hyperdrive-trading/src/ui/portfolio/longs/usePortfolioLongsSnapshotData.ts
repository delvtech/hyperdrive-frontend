import { HyperdriveConfig } from "@delvtech/hyperdrive-appconfig";
import {
  hyperdriveAbi,
  OpenLongPositionReceived,
} from "@delvtech/hyperdrive-js";
import { useQuery } from "@tanstack/react-query";
import { makeQueryKey, makeQueryKey2 } from "src/base/makeQueryKey";
import { getDrift } from "src/drift/getDrift";
import { POSITIONS_SNAPSHOT } from "src/hyperdrive/positionsSnapshot";
import { useAppConfigForConnectedChain } from "src/ui/appconfig/useAppConfigForConnectedChain";
import type { OpenLongPositionsData } from "src/ui/portfolio/longs/usePortfolioLongsData";
import { Address } from "viem";

export function usePortfolioLongsSnapshotData({
  account,
}: {
  account: Address | undefined;
}): {
  openLongPositions: OpenLongPositionsData | undefined;
  openLongPositionsStatus: "error" | "success" | "loading";
} {
  const appConfigForConnectedChain = useAppConfigForConnectedChain();
  const queryEnabled = !!account && !!appConfigForConnectedChain;
  const { data: openLongPositions, status: openLongPositionsStatus } = useQuery(
    {
      queryKey: makeQueryKey("portfolioLongs", { account }),
      enabled: queryEnabled,
      queryFn: queryEnabled
        ? async () => {
            const openLongsByHyperdrive = new Map<
              HyperdriveConfig,
              {
                hyperdrive: HyperdriveConfig;
                openLongs: OpenLongPositionReceived[];
              }
            >();

            await Promise.all(
              POSITIONS_SNAPSHOT.longs.map(async (long) => {
                if (long.accountAddress !== account) {
                  return;
                }

                const hyperdrive = appConfigForConnectedChain.hyperdrives.find(
                  (h) =>
                    h.chainId === long.chainId &&
                    h.address.toLowerCase() ===
                      long.hyperdriveAddress.toLowerCase(),
                );
                if (!hyperdrive) {
                  return;
                }

                const drift = await getDrift({ chainId: long.chainId });
                const currentBalance = await drift.read({
                  abi: hyperdriveAbi,
                  address: long.hyperdriveAddress,
                  fn: "balanceOf",
                  args: {
                    owner: long.accountAddress,
                    tokenId: long.assetId,
                  },
                });
                if (!currentBalance) {
                  return;
                }

                if (!openLongsByHyperdrive.has(hyperdrive)) {
                  openLongsByHyperdrive.set(hyperdrive, {
                    hyperdrive,
                    openLongs: [],
                  });
                }

                openLongsByHyperdrive.get(hyperdrive)!.openLongs.push({
                  assetId: long.assetId,
                  maturity: long.maturity,
                  value: long.bondAmount,
                  details: {
                    assetId: long.assetId,
                    baseAmountPaid: long.baseAmountPaid,
                    bondAmount: long.bondAmount,
                    maturity: long.maturity,
                  },
                });
              }),
            );

            return Array.from(openLongsByHyperdrive.values());
          }
        : undefined,
    },
  );

  return {
    openLongPositions,
    openLongPositionsStatus,
  };
}

export function usePortfolioLongsSnapshotDataFromHyperdrives({
  hyperdrives,
  account,
}: {
  hyperdrives: HyperdriveConfig[];
  account: Address | undefined;
}): {
  openLongPositions:
    | (OpenLongPositionReceived & { hyperdrive: HyperdriveConfig })[]
    | undefined;
  openLongPositionsStatus: "error" | "success" | "loading";
} {
  const queryEnabled = !!account && !!hyperdrives.length;
  const { data: openLongPositions, status: openLongPositionsStatus } = useQuery(
    {
      queryKey: makeQueryKey2({
        namespace: "portfolio",
        queryId: "openLongPositions",
        params: { account, hyperdrives },
      }),
      queryFn: queryEnabled
        ? async () => {
            const openLongs: (OpenLongPositionReceived & {
              hyperdrive: HyperdriveConfig;
            })[] = [];

            await Promise.all(
              POSITIONS_SNAPSHOT.longs.map(async (long) => {
                if (
                  long.accountAddress.toLowerCase() !==
                  account.toLocaleLowerCase()
                ) {
                  return;
                }

                const hyperdrive = hyperdrives.find(
                  (h) =>
                    h.chainId === long.chainId &&
                    h.address.toLowerCase() ===
                      long.hyperdriveAddress.toLowerCase(),
                );
                if (!hyperdrive) {
                  return;
                }

                const drift = await getDrift({ chainId: long.chainId });
                const currentBalance = await drift.read({
                  abi: hyperdriveAbi,
                  address: long.hyperdriveAddress,
                  fn: "balanceOf",
                  args: {
                    owner: long.accountAddress,
                    tokenId: long.assetId,
                  },
                });
                if (!currentBalance) {
                  return;
                }

                openLongs.push({
                  hyperdrive,
                  assetId: long.assetId,
                  maturity: long.maturity,
                  value: long.bondAmount,
                  details: {
                    assetId: long.assetId,
                    baseAmountPaid: long.baseAmountPaid,
                    bondAmount: long.bondAmount,
                    maturity: long.maturity,
                  },
                });
              }),
            );

            return openLongs;
          }
        : undefined,
      enabled: queryEnabled,
    },
  );

  return {
    openLongPositions,
    openLongPositionsStatus,
  };
}
