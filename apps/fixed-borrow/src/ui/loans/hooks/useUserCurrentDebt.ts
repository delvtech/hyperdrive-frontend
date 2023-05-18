import { useUserReservesData } from "src/ui/loans/hooks/useUserReservesData";
import { Address } from "wagmi";

export function useUserCurrentDebt(
  account: Address | undefined,
  debtTokenAddress: Address,
): {
  currentDebt: bigint | undefined;
  status: "error" | "idle" | "loading" | "success";
} {
  const { userReservesData, status } = useUserReservesData(account);
  const debtTokenReservesData = userReservesData?.find(
    (d) => d.underlyingAsset === debtTokenAddress,
  );
  const currentDebt = debtTokenReservesData?.scaledVariableDebt;

  return {
    currentDebt,
    status,
  };
}
