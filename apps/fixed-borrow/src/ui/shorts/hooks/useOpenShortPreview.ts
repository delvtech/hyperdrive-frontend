import { goerliAddresses, Hyperdrive__factory } from "@hyperdrive/core";
import { useQuery } from "@tanstack/react-query";
import { BigNumber } from "ethers";
import { Address, useContract } from "wagmi";
export function useOpenShortPreview(
  bondAmount: BigNumber,
  maxDeposit: BigNumber,
  destination: Address,
  asUnderlying = true,
): {
  openShortPreview: BigNumber | undefined;
  openShortPreviewStatus: "error" | "success" | "loading";
} {
  // see: https://github.com/wagmi-dev/wagmi/discussions/1571
  const makerDsrHyperdrive = useContract({
    abi: Hyperdrive__factory.abi,
    address: goerliAddresses.makerDsrHyperdrive as `0x${string}`,
  });

  const { data, status } = useQuery({
    queryKey: [
      "preview-open-short",
      goerliAddresses.makerDsrHyperdrive,
      { bondAmount, maxDeposit, destination, asUnderlying },
    ],
    queryFn: () => {
      return makerDsrHyperdrive?.callStatic.openShort(
        bondAmount,
        maxDeposit,
        destination,
        asUnderlying,
      ) as unknown as Promise<BigNumber>;
    },
  });
  return { openShortPreview: data, openShortPreviewStatus: status };
}
