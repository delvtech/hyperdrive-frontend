import { HyperdriveABI } from "@hyperdrive/sdk";
import { useQuery } from "@tanstack/react-query";
import { HyperdriveGoerliAddresses } from "src/addresses/goerli";
import { Address, useAccount, usePublicClient } from "wagmi";

const dsrHyperdriveAddress = HyperdriveGoerliAddresses.dsrHyperdrive as Address;

interface UseOpenShortPreviewOptions {
  hyperdrivePool: Address;
  bondAmount: bigint | undefined;
  maxDeposit: bigint | undefined;
  destination: Address | undefined;
  asUnderlying?: boolean;
}

export function useOpenShortPreview({
  hyperdrivePool,
  bondAmount,
  maxDeposit,
  destination,
  asUnderlying = true,
}: UseOpenShortPreviewOptions): {
  openShortPreview: bigint | undefined;
  openShortPreviewStatus: "error" | "success" | "loading";
} {
  const { address: account } = useAccount();

  // There is no callStatic wagmi hook, so we gotta call the publicClient
  // directly, see: https://github.com/wagmi-dev/wagmi/discussions/1571
  const publicClient = usePublicClient();

  const queryEnabled =
    !!bondAmount && !!maxDeposit && !!destination && !!account;

  const { data, status } = useQuery({
    queryKey: [
      "preview-open-short",
      dsrHyperdriveAddress,
      {
        bondAmount: bondAmount?.toString(),
        maxDeposit: maxDeposit?.toString(),
        destination: destination?.toString(),
        asUnderlying: asUnderlying?.toString(),
      },
    ],
    enabled: queryEnabled,
    queryFn: queryEnabled
      ? async () => {
          const {
            result: [short],
          } = await publicClient.simulateContract({
            abi: HyperdriveABI,
            address: hyperdrivePool,
            functionName: "openShort",
            account,
            args: [bondAmount, maxDeposit, destination, asUnderlying],
            value: 0n,
          });
          return short;
        }
      : undefined,
  });

  return { openShortPreview: data, openShortPreviewStatus: status };
}
