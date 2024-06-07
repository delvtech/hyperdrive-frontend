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

// /**
//  * Returns the list of longs the account currently has open. This includes longs that have been transferred to the account from another address.
//  */
// export function useAllOpenLongs({
//   account,
//   hyperdriveAddress,
// }: UseOpenLongsOptions): {
//   allOpenLongs: Long[] | undefined;
//   allOpenLongsStatus: "error" | "success" | "loading";
// } {
//   const readHyperdrive = useReadHyperdrive(hyperdriveAddress);
//   const queryEnabled = !!readHyperdrive && !!account && !!hyperdriveAddress;
//   const { data: allOpenLongs, status: allOpenLongsStatus } = useQuery({
//     enabled: queryEnabled,
//     queryKey: makeQueryKey("allOpenLongs", { account, hyperdriveAddress }),
//     queryFn: queryEnabled
//       ? async () => {
//           const openLongs: {
//             id: bigint;
//             value: bigint;
//             details: Long | undefined;
//           }[] = [];
//           const allLongs = await readHyperdrive.getOpenLongPositions({
//             account,
//           });

//           for (const long of allLongs) {
//             const existingLongIndex = openLongs.findIndex(
//               (l) => l.id === long.args.id,
//             );
//             const longWithDetails = await readHyperdrive.getOpenLongDetails({
//               assetId: long.args.id,
//               existingLong:
//                 existingLongIndex !== -1
//                   ? openLongs[existingLongIndex].details
//                   : undefined,
//             });

//             if (existingLongIndex !== -1) {
//               openLongs[existingLongIndex] = {
//                 id: long.args.id,
//                 value: long.args.value,
//                 details:
//                   long.args.from === ZERO_ADDRESS ? longWithDetails : undefined,
//               };
//             } else {
//               openLongs.push({
//                 id: long.args.id,
//                 value: long.args.value,
//                 details:
//                   long.args.from === ZERO_ADDRESS ? longWithDetails : undefined,
//               });
//             }
//           }
//           console.log("openLongs", openLongs);
//           return openLongs;
//         }
//       : undefined,
//   });

//   return { allOpenLongs, allOpenLongsStatus };
// }
