import { SparkGoerliAddresses, FaucetABI } from "@hyperdrive/spark";
import { ReactElement } from "react";
import { Well } from "src/ui/base/Well/Well";
import {
  useAccount,
  usePrepareContractWrite,
  useContractWrite,
  Address,
} from "wagmi";

export function MintQuickStartButton({
  tokenAddress,
  amount,
  label,
  description,
}: {
  tokenAddress: Address;
  amount: bigint;
  label: string;
  description: string;
}): ReactElement {
  const { address: account } = useAccount();
  const { config: mintConfig } = usePrepareContractWrite({
    address: SparkGoerliAddresses.faucet,
    abi: FaucetABI,
    functionName: "mint",
    args: [tokenAddress, account as Address, amount],
  });
  const { write: mintTokens } = useContractWrite(mintConfig);
  return (
    <Well block onClick={() => mintTokens?.()}>
      <div className="flex items-center justify-between">
        <span className="font-bold uppercase text-secondaryText">{label}</span>
        <span className="text-h6 text-lightText">{description}</span>
      </div>
    </Well>
  );
}
