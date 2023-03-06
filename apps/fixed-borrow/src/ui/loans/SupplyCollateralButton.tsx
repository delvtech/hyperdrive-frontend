import classNames from "classnames";
import { BigNumber } from "ethers";
import { ReactElement } from "react";
import { useSupplyCollateral } from "src/ui/loans/hooks/useSupplyCollateral";
import { useAccount, useToken } from "wagmi";

export function SupplyCollateralButton({
  collateralTokenAddress,
  amount,
}: {
  collateralTokenAddress: `0x${string}`;
  amount: BigNumber;
}): ReactElement {
  const { address: account } = useAccount();
  const { data: token } = useToken({ address: collateralTokenAddress });
  const { supply, status } = useSupplyCollateral(
    collateralTokenAddress,
    amount,
    account,
  );
  return (
    <button
      disabled={!supply}
      className={classNames(
        "daisy-btn-outline daisy-btn-primary daisy-btn-wide daisy-btn",
        { "daisy-loading": status === "loading" },
      )}
      onClick={() => supply?.()}
    >
      Supply {token?.symbol}
    </button>
  );
}
