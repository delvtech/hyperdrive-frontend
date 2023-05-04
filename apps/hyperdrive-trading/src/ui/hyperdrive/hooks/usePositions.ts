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

/** Hook that fetches all the open positions for the provided account */
export function usePositions(
  account: Address | undefined,
  market: HyperdriveMarket,
): UseQueryResult<UsePositionsResult> {
  const provider = useProvider();
  return useQuery({
    // this eslint rule is firing because of the constants.AddressZero import
    // eslint-disable-next-line @tanstack/query/exhaustive-deps
    queryKey: ["positions", account, market.address],
    enabled: !!account,
    queryFn: async () => {
      // Create hyperdrive contract instance
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

      // Parse events to get current state of multi-token ownership
      // Adding amounts from mints and subtracting from burns
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

      // keep track of the amount of multi-token burns in a separate data structure
      // this will keep track of the amount of a long/short that has been closed
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

        if (multiTokens[idBN.toString()]) {
          multiTokens[idBN.toString()] = {
            id: idBN.toBigInt(),
            amount: multiTokens[idBN.toString()].amount - amount,
          };
        } else {
          multiTokens[idBN.toString()] = {
            id: idBN.toBigInt(),
            amount,
          };
        }
      });

      // Create position objects from multi-token data
      const multiTokenList = Object.values(multiTokens);
      const longs: Position[] = multiTokenList
        .filter((multiToken) => getAssetPrefixFromTokenId(multiToken.id) === 0)
        .map((token) => {
          return {
            type: "Long",
            id: token.id,
            amount: token.amount,
            currencyValue: "$10000", // TODO: stubbed for now
            expiryDate: new Date(getAssetTimestampFromTokenId(token.id) * 1000),
          };
        });

      const shorts: Position[] = multiTokenList
        .filter((multiToken) => getAssetPrefixFromTokenId(multiToken.id) === 1)
        .map((token) => {
          return {
            type: "Short",
            id: token.id,
            amount: token.amount,
            currencyValue: "$10000", // TODO: stubbed for now
            expiryDate: new Date(getAssetTimestampFromTokenId(token.id) * 1000),
          };
        });

      // Create position objects from multi-token burn data
      const multiTokenListBurns = Object.values(multiTokenBurns);
      const closedLongs: Position[] = multiTokenListBurns
        .filter((multiToken) => getAssetPrefixFromTokenId(multiToken.id) === 0)
        .map((token) => {
          return {
            type: "Long",
            id: token.id,
            amount: token.amount,
            currencyValue: "$10000", // TODO: stubbed for now
            expiryDate: new Date(getAssetTimestampFromTokenId(token.id) * 1000),
          };
        });

      const closedShorts: Position[] = multiTokenListBurns
        .filter((multiToken) => getAssetPrefixFromTokenId(multiToken.id) === 1)
        .map((token) => {
          return {
            type: "Short",
            id: token.id,
            amount: token.amount,
            currencyValue: "$10000", // TODO: stubbed for now
            expiryDate: new Date(getAssetTimestampFromTokenId(token.id) * 1000),
          };
        });

      return {
        openLongs: longs.filter((long) => long.amount > 0n),
        openShorts: shorts.filter((short) => short.amount > 0n),
        closedLongs,
        closedShorts,
        // closedLongs: longs.filter((long) => long.amount === 0n),
        // closedShorts: shorts.filter((short) => short.amount === 0n),
      };
    },
  });
}
