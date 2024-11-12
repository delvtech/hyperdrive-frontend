import { appConfig, getHyperdriveConfig } from "@delvtech/hyperdrive-appconfig";
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { makeQueryKey } from "src/base/makeQueryKey";
import { convertSharesToBase } from "src/hyperdrive/convertSharesToBase";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import { Address, Hash } from "viem";
export interface TransactionData {
  assetId?: bigint;
  baseAmount: bigint;
  bondAmount?: bigint;
  withdrawalShares?: bigint;
  eventName: string;
  trader: Address;
  lpSharePrice?: bigint;
  blockNumber: bigint | undefined;
  transactionHash: Hash | undefined;
}

export function useTransactionData({
  hyperdriveAddress,
  account,
  chainId,
}: {
  account?: Address;
  hyperdriveAddress: Address;
  chainId: number;
}): {
  data: TransactionData[] | undefined;
  isLoading: boolean;
} {
  const readHyperdrive = useReadHyperdrive({
    chainId,
    address: hyperdriveAddress,
  });

  const { decimals } = getHyperdriveConfig({
    hyperdriveAddress,
    hyperdriveChainId: chainId,
    appConfig,
  });

  const { data: longs, status: longEventsStatus } = useQuery({
    queryKey: makeQueryKey("longEvents", {
      chainId,
      hyperdriveAddress,
      account,
    }),
    enabled: !!readHyperdrive,
    queryFn: !!readHyperdrive
      ? async () =>
          readHyperdrive.getLongEvents({
            filter: { trader: account },
          })
      : undefined,
  });

  const { data: shorts, status: shortEventsStatus } = useQuery({
    queryKey: makeQueryKey("shortEvents", {
      chainId,
      hyperdriveAddress,
      account,
    }),
    enabled: !!readHyperdrive,
    queryFn: !!readHyperdrive
      ? async () =>
          readHyperdrive.getShortEvents({
            filter: { trader: account },
          })
      : undefined,
  });
  const { data: lpEvents, status: lpEventsStatus } = useQuery({
    queryKey: makeQueryKey("lpEvents", { chainId, hyperdriveAddress, account }),
    enabled: !!readHyperdrive,
    queryFn: !!readHyperdrive
      ? async () =>
          readHyperdrive.getLpEvents({
            filter: { provider: account },
          })
      : undefined,
  });

  // It's important to memoize this table data because creating new arrays of
  // the same data will cause infinite renders in the TransactionTable.
  // Note: Sorting isn't necessary here as that is handled by react-table
  const data = useMemo(() => {
    const data = [];
    if (longs) {
      data.push(...[...longs].reverse().slice(0, 100));
    }
    if (shorts) {
      data.push(...[...shorts].reverse().slice(0, 100));
    }
    if (lpEvents) {
      data.push(
        ...[...lpEvents.addLiquidity]
          .reverse()
          .slice(0, 100)
          .map(({ args, blockNumber, eventName, transactionHash }) => ({
            trader: args.provider,
            baseAmount: args.asBase
              ? args.amount
              : convertSharesToBase({
                  sharesAmount: args.amount,
                  vaultSharePrice: args.vaultSharePrice,
                  decimals,
                }),
            lpSharePrice: args.lpSharePrice,
            eventName,
            blockNumber,
            transactionHash,
          })),
      );
      data.push(
        ...[...lpEvents.removeLiquidity]
          .reverse()
          .slice(0, 100)
          .map(({ args, blockNumber, eventName, transactionHash }) => ({
            trader: args.provider,
            baseAmount: args.asBase
              ? args.amount
              : convertSharesToBase({
                  sharesAmount: args.amount,
                  vaultSharePrice: args.vaultSharePrice,
                  decimals,
                }),
            withdrawalShares: args.withdrawalShareAmount,
            lpSharePrice: args.lpSharePrice,
            eventName,
            blockNumber,
            transactionHash,
          })),
      );
      data.push(
        ...[...lpEvents.redeemWithdrawalShares]
          .reverse()
          .slice(0, 100)
          .map(({ args, blockNumber, eventName, transactionHash }) => ({
            trader: args.provider,
            baseAmount: args.asBase
              ? args.amount
              : convertSharesToBase({
                  sharesAmount: args.amount,
                  vaultSharePrice: args.vaultSharePrice,
                  decimals,
                }),
            eventName,
            blockNumber,
            transactionHash,
          })),
      );
    }

    return data;
  }, [decimals, longs, lpEvents, shorts]);

  return {
    data,
    isLoading:
      longEventsStatus === "loading" ||
      shortEventsStatus === "loading" ||
      lpEventsStatus === "loading",
  };
}
