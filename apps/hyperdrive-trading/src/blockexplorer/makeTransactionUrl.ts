import assertNever from "assert-never";
import { SupportedChainId } from "src/chains/supportedChains";

export function makeTransactionURL(
  transactionHash: string | undefined,
  chainId: SupportedChainId,
): string {
  switch (chainId) {
    case 1:
      return `https://etherscan.io/tx/${transactionHash}`;
    case 5:
      return `https://goerli.etherscan.io/tx/${transactionHash}`;
    case 31337:
      return `#`;
    case 42069:
      return `#`;
    default:
      assertNever(chainId);
  }
}
