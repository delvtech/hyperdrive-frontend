import { formatBalance } from "./formatBalance";

export function formatUSD(amount: string): string {
  return `$${formatBalance(amount, 2)}`;
}
