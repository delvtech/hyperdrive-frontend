import { makeTransactionUrl } from "@delvtech/hyperdrive-appconfig";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { ExternalLink } from "src/ui/analytics/ExternalLink";
import { useAppConfigForConnectedChain } from "src/ui/appconfig/useAppConfigForConnectedChain";
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
  const appConfig = useAppConfigForConnectedChain();
  const link = makeTransactionUrl(txHash, appConfig.chains[chainId]);

  return (
    <span className="flex flex-col">
      <span className="gradient-text">{message}</span>
      <ExternalLink
        href={link}
        newTab
        rel="noreferrer"
        className="daisy-link-hover daisy-link mt-1 flex cursor-pointer flex-row items-center text-sm"
      >
        View on {appConfig.chains[chainId].blockExplorerName}{" "}
        <ArrowRightIcon className="ml-1 h-4" />
      </ExternalLink>
    </span>
  );
}
