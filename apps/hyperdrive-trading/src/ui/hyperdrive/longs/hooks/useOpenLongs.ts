import { OpenLongReceived } from "@delvtech/hyperdrive-viem";
import { useQuery } from "@tanstack/react-query";
import { makeQueryKey } from "src/base/makeQueryKey";
import { useReadHyperdrive } from "src/ui/hyperdrive/hooks/useReadHyperdrive";
import { Address } from "viem";

interface UseOpenLongsOptions {
  account: Address | undefined;
  hyperdriveAddress: Address | undefined;
}

/**
 * Returns the list of longs the account currently has open. This includes longs that have been transferred to the account from another address.
 */
export function useOpenLongs({
  account,
  hyperdriveAddress,
}: UseOpenLongsOptions): {
  openLongsReceived: OpenLongReceived[] | undefined;
  openLongsReceivedStatus: "error" | "success" | "loading";
} {
  const readHyperdrive = useReadHyperdrive(hyperdriveAddress);
  const queryEnabled = !!readHyperdrive && !!account && !!hyperdriveAddress;
  const { data: openLongsReceived, status: openLongsReceivedStatus } = useQuery(
    {
      enabled: queryEnabled,
      queryKey: makeQueryKey("allOpenLongs", { account, hyperdriveAddress }),
      queryFn: queryEnabled
        ? async () => {
            const allLongs = await readHyperdrive.getOpenLongs({
              account,
            });

            const openLongPositionsReceived = await Promise.all(
              allLongs.map(async (long) => ({
                assetId: long.assetId,
                value: long.value,
                maturity: long.maturity,
                details: await readHyperdrive.getOpenLongDetails({
                  assetId: long.assetId,
                  account,
                }),
              })),
            );

            return openLongPositionsReceived;
          }
        : undefined,
    },
  );

  return { openLongsReceived, openLongsReceivedStatus };
}
