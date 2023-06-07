import { HyperdriveABI } from "@hyperdrive/core";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { BigNumber, constants, Contract, providers } from "ethers";
import { Hyperdrive } from "src/appconfig/types";
import { wagmiChains } from "src/network/wagmiClient";
import { MultiToken, Position } from "src/ui/hyperdrive/types";
import {
  getAssetPrefixFromTokenId,
  getAssetTimestampFromTokenId,
  LONG_PREFIX_ID,
  SHORT_PREFIX_ID,
} from "src/ui/hyperdrive/utils";
import { Address, useChainId } from "wagmi";

interface UsePositionsResult {
  openLongs: Position[];
  openShorts: Position[];
  closedLongs: Position[];
  closedShorts: Position[];
}

// TODO: Remove when ethers is removed
function useRpcUrlFromPublicClient() {
  const chainId = useChainId();
  const chain = wagmiChains.find((chain) => chain.id === chainId)!;
  return chain.rpcUrls.default.http[0];
}

/** Hook that fetches all open and closed positions for an account.
 *
 * @deprecated This needs to be refactored to use the latest hyperdrive
 * contracts, which have specific events for finding which tokens the account
 * has
 */
export function usePositions(
  account: Address | undefined,
  market: Hyperdrive,
): UseQueryResult<UsePositionsResult> {
  // TODO: code debt to support ethers
  const rpcUrl = useRpcUrlFromPublicClient();
  const ethersProvider = new providers.JsonRpcProvider(rpcUrl);

  return useQuery({
    queryKey: ["positions", account, market.address, constants.AddressZero],
    enabled: !!account,
    queryFn: async () => {
      const hyperdriveContract = new Contract(
        market.address,
        HyperdriveABI,
        ethersProvider,
      );
      // Get all mint events for account
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
      // Get all burn events for account
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
      // Parse events to into multi-token objects stored in a record by token id
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
      // find and create all long positions
      const longs: Position[] = multiTokenList
        .filter(
          (multiToken) =>
            getAssetPrefixFromTokenId(multiToken.id) === LONG_PREFIX_ID,
        )
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
      // find and create all short positions
      const shorts: Position[] = multiTokenList
        .filter(
          (multiToken) =>
            getAssetPrefixFromTokenId(multiToken.id) === SHORT_PREFIX_ID,
        )
        .map((token) => {
          // calculate, if any, the amount of the position that has been closed
          // we look up the aggregated value from the multi-token burn events
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
