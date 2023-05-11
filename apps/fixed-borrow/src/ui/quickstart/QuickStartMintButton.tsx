import { SparkGoerliAddresses, FaucetABI } from "@hyperdrive/spark";
import { BigNumber } from "ethers";
import { ReactElement } from "react";
import { Button } from "src/ui/base/Button/Button";
import { Well } from "src/ui/base/Well/Well";
import {
  useAccount,
  usePrepareContractWrite,
  useContractWrite,
  useToken,
  Address,
} from "wagmi";

export function QuickStartMintButton({
  tokenAddress,
  amount,
}: {
  tokenAddress: Address;
  amount: bigint;
}): ReactElement {
  const { address: account } = useAccount();
  const { data: token } = useToken({ address: tokenAddress });
  const { config: mintConfig } = usePrepareContractWrite({
    address: SparkGoerliAddresses.faucet,
    abi: FaucetABI,
    functionName: "mint",
    args: [tokenAddress, account as Address, BigNumber.from(amount)],
  });
  const { write: mintTokens } = useContractWrite(mintConfig);
  return (
    <Well disabled={!mintTokens} onClick={() => mintTokens?.()}>
      <span className="text-lightText">Mint {token?.symbol}</span>
    </Well>
  );
}
