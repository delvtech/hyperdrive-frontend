import {
  SparkGoerliAddresses,
  UiPoolDataProviderABI,
  UserReserveData,
} from "@hyperdrive/spark";
import { useContractRead } from "wagmi";

/**
 * See: https://docs.aave.com/developers/periphery-contracts/uipooldataproviderv3#getreservesdata
 * @param userAdress
 * @returns
 */
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
      return data[0];
    },
  });

  return {
    userReservesData: data,
    status,
  };
}
