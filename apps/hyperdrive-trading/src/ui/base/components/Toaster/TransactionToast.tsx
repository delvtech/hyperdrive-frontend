import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { makeTransactionURL } from "src/blockexplorer/makeTransactionUrl";
import { SupportedChainId } from "src/chains/supportedChains";
import { Hash } from "viem";

export default function TransactionToast({
  chainId,
  message,
  txHash,
}: {
  chainId: number;
  message: string;
  txHash: Hash;
}): JSX.Element {
  const link = makeTransactionURL(txHash, chainId as SupportedChainId);

  return (
    <span className="flex flex-col">
      <span className="gradient-text">{message}</span>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="daisy-link-hover daisy-link mt-1 flex cursor-pointer flex-row items-center text-sm"
      >
        View on Etherscan <ArrowRightIcon className="ml-1 h-4" />
      </a>
    </span>
  );
}
