import classNames from "classnames";
import { BigNumber } from "ethers";
import { ReactElement } from "react";
import { parseBigInt } from "src/base/bigint/parseBigInt";
import { useSupplyCollateral } from "src/ui/loans/hooks/useSupplyCollateral";
import { Address, useAccount, useToken } from "wagmi";

export function SupplyCollateralButton({
  collateralTokenAddress,
  amount,
}: {
  collateralTokenAddress: Address;
  amount: BigNumber;
}): ReactElement {
  const { address: account } = useAccount();
  const { data: token } = useToken({ address: collateralTokenAddress });
  const { supply, status } = useSupplyCollateral(
    collateralTokenAddress,
    amount.toBigInt(),
    account,
  );
  return (
    <button
      disabled={!supply}
      className={classNames(
        "daisy-btn-outline daisy-btn daisy-btn-primary daisy-btn-wide",
        { "daisy-loading": status === "loading" },
      )}
      onClick={() => supply?.()}
    >
      Supply {token?.symbol}
    </button>
  );
}
