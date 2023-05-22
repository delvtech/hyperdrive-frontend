import { AaveOracleABI, SparkGoerliAddresses } from "@hyperdrive/spark";
import { Address, useContractRead } from "wagmi";

/**
 *
 * Gets the value of the asset based on the network's base currency, usually usd
 * see: // See: https://docs.aave.com/developers/periphery-contracts/uipooldataproviderv3#basecurrencyinfo
 * @param assetAddress
 * @returns
 */
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
