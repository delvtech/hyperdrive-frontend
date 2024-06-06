import { Long } from "@delvtech/hyperdrive-viem";
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
            return {
              id: long.id,
              value: long.value,
              details:
                long.from === ZERO_ADDRESS
                  ? await readHyperdrive.getOpenLongDetails({
                      assetId: long.id,
                    })
                  : undefined,
            };
          });
          return Promise.all(promises);
        }
      : undefined,
  });

  return { allOpenLongs, allOpenLongsStatus };
}
