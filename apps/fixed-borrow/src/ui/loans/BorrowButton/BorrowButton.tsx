import { ReactElement } from "react";
import { Button } from "src/ui/base/Button/Button";
import Spinner from "src/ui/base/Spinner/Spinner";
import { useBorrowDebt } from "src/ui/loans/hooks/useBorrowDebt";
import { Address, useAccount } from "wagmi";

export function BorrowButton({
  tokenAddress,
  amount,
}: {
  tokenAddress: Address;
  amount: bigint;
}): ReactElement {
  const { address: account } = useAccount();
  const { borrow, isPendingWalletAction, isTxProcessing } = useBorrowDebt({
    amount,
    debtToken: tokenAddress,
    onBehalfOf: account,
  });

  const isTxLoading = isPendingWalletAction || isTxProcessing;

  return (
    <Button
      size="md"
      variant="sun"
      onClick={() => borrow?.()}
      block
      disabled={isTxLoading}
    >
      {isTxLoading ? <Spinner /> : "Borrow"}
    </Button>
  );
}
