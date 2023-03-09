import { BigNumber } from "ethers";
import { formatUnits } from "ethers/lib/utils.js";
import { useUserReservesData } from "src/ui/loans/hooks/useUserReservesData";
import { Address, useToken } from "wagmi";

export function useUserCurrentDebt(
  account: Address | undefined,
  debtTokenAddress: Address,
): {
  currentDebt: BigNumber | undefined;
  formattedCurrentDebt: string | undefined;
} {
  const { userReservesData } = useUserReservesData(account);
  const { data: debtTokenMetadata } = useToken({ address: debtTokenAddress });
  const debtTokenReservesData = userReservesData?.find(
    (d) => d.underlyingAsset === debtTokenAddress,
  );
  const currentDebt =
    debtTokenReservesData?.scaledVariableDebt || BigNumber.from(0);
  const formattedCurrentDebt = currentDebt
    ? formatUnits(currentDebt, debtTokenMetadata?.decimals)
    : undefined;

  return {
    currentDebt: debtTokenReservesData?.scaledVariableDebt,
    formattedCurrentDebt: formattedCurrentDebt,
  };
}
