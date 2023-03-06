import {
  SparkGoerliAddresses,
  UiPoolDataProviderABI,
  UserReserveData,
} from "@hyperdrive/spark";
import { useContractRead } from "wagmi";

export function useUserReservesData(userAdress: `0x${string}` | undefined): {
  userReservesData: readonly UserReserveData[] | undefined;
  status: "error" | "idle" | "loading" | "success";
} {
  const { data, status } = useContractRead({
    abi: UiPoolDataProviderABI,
    address: SparkGoerliAddresses.uiPoolDataProvider,
    functionName: "getUserReservesData",
    enabled: !!userAdress,
    args: [
      SparkGoerliAddresses.poolAddressesProvider,
      userAdress as `0x${string}`,
    ],
    select: (data) => {
      // We only care about the reserves data, but the data actually looks like
      // this: [reservesData, userEmodeCategoryId].
      return data[0].map((data) => ({
        // convert data to a real object, it's actually one of those weird
        // arrays that also includes named properties on it. These are dangerous
        // since you can still .filter() on them, but then the named properties
        // are lost.
        stableBorrowLastUpdateTimestamp: data.stableBorrowLastUpdateTimestamp,
        principalStableDebt: data.principalStableDebt,
        scaledATokenBalance: data.scaledATokenBalance,
        scaledVariableDebt: data.scaledVariableDebt,
        stableBorrowRate: data.stableBorrowRate,
        underlyingAsset: data.underlyingAsset,
        usageAsCollateralEnabledOnUser: data.usageAsCollateralEnabledOnUser,
      }));
    },
  });

  return {
    userReservesData: data,
    status,
  };
}
