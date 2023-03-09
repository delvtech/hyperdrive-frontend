import { useQuery } from "@tanstack/react-query";
import { BigNumber } from "ethers";
import { Address, useContract } from "wagmi";
import { HyperdriveABI, HyperdriveGoerliAddresses } from "@hyperdrive/core";

const makerDsrHyperdriveAddress =
  HyperdriveGoerliAddresses.makerDsrHyperdrive as `0x${string}`;

export function useOpenShortPreview(
  bondAmount: BigNumber | undefined,
  maxDeposit: BigNumber | undefined,
  destination: Address | undefined,
  asUnderlying = true,
): {
  openShortPreview: BigNumber | undefined;
  openShortPreviewStatus: "error" | "success" | "loading";
} {
  // There is no callStatic wagmi hook, so we gotta call the contract directly,
  // see: https://github.com/wagmi-dev/wagmi/discussions/1571
  const makerDsrHyperdrive = useContract({
    abi: HyperdriveABI,
    address: makerDsrHyperdriveAddress,
  });

  const queryEnabled = !!bondAmount && !!maxDeposit && !!destination;
  const { data, status } = useQuery({
    queryKey: [
      "preview-open-short",
      makerDsrHyperdriveAddress,
      { bondAmount, maxDeposit, destination, asUnderlying },
    ],
    enabled: queryEnabled,
    queryFn: queryEnabled
      ? () =>
          makerDsrHyperdrive?.callStatic.openShort(
            bondAmount,
            maxDeposit,
            destination,
            asUnderlying,
          ) as unknown as Promise<BigNumber>
      : undefined,
  });
  return { openShortPreview: data, openShortPreviewStatus: status };
}
