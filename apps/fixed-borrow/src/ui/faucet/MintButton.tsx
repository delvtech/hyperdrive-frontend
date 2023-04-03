import { SparkGoerliAddresses, FaucetABI } from "@hyperdrive/spark";
import { BigNumber } from "ethers";
import { ReactElement } from "react";
import { Button } from "src/ui/base/Button/Button";
import {
  useAccount,
  usePrepareContractWrite,
  useContractWrite,
  useToken,
  Address,
} from "wagmi";

export function MintButton({
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
    <Button disabled={!mintTokens} onClick={() => mintTokens?.()}>
      Mint {token?.symbol}
    </Button>
  );
}
