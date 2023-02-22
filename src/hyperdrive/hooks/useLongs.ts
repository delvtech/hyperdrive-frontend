import { BigNumber, constants, Contract } from "ethers";
import { multiTokenABI } from "generated";
import { Market } from "hyperdrive/types";
import { getAssetPrefixFromTokenId } from "hyperdrive/utils";
import { useQuery } from "react-query";
import { Address, useProvider } from "wagmi";

interface Long {
  amount: string;
  id: string;
  createdAt: Date;
}

export function useLongs(account: Address | undefined, market: Market) {
  // const events = useMultiTokenTransferSingleEvent({
  //   address: market.address,
  //   listener(node, label, owner) {
  //     console.log(node, label, owner);
  //   },
  // });

  const provider = useProvider();

  return useQuery({
    queryKey: ["long-history", account],
    enabled: !!account && !!provider,
    queryFn: async () => {
      const multiTokenContract = new Contract(
        market.address,
        multiTokenABI,
        provider,
      );

      const mintEventFilter = multiTokenContract.filters.TransferSingle(
        undefined,
        constants.AddressZero,
        account,
      );
      const mintEvents = await multiTokenContract.queryFilter(
        mintEventFilter,
        0,
        "latest",
      );

      const burnEventFilter = multiTokenContract.filters.TransferSingle(
        undefined,
        account,
        constants.AddressZero,
      );
      const burnEvents = await multiTokenContract.queryFilter(
        burnEventFilter,
        0,
        "latest",
      );

      // filter long opens from all mint events
      const longMintEvents = mintEvents.filter((event) => {
        const longId: BigNumber = event.args?.id;
        return getAssetPrefixFromTokenId(longId) === 0;
      });

      // filter long closes from all burn events
      const longBurnEvents = burnEvents.filter((event) => {
        const longId: BigNumber = event.args?.id;
        return getAssetPrefixFromTokenId(longId) === 0;
      });

      const closedLongs: Long[] = longBurnEvents.map((event) => {
        // const longId: BigNumber = event.args?.id;

        const amount: string = (event.args?.value as BigNumber).toString();
        const id: string = (event.args?.id as BigNumber).toString();

        // console.log(getAssetTimestampFromTokenId(longId));
        return {
          id,
          amount,
          createdAt: new Date(),
        };
      });

      // todo support partial closing
      const closedLongIds: Set<string> = new Set(
        closedLongs.map((long) => long.id),
      );

      const openLongs: Long[] = longMintEvents
        .map((event) => {
          // const longId: BigNumber = event.args?.id;

          const amount: string = (event.args?.value as BigNumber).toString();
          const id: string = (event.args?.id as BigNumber).toString();

          // console.log(getAssetTimestampFromTokenId(longId));
          return {
            id,
            amount,
            createdAt: new Date(),
          };
        })
        .filter((long) => !closedLongIds.has(long.id));

      return { openLongs, closedLongs };
    },
  });
}
