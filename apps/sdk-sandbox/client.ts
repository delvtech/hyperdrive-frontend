import {
  createPublicClient,
  createWalletClient,
  http,
  type PublicClient,
} from "viem";
import { privateKeyToAccount } from "viem/accounts";

export const publicClient: PublicClient = createPublicClient({
  transport: http(process.env.RPC_URL),
  chain: {
    id: 707,
    name: "Zaps Cloudchain",
    nativeCurrency: {
      name: "ETH",
      symbol: "ETH",
      decimals: 18,
    },
    rpcUrls: {
      default: {
        http: [process.env.RPC_URL!],
      },
    },
  },
});

export const walletClient = process.env.WALLET_PRIVATE_KEY
  ? createWalletClient({
      account: privateKeyToAccount(
        process.env.WALLET_PRIVATE_KEY as `0x${string}`,
      ),
      chain: publicClient.chain,
      transport: http(process.env.RPC_URL),
      chain: {
        id: 707,
        name: "CloudChain",
        nativeCurrency: {
          decimals: 18,
          name: "Ether",
          symbol: "ETH",
        },
        rpcUrls: {
          public: { http: [process.env.RPC_URL as string] },
          default: { http: [process.env.RPC_URL as string] },
        },
      },
    })
  : undefined;
