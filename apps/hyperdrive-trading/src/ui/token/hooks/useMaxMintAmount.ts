import { TokenConfig } from "@hyperdrive/appconfig";
import { useReadContract } from "wagmi";

export function useMaxMintAmount(token: TokenConfig<any>): {
  maxMintAmount: bigint | undefined;
} {
  const { data: maxMintAmount } = useReadContract({
    abi: [
      {
        type: "function",
        name: "maxMintAmount",
        inputs: [],
        outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
        stateMutability: "view",
      },
    ],
    functionName: "maxMintAmount",
    address: token.address,
    args: [],
  });
  return { maxMintAmount };
}
