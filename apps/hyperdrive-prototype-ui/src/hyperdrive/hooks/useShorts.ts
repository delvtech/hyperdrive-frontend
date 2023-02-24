import { BigNumber, constants, Contract } from "ethers";
import { multiTokenABI } from "generated";
import { Market, Short } from "hyperdrive/types";
import { getAssetPrefixFromTokenId } from "hyperdrive/utils";
import { useQuery, UseQueryResult } from "react-query";
import { Address, useBlockNumber, useProvider } from "wagmi";

interface Shorts {
  openShorts: {
    id: string;
    amount: BigNumber;
  }[];
  closedShorts: Short[];
}

export function useShorts(
  account: Address | undefined,
  market: Market,
): UseQueryResult<Shorts> {
  const provider = useProvider();
  const { data: blockNumber } = useBlockNumber();

  return useQuery({
    queryKey: ["Short-history", account, blockNumber],
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

      // filter short opens from all mint events
      const shortMintEvents = mintEvents.filter((event) => {
        const shortId: BigNumber = event.args?.id;
        return getAssetPrefixFromTokenId(shortId) === 1;
      });

      // filter short closes from all burn events
      const shortBurnEvents = burnEvents.filter((event) => {
        const shortId: BigNumber = event.args?.id;
        return getAssetPrefixFromTokenId(shortId) === 1;
      });

      // create short objects from close Short events
      const closedShorts: Short[] = shortBurnEvents.map((event) => {
        const amount = event.args?.value as BigNumber;
        const id: string = (event.args?.id as BigNumber).toString();

        return {
          id,
          amount,
        };
      });

      // create short objects from open Short events
      const openShorts: Short[] = shortMintEvents.map((event) => {
        const amount = event.args?.value as BigNumber;
        const id: string = (event.args?.id as BigNumber).toString();

        return {
          id,
          amount,
        };
      });

      // consolidate Shorts of the same id with the sum token amount
      const consolidatedOpenShorts: Record<string, BigNumber> = {};
      openShorts.forEach((short) => {
        if (consolidatedOpenShorts[short.id]) {
          consolidatedOpenShorts[short.id] = consolidatedOpenShorts[
            short.id
          ].add(short.amount);
        } else {
          consolidatedOpenShorts[short.id] = short.amount;
        }
      });
      closedShorts.forEach((short) => {
        if (consolidatedOpenShorts[short.id]) {
          consolidatedOpenShorts[short.id] = consolidatedOpenShorts[
            short.id
          ].sub(short.amount);
        }
      });

      return {
        openShorts: Object.entries(consolidatedOpenShorts).map(
          ([id, amount]) => {
            return {
              id,
              amount,
            };
          },
        ),
      };
    },
  });
}
