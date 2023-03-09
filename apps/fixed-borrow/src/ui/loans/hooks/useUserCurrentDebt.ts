import { BigNumber } from "ethers";
import { formatUnits } from "ethers/lib/utils.js";
import { formatBalance } from "src/ui/base/formatting/formatBalance";
import { useUserReservesData } from "src/ui/loans/hooks/useUserReservesData";
import { Address, useToken } from "wagmi";

export function useUserCurrentDebt(
  account: Address | undefined,
  debtTokenAddress: Address,
): {
  value: BigNumber | undefined;
  currentDebt: string;
  formattedCurrentDebt: string;
} {
  const { userReservesData } = useUserReservesData(account);
  const { data: debtTokenMetadata } = useToken({ address: debtTokenAddress });
  const debtTokenReservesData = userReservesData?.find(
    (d) => d.underlyingAsset === debtTokenAddress,
  );
  const currentDebt = formatUnits(
    debtTokenReservesData?.scaledVariableDebt || BigNumber.from(0),
    debtTokenMetadata?.decimals,
  );

  const formattedUserCurrentDebt = formatBalance(currentDebt, 2);

  return {
    value: debtTokenReservesData?.scaledVariableDebt,
    currentDebt,
    formattedCurrentDebt: formattedUserCurrentDebt,
  };
}
