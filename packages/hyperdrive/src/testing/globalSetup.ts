import { startProxy } from "@viem/anvil";

export default async function (): Promise<() => Promise<void>> {
  const shutdown = await startProxy({
    port: 8546, // By default, the proxy will listen on port 8545.
    host: "::", // By default, the proxy will listen on all interfaces.
    options: {
      chainId: 123,
      loadState: "src/testing/anvil-dump-0.0.11",
    },
  });

  return shutdown;
}
