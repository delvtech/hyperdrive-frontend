import {
  PoolABI,
  SparkGoerliAddresses,
  UserAccountData,
} from "@hyperdrive/spark";
import { Address, useContractRead } from "wagmi";

export function useUserAccountData(userAdress: Address | undefined): {
  userAccountData: UserAccountData | undefined;
  status: "error" | "idle" | "loading" | "success";
} {
  const { data, status } = useContractRead({
    abi: PoolABI,
    address: SparkGoerliAddresses.pool,
    functionName: "getUserAccountData",
    enabled: !!userAdress,
    args: [userAdress as Address],
    select: (data) => {
      // convert data to a real object, since it's actually one of those weird
      // arrays that also includes named properties on it. These are dangerous
      // since you can still .filter() on them, but then the named properties
      // are lost.
      return {
        totalCollateralBase: data.totalCollateralBase,
        totalDebtBase: data.totalDebtBase,
        availableBorrowBase: data.availableBorrowsBase,
        currentLiquidationThreshold: data.currentLiquidationThreshold,
        ltv: data.ltv,
        healthFactor: data.healthFactor,
      };
    },
  });

  return {
    userAccountData: data,
    status,
  };
}
