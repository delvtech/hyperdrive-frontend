import { formatBigInt } from "src/base/bigint/formatBigInt";
import { useUserReservesData } from "src/ui/loans/hooks/useUserReservesData";
import { Address, useToken } from "wagmi";

export function useUserCurrentDebt(
  account: Address | undefined,
  debtTokenAddress: Address,
): {
  currentDebt: bigint | undefined;
  formattedCurrentDebt: string | undefined;
} {
  const { userReservesData } = useUserReservesData(account);
  const { data: debtTokenMetadata } = useToken({ address: debtTokenAddress });
  const debtTokenReservesData = userReservesData?.find(
    (d) => d.underlyingAsset === debtTokenAddress,
  );
  const currentDebt = debtTokenReservesData?.scaledVariableDebt;
  const formattedCurrentDebt = currentDebt
    ? formatBigInt(currentDebt.toBigInt(), debtTokenMetadata?.decimals)
    : undefined;

  return {
    currentDebt: debtTokenReservesData?.scaledVariableDebt.toBigInt(),
    formattedCurrentDebt: formattedCurrentDebt,
  };
}
