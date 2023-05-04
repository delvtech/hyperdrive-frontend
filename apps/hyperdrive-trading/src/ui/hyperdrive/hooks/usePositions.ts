import { HyperdriveABI } from "@hyperdrive/core";
import { BigNumber, constants, Contract } from "ethers";
import { useQuery, UseQueryResult } from "react-query";
import { HyperdriveMarket } from "src/config/HyperdriveConfig";
import { MultiToken, Position } from "src/ui/hyperdrive/types";
import {
  getAssetPrefixFromTokenId,
  getAssetTimestampFromTokenId,
} from "src/ui/hyperdrive/utils";
import { Address, useProvider } from "wagmi";

interface UsePositionsResult {
  openLongs: Position[];
  openShorts: Position[];
  closedLongs: Position[];
  closedShorts: Position[];
}

/** Hook that fetches all open and closed positions for an account. */
export function usePositions(
  account: Address | undefined,
  market: HyperdriveMarket,
): UseQueryResult<UsePositionsResult> {
  const provider = useProvider();
  return useQuery({
    queryKey: ["positions", account, market.address, constants.AddressZero],
    enabled: !!account,
    queryFn: async () => {
      const hyperdriveContract = new Contract(
        market.address,
        HyperdriveABI,
        provider,
      );

      // Get all mint events from account
      const mintEventFilter = hyperdriveContract.filters.TransferSingle(
        undefined,
        constants.AddressZero,
        account,
      );
      const mintEvents = await hyperdriveContract.queryFilter(
        mintEventFilter,
        0,
        "latest",
      );

      // Get all burn events from account
      const burnEventFilter = hyperdriveContract.filters.TransferSingle(
        undefined,
        account,
        constants.AddressZero,
      );
      const burnEvents = await hyperdriveContract.queryFilter(
        burnEventFilter,
        0,
        "latest",
      );

      // Parse events to into multi-token objects stored in a record
      const multiTokens: Record<string, MultiToken> = {};
      mintEvents.forEach((event) => {
        const amount = (event.args?.value as BigNumber).toBigInt();
        const idBN = event.args?.id as BigNumber;

        if (multiTokens[idBN.toString()]) {
          multiTokens[idBN.toString()] = {
            id: idBN.toBigInt(),
            amount: multiTokens[idBN.toString()].amount + amount,
          };
        } else {
          multiTokens[idBN.toString()] = {
            id: idBN.toBigInt(),
            amount,
          };
        }
      });

      // Parse events to into multi-token objects stored in a record
      // This will be used to calculate the amount of a position that has been closed
      const multiTokenBurns: Record<string, MultiToken> = {};
      burnEvents.forEach((event) => {
        const amount = (event.args?.value as BigNumber).toBigInt();
        const idBN = event.args?.id as BigNumber;

        if (multiTokenBurns[idBN.toString()]) {
          multiTokenBurns[idBN.toString()] = {
            id: idBN.toBigInt(),
            amount: multiTokenBurns[idBN.toString()].amount + amount,
          };
        } else {
          multiTokenBurns[idBN.toString()] = {
            id: idBN.toBigInt(),
            amount,
          };
        }
      });

      const multiTokenList = Object.values(multiTokens);

      // filter by longs
      const longs: Position[] = multiTokenList
        .filter((multiToken) => getAssetPrefixFromTokenId(multiToken.id) === 0)
        .map((token) => {
          // calculate, if any, the amount of the position that has been closed
          // we look up the aggregated value from the multi-token burn events
          const amountBurned =
            multiTokenBurns[token.id.toString()]?.amount ?? 0n;

          return {
            type: "Long",
            id: token.id,
            amount: token.amount - amountBurned,
            currencyValue: "$10000", // TODO: stubbed for now
            expiryDate: new Date(getAssetTimestampFromTokenId(token.id) * 1000),
            amountClosed: amountBurned,
          } as Position;
        });

      const shorts: Position[] = multiTokenList
        .filter((multiToken) => getAssetPrefixFromTokenId(multiToken.id) === 1)
        .map((token) => {
          const amountBurned =
            multiTokenBurns[token.id.toString()]?.amount ?? 0n;

          return {
            type: "Short",
            id: token.id,
            amount: token.amount - amountBurned,
            currencyValue: "$10000", // TODO: stubbed for now
            expiryDate: new Date(getAssetTimestampFromTokenId(token.id) * 1000),
            amountClosed: amountBurned,
          } as Position;
        });

      return {
        openLongs: longs.filter((long) => long.amount > 0n),
        openShorts: shorts.filter((short) => short.amount > 0n),
        closedLongs: longs.filter((long) => long.amount === 0n),
        closedShorts: shorts.filter((short) => short.amount === 0n),
      };
    },
  });
}
