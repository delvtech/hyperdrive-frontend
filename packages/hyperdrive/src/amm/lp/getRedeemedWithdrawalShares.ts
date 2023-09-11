import { Address, PublicClient } from "viem";
import { getRedeemWithdrawalSharesEvents } from "src/amm/lp/getRedeemWithdrawalSharesEvents";
import { EventOptions } from "src/base/EventOptions";

export interface GetRedeemedWithdrawalSharesOptions {
  account: Address;
  hyperdriveAddress: Address;
  publicClient: PublicClient;
  options?: EventOptions;
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
  options,
}: GetRedeemedWithdrawalSharesOptions): Promise<RedeemedWithdrawalShares[]> {
  const redeemWithdrawalShareEvents = await getRedeemWithdrawalSharesEvents({
    args: { provider: account },
    hyperdriveAddress,
    publicClient,
    options,
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
