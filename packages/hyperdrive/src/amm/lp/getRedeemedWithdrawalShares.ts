import { Address, PublicClient } from "viem";
import { getRedeemWithdrawalSharesEvents } from "./getRedeemWithdrawalSharesEvents";
import { makeQueryKey } from "src/makeQueryKey";
import { QueryObserverOptions } from "@tanstack/query-core";

export interface GetRedeemedWithdrawalSharesOptions {
  account: Address;
  hyperdriveAddress: Address;
  publicClient: PublicClient;
}

export interface RedeemedWithdrawalShares {
  hyperdriveAddress: Address;
  withdrawalShareAmount: bigint;
  baseAmount: bigint;
  timestamp: bigint;
}

export async function getRedeemedWithdrawalShares({
  account,
  hyperdriveAddress,
  publicClient,
}: GetRedeemedWithdrawalSharesOptions): Promise<RedeemedWithdrawalShares[]> {
  const redeemWithdrawalShareEvents = await getRedeemWithdrawalSharesEvents({
    args: { provider: account },
    hyperdriveAddress,
    publicClient,
  });

  return Promise.all(
    redeemWithdrawalShareEvents.map(async ({ eventData, eventLog }) => {
      return {
        hyperdriveAddress,
        withdrawalShareAmount: eventData.withdrawalShareAmount,
        baseAmount: eventData.baseAmount,
        timestamp: (
          await publicClient.getBlock({
            blockNumber: eventLog.blockNumber as bigint,
          })
        ).timestamp,
      };
    }),
  );
}

export function getRedeemedWithdrawalSharesQuery({
  account,
  hyperdriveAddress,
  publicClient,
}: Partial<GetRedeemedWithdrawalSharesOptions>): QueryObserverOptions<
  Awaited<ReturnType<typeof getRedeemedWithdrawalShares>>
> {
  const queryEnabled = !!account && !!hyperdriveAddress && !!publicClient;

  return {
    enabled: queryEnabled,
    queryKey: makeQueryKey("redeemed-withdrawal-shares", {
      hyperdriveAddress,
      account,
    }),
    queryFn: queryEnabled
      ? () =>
          getRedeemedWithdrawalShares({
            account,
            hyperdriveAddress,
            publicClient,
          })
      : undefined,
  };
}
