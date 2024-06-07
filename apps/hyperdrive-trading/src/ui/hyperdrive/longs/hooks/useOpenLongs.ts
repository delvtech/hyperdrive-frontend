import { Long } from "@delvtech/hyperdrive-viem";
import { useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import { Address } from "viem";

interface UseOpenLongsOptions {
  account: Address | undefined;
  hyperdriveAddress: Address | undefined;
}

/**
 * @deprecated Use useAllOpenLongs instead to include longs that have been transferred to the account from another address.
 * Returns the list of longs that the account currently has open.
 */
export function useOpenLongs({
  account,
  hyperdriveAddress,
}: UseOpenLongsOptions): {
  openLongs: Long[] | undefined;
  openLongsStatus: "error" | "success" | "loading";
} {
  const readHyperdrive = useReadHyperdrive(hyperdriveAddress);
  const queryEnabled = !!readHyperdrive && !!account;
  const { data: openLongs, status: openLongsStatus } = useQuery({
    enabled: queryEnabled,
    queryKey: makeQueryKey("openLongs", { account, hyperdriveAddress }),
    queryFn: queryEnabled
      ? () => readHyperdrive.getOpenLongs({ account })
      : undefined,
  });

  return { openLongs, openLongsStatus };
}

/**
 * Returns the list of longs the account currently has open. This includes longs that have been transferred to the account from another address.
 */
export function useAllOpenLongs({
  account,
  hyperdriveAddress,
}: UseOpenLongsOptions): {
  allOpenLongs:
    | {
        id: bigint;
        value: bigint;
        maturity: bigint;
        details: Long | undefined;
      }[]
    | undefined;
  allOpenLongsStatus: "error" | "success" | "loading";
} {
  const readHyperdrive = useReadHyperdrive(hyperdriveAddress);
  const queryEnabled = !!readHyperdrive && !!account && !!hyperdriveAddress;
  const { data: allOpenLongs, status: allOpenLongsStatus } = useQuery({
    enabled: queryEnabled,
    queryKey: makeQueryKey("allOpenLongs", { account, hyperdriveAddress }),
    queryFn: queryEnabled
      ? async () => {
          const openLongs: {
            id: bigint;
            value: bigint;
            maturity: bigint;
            details: Long | undefined;
          }[] = [];
          const allLongs = await readHyperdrive.getOpenLongPositions({
            account,
          });
          allLongs.forEach(async (long) => {
            openLongs.push({
              id: long.assetId,
              value: long.value,
              maturity: long.maturity,
              details: await readHyperdrive.getOpenLongDetails({
                assetId: long.assetId,
                account,
              }),
            });
          });

          return openLongs;
        }
      : undefined,
  });

  return { allOpenLongs, allOpenLongsStatus };
}
