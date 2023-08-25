import { QueryClient } from "@tanstack/query-core";
import {
  PoolActions,
  configurePoolActions,
} from "src/amm/configurePoolActions";
import { Address, PublicClient } from "viem";
import {
  PortfolioActions,
  configurePortfolioActions,
} from "./portfolio/configurePortfolioActions";
import { ViemHyperdrive } from "@hyperdrive/core";

type ConfigureHyperdriveOptions = {
  hyperdriveAddress: Address;
  hyperdriveMathAddress: Address;
  queryClient?: QueryClient;
} & (
  | {
      viem: {
        publicClient: PublicClient;
      };
      ethers?: never;
    }
  | {
      viem?: never;
      // TODO:
      ethers: {
        foo: string;
      };
    }
);

export function configureHyperdrive({
  hyperdriveAddress,
  hyperdriveMathAddress,
  viem,
  ethers,
  queryClient: queryClientFromOptions,
}: ConfigureHyperdriveOptions):
  | {
      poolActions: PoolActions;
      portfolio: PortfolioActions;
    }
  | undefined {
  const queryClient = queryClientFromOptions
    ? queryClientFromOptions
    : new QueryClient();

  if (viem) {
    const contract = new ViemHyperdrive({
      address: hyperdriveAddress,
      publicClient: viem.publicClient,
    });

    return {
      poolActions: configurePoolActions({
        contract,
        hyperdriveMathAddress,
        publicClient: viem.publicClient,
        queryClient,
      }),
      portfolio: configurePortfolioActions({
        hyperdriveAddress,
        publicClient: viem.publicClient,
        queryClient,
      }),
      // TODO: lpActions
    };
  } else if (ethers) {
    // TODO:
    return;
  }
}
