import {
  PoolABI,
  SparkGoerliAddresses,
  UserAccountData,
} from "@hyperdrive/spark";
import { Hack_BigNumberToBigInt } from "src/hack/Hack_BigNumberToBigInt";
import { Address, useContractRead } from "wagmi";

export function useUserAccountData(userAddress: Address | undefined): {
  userAccountData: Hack_BigNumberToBigInt<UserAccountData> | undefined;
  status: "error" | "idle" | "loading" | "success";
} {
  const { data, status } = useContractRead({
    abi: PoolABI,
    address: SparkGoerliAddresses.pool,
    functionName: "getUserAccountData",
    enabled: !!userAddress,
    args: [userAddress as Address],
    select: (data) => {
      // convert data to a real object, since it's actually one of those weird
      // arrays that also includes named properties on it. These are dangerous
      // since you can still .filter() on them, but then the named properties
      // are lost.
      return {
        totalCollateralBase: data.totalCollateralBase.toBigInt(),
        totalDebtBase: data.totalDebtBase.toBigInt(),
        availableBorrowBase: data.availableBorrowsBase.toBigInt(),
        currentLiquidationThreshold:
          data.currentLiquidationThreshold.toBigInt(),
        ltv: data.ltv.toBigInt(),
        healthFactor: data.healthFactor.toBigInt(),
      };
    },
  });

  return {
    userAccountData: data,
    status,
  };
}
