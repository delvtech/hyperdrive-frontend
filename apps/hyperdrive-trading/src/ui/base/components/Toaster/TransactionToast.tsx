import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { makeTransactionURL } from "src/blockexplorer/makeTransactionUrl";
import type { SupportedChainId } from "src/chains/supportedChains";
import type { Hash } from "viem";
import { useChainId } from "wagmi";

export default function TransactionToast({
  message,
  txHash,
}: {
  message: string;
  txHash: Hash;
}): JSX.Element {
  const chainId = useChainId() as SupportedChainId;
  const link = makeTransactionURL(txHash, chainId);

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
