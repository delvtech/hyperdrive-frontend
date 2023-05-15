import {
  PoolABI,
  SparkGoerliAddresses,
  UserAccountData,
} from "@hyperdrive/spark";
import { Address, useContractRead } from "wagmi";

export function useUserAccountData(userAddress: Address | undefined): {
  userAccountData: UserAccountData | undefined;
  userAccountDataStatus: "error" | "idle" | "loading" | "success";
} {
  const queryEnabled = !!userAddress;
  const { data, status } = useContractRead({
    abi: PoolABI,
    address: SparkGoerliAddresses.pool,
    functionName: "getUserAccountData",
    enabled: queryEnabled,
    args: queryEnabled ? [userAddress] : undefined,
    select: (data) => {
      // TODO: Maybe there's a sweet abitype solution for us here instead of
      // plucking these out by hand
      return {
        totalCollateralBase: data[0],
        totalDebtBase: data[1],
        availableBorrowBase: data[2],
        currentLiquidationThreshold: data[3],
        ltv: data[4],
        healthFactor: data[5],
      };
    },
  });

  return {
    userAccountData: data,
    userAccountDataStatus: status,
  };
}
