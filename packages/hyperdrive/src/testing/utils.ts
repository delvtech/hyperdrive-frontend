import {
  type Chain,
  createPublicClient,
  createTestClient,
  createWalletClient,
  http,
} from "viem";
import { foundry } from "viem/chains";

/**
 * The id of the current test worker.
 *
 * This is used by the anvil proxy to route requests to the correct anvil instance.
 */
// eslint-disable-next-line turbo/no-undeclared-env-vars
export const pool = Number(process.env.VITEST_POOL_ID ?? 1);
export const anvil: Chain = {
  ...foundry,
  rpcUrls: {
    // These rpc urls are automatically used in the transports.
    default: {
      // Note how we append the worker id to the local rpc urls.
      http: [`http://127.0.0.1:8546/${pool}`],
      webSocket: [`ws://127.0.0.1:8546/${pool}`],
    },
    public: {
      // Note how we append the worker id to the local rpc urls.
      http: [`http://127.0.0.1:8546/${pool}`],
      webSocket: [`ws://127.0.0.1:8546/${pool}`],
    },
  },
} as const;

export const testClient = createTestClient({
  chain: anvil,
  mode: "anvil",
  transport: http(),
});

export const publicClient = createPublicClient({
  chain: anvil,
  transport: http(),
});

export const walletClient = createWalletClient({
  chain: anvil,
  transport: http(),
});
