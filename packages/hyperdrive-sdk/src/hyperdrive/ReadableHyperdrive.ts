import { QueryClient } from "@tanstack/query-core";
import { ReadCallOptions } from "src/base/abitype";
import { makeQueryKey } from "src/caching/makeQueryKey";
import { HyperdriveContract } from "src/hyperdrive/HyperdriveContract";
import { PoolConfig } from "src/pool/PoolConfig";

interface ReadableHyperdriveConstructorOptions {
  contract: HyperdriveContract;
  queryClient?: QueryClient;
}

export class ReadableHyperdrive {
  private contract: HyperdriveContract;
  private queryClient: QueryClient;

  constructor({ contract, queryClient }: ReadableHyperdriveConstructorOptions) {
    this.contract = contract;
    this.queryClient = queryClient ? queryClient : new QueryClient();
  }

  /**
   * Gets the pool's configuration parameters
   * @param options
   * @returns PoolConfig
   */
  getPoolConfig(options: ReadCallOptions): Promise<PoolConfig> {
    return this.queryClient.fetchQuery({
      queryKey: makeQueryKey("getPoolConfig", {
        address: this.contract.address,
        options,
      }),
      queryFn: () => this.contract.read("getPoolConfig", [], options),
      // Pool config can never change, it's safe to cache forever
      staleTime: Infinity,
    });
  }
}
