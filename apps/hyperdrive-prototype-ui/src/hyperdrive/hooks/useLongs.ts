import { BigNumber, constants, Contract } from "ethers";
import { multiTokenABI } from "generated";
import { Long, Market } from "hyperdrive/types";
import { getAssetPrefixFromTokenId } from "hyperdrive/utils";
import { useQuery, UseQueryResult } from "react-query";
import { Address, useBlockNumber, useProvider } from "wagmi";

interface Longs {
  openLongs: {
    id: string;
    amount: BigNumber;
  }[];
  closedLongs: Long[];
}

export function useLongs(
  account: Address | undefined,
  market: Market,
): UseQueryResult<Longs> {
  const provider = useProvider();
  const { data: blockNumber } = useBlockNumber();

  return useQuery({
    queryKey: ["long-history", account, blockNumber],
    enabled: !!account && !!provider,
    queryFn: async () => {
      const multiTokenContract = new Contract(
        market.address,
        multiTokenABI,
        provider,
      );

      // Mint events are any TransferSingle event where the tokens come from the zero address
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

      // Burn events are any TransferSingle event where the tokens goes to the zero address
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

      // create long objects from close long events
      const closedLongs: Long[] = longBurnEvents.map((event) => {
        const amount = event.args?.value as BigNumber;
        const id: string = (event.args?.id as BigNumber).toString();

        return {
          id,
          amount,
        };
      });

      // create long objects from open long events
      const openLongs: Long[] = longMintEvents.map((event) => {
        const amount = event.args?.value as BigNumber;
        const id: string = (event.args?.id as BigNumber).toString();

        return {
          id,
          amount,
        };
      });

      // consolidate longs of the same id with the sum token amount
      const consolidatedOpenLongs: Record<string, BigNumber> = {};
      openLongs.forEach((long) => {
        if (consolidatedOpenLongs[long.id]) {
          consolidatedOpenLongs[long.id] = consolidatedOpenLongs[long.id].add(
            long.amount,
          );
        } else {
          consolidatedOpenLongs[long.id] = long.amount;
        }
      });
      closedLongs.forEach((long) => {
        if (consolidatedOpenLongs[long.id]) {
          consolidatedOpenLongs[long.id] = consolidatedOpenLongs[long.id].sub(
            long.amount,
          );
        }
      });

      return {
        openLongs: Object.entries(consolidatedOpenLongs).map(([id, amount]) => {
          return {
            id,
            amount,
          };
        }),
      };
    },
  });
}
