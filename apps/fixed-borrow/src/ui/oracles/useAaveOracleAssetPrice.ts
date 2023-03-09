import { AaveOracleABI, SparkGoerliAddresses } from "@hyperdrive/spark";
import { BigNumber } from "ethers";
import { Address, useContractRead } from "wagmi";

export function useAaveOracleAssetPrice(assetAddress: Address): {
  data: BigNumber | undefined;
} {
  return useContractRead({
    abi: AaveOracleABI,
    address: SparkGoerliAddresses.aaveOracle,
    functionName: "getAssetPrice",
    args: [assetAddress],
  });
}
