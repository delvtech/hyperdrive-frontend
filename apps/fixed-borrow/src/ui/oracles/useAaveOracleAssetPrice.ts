import { AaveOracleABI, SparkGoerliAddresses } from "@hyperdrive/spark";
import { Address, useContractRead } from "wagmi";

export function useAaveOracleAssetPrice(assetAddress: Address): {
  data: bigint | undefined;
} {
  return useContractRead({
    abi: AaveOracleABI,
    address: SparkGoerliAddresses.aaveOracle,
    functionName: "getAssetPrice",
    args: [assetAddress],
  });
}
