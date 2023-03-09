import { useQuery } from "@tanstack/react-query";
import { BigNumber } from "ethers";
import { HyperdriveABI } from "src/hacks/HyperdriveABI";
import { hyperdriveGoerliAddresses } from "src/hacks/hyperdriveAddresses";
import { Address, useContract } from "wagmi";
import { goerliAddresses } from "@hyperdrive/core";
export function useOpenShortPreview(
  bondAmount: BigNumber | undefined,
  maxDeposit: BigNumber | undefined,
  destination: Address | undefined,
  asUnderlying = true,
): {
  openShortPreview: BigNumber | undefined;
  openShortPreviewStatus: "error" | "success" | "loading";
} {
  // see: https://github.com/wagmi-dev/wagmi/discussions/1571
  const makerDsrHyperdrive = useContract({
    abi: HyperdriveABI,
    address: goerliAddresses.makerDsrHyperdrive as `0x${string}`,
    // address: hyperdriveGoerliAddresses.makerDsrHyperdrive as `0x${string}`,
  });

  const queryEnabled = !!bondAmount && !!maxDeposit && !!destination;
  const { data, status } = useQuery({
    queryKey: [
      "preview-open-short",
      hyperdriveGoerliAddresses.makerDsrHyperdrive,
      { bondAmount, maxDeposit, destination, asUnderlying },
    ],
    enabled: queryEnabled,
    queryFn: queryEnabled
      ? () => {
          return makerDsrHyperdrive?.callStatic.openShort(
            bondAmount,
            maxDeposit,
            destination,
            asUnderlying,
          ) as unknown as Promise<BigNumber>;
        }
      : undefined,
  });
  return { openShortPreview: data, openShortPreviewStatus: status };
}
