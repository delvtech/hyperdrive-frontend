import { HyperdriveABI } from "@hyperdrive/core";
import { MutationStatus, useQuery } from "@tanstack/react-query";
import { Hyperdrive } from "src/appconfig/types";
import { Address, useAccount, usePublicClient } from "wagmi";

interface UsePreviewRedeemWithdrawalSharesOptions {
  market: Hyperdrive;
  withdrawalSharesIn: bigint | undefined;
  minBaseAmountOutPerShare: bigint | undefined;
  destination: Address | undefined;
  asUnderlying?: boolean;
  enabled?: boolean;
}

interface UsePreviewRedeemWithdrawalSharesResult {
  previewRedeemWithdrawalSharesStatus: MutationStatus;
  baseAmountOut: bigint | undefined;
  sharesRedeemed: bigint | undefined;
}

export function usePreviewRedeemWithdrawalShares({
  market,
  withdrawalSharesIn,
  minBaseAmountOutPerShare,
  destination,
  asUnderlying = true,
  enabled = true,
}: UsePreviewRedeemWithdrawalSharesOptions): UsePreviewRedeemWithdrawalSharesResult {
  const publicClient = usePublicClient();
  const { address: account } = useAccount();

  const queryEnabled =
    !!withdrawalSharesIn &&
    minBaseAmountOutPerShare !== undefined &&
    !!destination &&
    enabled;

  const { data, status } = useQuery({
    queryKey: [
      "preview-redeem-withdrawal-shares",
      {
        market: market.address,
        withdrawalSharesIn: withdrawalSharesIn?.toString(),
        minBaseAmountOut: minBaseAmountOutPerShare?.toString(),
        destination: destination?.toString(),
      },
    ],
    enabled: queryEnabled,
    queryFn: queryEnabled
      ? async () => {
          const { result } = await publicClient.simulateContract({
            abi: HyperdriveABI,
            address: market.address,
            account,
            functionName: "redeemWithdrawalShares",
            args: [
              withdrawalSharesIn,
              minBaseAmountOutPerShare,
              destination,
              asUnderlying,
            ],
          });

          return {
            baseAmountOut: result[0] as bigint,
            sharesRedeemed: result[1] as bigint,
          };
        }
      : undefined,
  });

  return {
    previewRedeemWithdrawalSharesStatus: status,
    baseAmountOut: data?.baseAmountOut,
    sharesRedeemed: data?.sharesRedeemed,
  };
}
