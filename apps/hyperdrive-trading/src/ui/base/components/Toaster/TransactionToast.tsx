import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { makeTransactionUrl } from "@hyperdrive/appconfig";
import { useAppConfig } from "src/ui/appconfig/useAppConfig";
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
  const appConfig = useAppConfig();
  const link = makeTransactionUrl(txHash, appConfig.chains[chainId]);

  return (
    <span className="flex flex-col">
      <span className="gradient-text">{message}</span>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="daisy-link-hover daisy-link mt-1 flex cursor-pointer flex-row items-center text-sm"
      >
        View on {appConfig.chains[chainId].blockExplorerName}{" "}
        <ArrowRightIcon className="ml-1 h-4" />
      </a>
    </span>
  );
}
