import { Long } from "@delvtech/hyperdrive-viem";
import { HyperdriveConfig } from "@hyperdrive/appconfig";
import { useQuery } from "@tanstack/react-query";
import { ZERO_ADDRESS } from "src/base/constants";
import { makeQueryKey } from "src/base/makeQueryKey";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import { Address } from "viem";

interface UseOpenLongsOptions {
  account: Address | undefined;
  hyperdriveAddress: Address | undefined;
}

/**
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

export function useAllOpenLongs({
  account,
  hyperdriveAddress,
}: UseOpenLongsOptions): {
  allOpenLongs:
    | { id: bigint; value: bigint; details: Long | undefined }[]
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
          const allLongs = await readHyperdrive.getAllOpenLongs({ account });
          const promises = allLongs.map(async (long) => {
            const details = await readHyperdrive.getOpenLongDetails({
              assetId: long.id,
            });
            return {
              id: long.id,
              value: long.value,
              details: long.from === ZERO_ADDRESS ? details : undefined,
            };
          });
          return Promise.all(promises);
        }
      : undefined,
  });

  return { allOpenLongs, allOpenLongsStatus };
}

export function useOpenLongsWithDetails({
  hyperdrive,
  longs,
}: {
  hyperdrive: HyperdriveConfig;
  longs: { id: bigint; value: bigint; from: `0x${string}` }[] | undefined;
}): {
  openLongsWithDetails:
    | { id: bigint; value: bigint; details: Long | undefined }[]
    | undefined;
  openLongsWithDetailsStatus: "error" | "success" | "loading";
} {
  const readHyperdrive = useReadHyperdrive(hyperdrive.address);
  const queryEnabled = !!readHyperdrive && !!longs;

  const { data: openLongsWithDetails, status: openLongsWithDetailsStatus } =
    useQuery({
      enabled: queryEnabled,
      queryKey: makeQueryKey("openLongsWithDetails", {
        hyperdriveAddress: hyperdrive.address,
      }),
      queryFn: queryEnabled
        ? async () => {
            const promises = longs.map(async (long) => {
              const details = await readHyperdrive.getOpenLongDetails({
                assetId: long.id,
              });
              return {
                id: long.id,
                value: long.value,
                details: long.from === ZERO_ADDRESS ? details : undefined,
              };
            });
            return Promise.all(promises);
          }
        : undefined,
    });

  return { openLongsWithDetails, openLongsWithDetailsStatus };
}
