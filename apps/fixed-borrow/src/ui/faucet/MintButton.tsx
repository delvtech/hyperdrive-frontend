import { SparkGoerliAddresses, FaucetABI } from "@hyperdrive/spark";
import { BigNumber } from "ethers";
import { ReactElement } from "react";
import { DollarIcon } from "src/ui/base/DollarIcon";
import {
  useAccount,
  usePrepareContractWrite,
  useContractWrite,
  useToken,
} from "wagmi";

export function MintButton({
  tokenAddress,
  amount,
}: {
  tokenAddress: `0x${string}`;
  amount: BigNumber;
}): ReactElement {
  const { address: account } = useAccount();
  const { data: token } = useToken({ address: tokenAddress });
  const { config: mintConfig } = usePrepareContractWrite({
    address: SparkGoerliAddresses.faucet as `0x${string}`,
    abi: FaucetABI,
    functionName: "mint",
    args: [tokenAddress, account as `0x${string}`, amount],
  });
  const { write: mintTokens } = useContractWrite(mintConfig);
  return (
    <button
      className="daisy-btn-outline daisy-btn-success daisy-btn "
      disabled={!mintTokens}
      onClick={() => mintTokens?.()}
    >
      <DollarIcon />
      Mint {token?.symbol}
    </button>
  );
}
