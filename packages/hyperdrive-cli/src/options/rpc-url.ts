import { requiredString } from "src/options/utils/requiredString";

export const rpcUrlOption = {
  alias: ["rpc", "rpc-url"],
  describe: "A RPC URL to send the transaction request to",
  type: "string",
} as const;

export async function requiredRpcUrl(rpcUrl?: string): Promise<string> {
  return await requiredString(rpcUrl, {
    name: "rpc-url",
    message: "Enter RPC URL",
    initial: "http://127.0.0.1:8545",
  });
}
